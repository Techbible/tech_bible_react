//TODO : STRUCTURING THE PROFILE, AND SPLICING IT INTO TINY COMPONENTS

//Imports
import { onAuthStateChanged } from "firebase/auth";
import "firebase/storage";
import "firebase/firestore";
import { storage } from "../config/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import React, { useEffect, useState, useRef, useReducer } from "react";
import { auth, db } from "../config/firebase";
import { Bio } from "../components";
import { Link, useNavigate } from "react-router-dom";
import {
  collection,
  doc,
  getDocs,
  limit,
  onSnapshot,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import Modal from "react-modal";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

// import "../assets/styles/profile/profile.css";
// import "../assets/styles/profile/editProfile.css";
import "../assets/styles/profile/profile.css";

import { LikeMethods } from "../lib";
import Toolitem from "../components/Tools/Toolitem";

const Profile = () => {
  /*****************************Importing Ready Methods START******************************* */
  // referencing our methods
  const LikeMethodsRef = useRef(null);

  const { currentUser } = useContext(AuthContext);

  const [authUser, setAuthUser] = useState(null);
  const [addBio, setAddBio] = useState(false);
  const [addInterests, setAddInterests] = useState(true);
  const [updateBio, setUpdateBio] = useState(false);
  const [updateInterests, setUpdateInterests] = useState(false);

  const [LikedTools, setLikedTools] = useState([]);
  const [interests, setIntersts] = useState(null);
  const [bio, setBio] = useState("");
  const [categories, setCategories] = useState();
  const [checkedInterests, setcheckedInterests] = useState([]);

  const [reducerValue, forceRender] = useReducer((x) => x + 1, 0);

  //To Check if Edit profile button was clicked
  const [editProfileClicked, setEditProfileClicked] = useState(false);

  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    uid: "",
    photo: "",
    username: "",
    bio: "",
    list: [],
    interests: [],
  });

  //Handling Interests with Checkbox
  const handleInterestCheck = (event) => {
    const { value, checked } = event.target;

    let interests = checkedInterests;
    if (checked) {
      interests = checkedInterests;
      interests.push(value);
      setcheckedInterests(interests);
      // console.log(checkedInterests);
    } else {
      interests = interests.filter((interest) => interest !== value);
      setcheckedInterests(interests);
    }
  };
  //_______________________________Modal Configs_____________________________________________
  //Modal Styles
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "rgba(0,0,0,0.8)",
      color: "#fff",
      borderRadius: "40px",
    },
  };

  Modal.setAppElement("#root");
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }
  function closeModal() {
    setIsOpen(false);
  }
  //*************************END Modal Configs*********************************

  //_______________________________Inserting Changes_____________________________________________
  const handleInterestsChange = async () => {
    try {
      const UserRef = doc(db, "Users", userData.uid);
      const data = { interests: checkedInterests };
      await updateDoc(UserRef, data)
        .then((UserRef) => {
          console.log(
            "A New Document Field has been added to an existing document"
          );
        })
        .catch((error) => {
          console.log(error);
        });

      closeModal();
    } catch (error) {
      console.log(error);
    }
  };

  //Edit interests
  const editInterests = () => {
    let userInterests = userData.interests;
    setcheckedInterests(userInterests);
    console.log("User Interests " + checkedInterests);
    setEditProfileClicked(false);
    openModal();
  };

  //Edit profile
  const openEditProfileModal = () => {
    setEditProfileClicked(true);
    setEditedUsername(userData.username);
    openModal();
  };

  /**************** Editing username and Profile PIC *****************/
  const [profilePicture, setProfilePicture] = useState(null);
  const [editedUsername, setEditedUsername] = useState(userData.username);

  const uploadImage = () => {
    if (profilePicture === null) return;
    const imageRef = ref(
      storage,
      `profile-pictures/${profilePicture.name + currentUser.uid}`
    );
    const usersRef = collection(db, "Users");
    const userDocRef = doc(usersRef, currentUser.uid);
    uploadBytes(imageRef, profilePicture).then((snapshot) => {
      console.log("Image uploaded");
      getDownloadURL(snapshot.ref)
        .then((url) => {
          updateDoc(userDocRef, {
            username: editedUsername,
            photo: url,
          })
            .then(() => {
              console.log("Photo updated");
            })
            .catch((error) => {
              console.log("Error updating photo:", error);
            });
        })
        .catch((error) => {
          console.log("Error getting download URL:", error);
        });
      closeModal();
    });

    closeModal();
  };

  //************************END Inserting Changes*********************************

  //loading the liked tools by the currentUser
  const LoadLikedTools = async () => {
    const ToolsRef = collection(db, "Tools");
    const LikedOnes = [];
    const q = query(
      ToolsRef,
      where("LikedBy", "array-contains", currentUser?.uid),
      limit(10)
    );
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        LikedOnes.push(doc.data());
        setLikedTools(LikedOnes);
        // console.log(LikedTools);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    LoadLikedTools();
  }, [reducerValue]);

  useEffect(() => {
    LoadLikedTools();
  });

  //Verifying Sign in and loading users infos on load
  useEffect(() => {
    LoadLikedTools();
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);

        const unsub = onSnapshot(doc(db, "Users", user.uid), (doc) => {
          setUserData({
            uid: doc.data().uid,
            photo: doc.data().photo,
            username: doc.data().username,
            bio: doc.data().bio,
            interests: doc.data().interests,
            list: doc.data().list,
          });
        });
        userData.interests.length > 0
          ? setAddInterests(false)
          : setAddInterests(false);
      } else {
        navigate("/signin");
        setAuthUser(null);
      }
    });

    //getting the available categories
    const dbRef = collection(db, "Categories");
    onSnapshot(dbRef, (docsSnap) => {
      const CategoriesArray = [];
      docsSnap.forEach((doc) => {
        // console.log(doc.data());
        CategoriesArray.push(doc.data());
      });
      // console.log(CategoriesArray);
      setCategories(CategoriesArray);
    });
    // (false)
    // setEditProfileSelected(false)

    return listen();
  }, []);

  //To add/Update a Bio
  const UpdatingBio = async () => {
    try {
        const UserRef = doc(db, "Users", userData.uid);
        await updateDoc(UserRef, { bio: bio });
        setAddBio(false);
        setUpdateBio(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUnlike = (toolID) => {
    LikeMethodsRef.current.Unlike(toolID);
    forceRender();
    if (LikedTools.length === 1) setLikedTools([]);
    // window.location.reload()
  };

  return (
    <div className="pt-[6rem]">
      <LikeMethods ref={LikeMethodsRef} />
      <div className="mt-desktop-10 mt-mobile-8 mt-tablet-8 mt-widescreen-30 layoutContainer">
        <main className="layoutMain">
          {/* Profile Info Component */}
          <div class="w-widescreen-5 mb-[4rem] profile-info-container">
            <div class="row">
              <div class="col-md-2">
                {/* <img
                src="https://wallpapers.com/images/featured/87h46gcobjl5e4xu.jpg"
                alt="Profile Image"
                class="rounded-full max-h-60 max-w-60 object-cover object-center md:h-auto md:w-auto"
              /> */}
                <div class="w-full">
                  <img
                    src={userData.photo}
                    class="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border-2 border-gray-300 rounded-full"
                    alt="Profile Image"
                  />
                </div>
              </div>
              <div class="col-md-7">
                <div class="row">
                  <div class="col-md-3">
                    <p>{userData.username}</p>
                  </div>
                  <div class="col">
                    <button
                      onClick={openEditProfileModal}
                      class="edit-profile-btn"
                      type="button"
                    >
                      Edit
                    </button>
                  </div>
                </div>
                <div className="bio-interests-texts">
                  <div class="row">
                    <div class="col">
                      <p>{userData.bio}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      {userData.interests.map((interest) => {
                        return (
                          <p className="text-[12] d-inline-block">
                            {interest}&nbsp;&nbsp;
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col profile-info-buttons">
                    <button className="mr-4">About</button>
                    <Link to="/list">
                      <button className="mr-4">My List</button>
                    </Link>
                    <button className="mr-4">Share</button>
                    <button className="mr-4">Folder</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END Profile Info Component */}

          <div style={{ paddingLeft: "3rem", borderLeft: "1px solid white" }}>
            {/* BIO components */}
            {userData.bio ? (
              <div>
                {updateBio ? (
                  <div class="bg-[#232628] rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between mb-[2rem]">
                    <div class="mb-4 md:mb-0">
                      <p class="font-bold text-lg leading-tight mb-3">Bio</p>
                      <input
                        class="text-sm leading-tight text-black"
                        placeholder={userData.bio}
                        onChange={(e) => setBio(e.target.value)}
                        type="text"
                      />
                    </div>
                    <div>
                      <button
                        onClick={() => setUpdateBio(false)}
                        class="edit-add-btn"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => UpdatingBio()}
                        class="edit-add-btn"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                ) : (
                  // userData.bio
                  <div class="bg-[#232628] rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between mb-[2rem]">
                    <div class="mb-4 md:mb-0">
                      <p class="font-bold text-lg leading-tight mb-3">Bio</p>
                      <p class="text-sm">{userData.bio}</p>
                        </div>
                      <div>
                        <button
                          onClick={() => setUpdateBio(true)}
                          class="edit-add-btn"
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                )}
                
              </div>
            ) : (
              <div class="bg-[#232628] rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between mb-[2rem]">
                <div class="mb-4 md:mb-0">
                  <p class="font-bold text-lg leading-tight mb-3">Bio</p>
                  {addBio ? (
                    <input
                      className="profile-input"
                      placeholder="You can add your bio here"
                      onChange={(e) => setBio(e.target.value)}
                      type="text"
                    />
                  ) : (
                    <span style={{ color: "red" }}>
                      you don't have a bio yet
                    </span>
                  )}
                  {addBio ? (
                    <div>
                      <button
                        onClick={() => setAddBio(false)}
                        class="edit-add-btn"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => UpdatingBio()}
                        class="edit-add-btn"
                      >
                        Submit
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setAddBio(true)}
                      class="edit-add-btn"
                    >
                      +Add
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* End Of BIO components */}

            {/* Interests components */}
            <div class="bg-[#232628] rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between mb-[4]">
              <div class="mb-4 md:mb-0">
                <p class="font-bold text-lg leading-tight mb-3">Interests</p>
                <p class="text-sm leading-tight">
                  Digital Marketing and Graphic Design, Adobe suites
                </p>
              </div>
              <button class="edit-add-btn">Add</button>
            </div>
            {/* End Of Interests components */}
          </div>

          {/* My List Container */}
          <div className="mylist-container" style={{ marginTop: "4rem" }}>
            <h2 className="font-bold mb-[2rem]">My List</h2>
            <dir
              className="list-tools"
              style={{ padding: "0 0 0 3rem", borderLeft: "1px solid white" }}
            >
              <Toolitem />
              <Toolitem />
              <Toolitem />
            </dir>
          </div>
          {/* END My List Container */}
        </main>
      </div>

      {/* View of Profile Modals */}
      {!editProfileClicked ? (
        <div>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
              Please choose your interests :{" "}
            </h2>
            <span id="close-button" onClick={closeModal}>
              X
            </span>
            <div className="flex inner-modal">
              {categories?.map((categorie) => (
                <div className="flex interests-wrapper">
                  <span className="Interest">
                    <input
                      type={"checkbox"}
                      value={`${categorie.Category}`}
                      onChange={(e) => handleInterestCheck(e)}
                      checked={
                        checkedInterests.includes(`${categorie.Category}`)
                          ? true
                          : null
                      }
                    />
                    &nbsp;
                    {categorie.Category}
                  </span>
                </div>
              ))}
            </div>
            <span
              className="profile-btn-outlined-3"
              onClick={handleInterestsChange}
            >
              Save
            </span>
          </Modal>
        </div>
      ) : (
        <div className="form-container">
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <label className="form-label">
              Username:
              <input
                className="form-input"
                // placeholder="username"
                // value={!isUsernameEditing ? userData.username : editedUsername}
                value={editedUsername}
                onChange={(e) => {
                  setEditedUsername(e.target.value);
                }}
              />
            </label>
            <br />
            <br />
            <label className="form-label">
              Select a photo:
              {/* <input className="form-input" type="file" accept="image/*" onChange={(event)=>setProfilePicture(event.target.files[0])} />
            <button onClick={uploadImage}>Upload</button> */}
              <input
                className="form-input"
                type="file"
                accept="image/*"
                onChange={(event) => setProfilePicture(event.target.files[0])}
              />
              <button className="upload-button" onClick={uploadImage}>
                Upload
              </button>
            </label>
          </Modal>
        </div>
      )}
      {/* END View of Profile Modals */}
    </div>
  );
};

export default Profile;
