//TODO : STRUCTURING THE PROFILE, AND SPLICING IT INTO TINY COMPONENTS
import { onAuthStateChanged } from "firebase/auth";
import "firebase/storage";
import "firebase/firestore";
import { storage } from "../config/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import React, { useEffect, useState, useRef, useReducer } from "react";
import { auth, db } from "../config/firebase";
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
import Toolitem from "../components/Tools/Toolitem";

import "../assets/styles/profile/profile.css";
import "../assets/styles/Modal/modal.css";

export const ModalcustomStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgba(0,0,0,0.8)",
    color: "#fff",
    borderRadius: "34px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.8)",
  },
};

const Profile = () => {
  const { currentUser, currentUserData } = useContext(AuthContext);

  const [authUser, setAuthUser] = useState(null);
  const [addBio, setAddBio] = useState(false);
  const [addInterests, setAddInterests] = useState(true);
  const [updateBio, setUpdateBio] = useState(false);
  const [updateInterests, setUpdateInterests] = useState(false);

  const [LikedTools, setLikedTools] = useState([]);
  const [bio, setBio] = useState("");
  const [categories, setCategories] = useState();
  const [checkedInterests, setcheckedInterests] = useState([]);

  const [reducerValue, forceRender] = useReducer((x) => x + 1, 0);

  //To Check if Edit profile button was clicked
  const [editProfileClicked, setEditProfileClicked] = useState(false);

  const navigate = useNavigate();

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

  Modal.setAppElement("#root");
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  //*************************END Modal Configs*********************************

  //_______________________________Inserting Changes_____________________________________________
  const handleInterestsChange = async () => {
    try {
      const UserRef = doc(db, "Users", currentUserData.uid);
      const data = { interests: checkedInterests };
      await updateDoc(UserRef, data)
        .then((UserRef) => {
          console.log(
            "A New Document Field has been added to an existing document"
          );
          closeModal();
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
    let userInterests = currentUserData.interests;
    setcheckedInterests(userInterests);
    console.log("User Interests " + checkedInterests);
    setEditProfileClicked(false);
    openModal();
  };

  //Edit profile
  const openEditProfileModal = () => {
    setEditProfileClicked(true);
    setEditedUsername(currentUserData.username);
    openModal();
  };

  /**************** Editing username and Profile PIC *****************/
  const [profilePicture, setProfilePicture] = useState(null);
  const [editedUsername, setEditedUsername] = useState(
    currentUserData?.username
  );

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
        LikedOnes.push(doc.data());
        setLikedTools(LikedOnes);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    LoadLikedTools();

    return () => LoadLikedTools();
  }, [reducerValue]);

  //Verifying Sign in and loading users infos on load
  useEffect(() => {
    LoadLikedTools();
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        currentUserData.interests.length > 0
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
        CategoriesArray.push(doc.data());
      });
      setCategories(CategoriesArray);
    });

    return listen();
  }, []);

  //To add/Update a Bio
  const UpdatingBio = async () => {
    try {
      const UserRef = doc(db, "Users", currentUserData.uid);
      await updateDoc(UserRef, { bio: bio });
      setAddBio(false);
      setUpdateBio(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="pt-[6rem]">
      <div className="mt-desktop-10 mt-mobile-8 mt-tablet-8 mt-widescreen-30 layoutContainer">
        <main className="layoutMain ">
          {/* Profile Info Component */}
          <div class="relative w-widescreen-5 mb-[4rem] profile-info-container bg-gradient-to-r from-[#18151D] to-[#27242E] rounded-xl p-10">
            <div class="row">
              <div class="col-md-2">
                <div class="w-full">
                  <img
                    src={currentUserData.photo}
                    class="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border-2 border-gray-300 rounded-full"
                    alt="pfp"
                  />
                </div>
              </div>
              <div class="col-md-7 ml-3">
                <div class="row">
                  <div class="col-md-3 my-3">
                    <p>{currentUserData.username}</p>
                  </div>
                  <div class="col">
                    <button
                      onClick={openEditProfileModal}
                      class="edit-profile-btn transition duration-250 hover:bg-white hover:text-black active:bg-gray-400 "
                      type="button"
                    >
                      Edit
                    </button>
                  </div>
                </div>
                <div className="bio-interests-texts">
                  <div class="row">
                    <div class="col">
                      <p>{currentUserData.bio}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      {currentUserData?.interests?.map((interest) => {
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
                    <button className="mr-4 transition duration-250 w-[100px] hover:bg-white hover:text-black active:bg-gray-400 ">
                      My Folders
                    </button>
                    <button className="mr-4 transition duration-250 hover:bg-white hover:text-black active:bg-gray-400 ">
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0">Settings</div>
          </div>
          {/* END Profile Info Component */}

          <div style={{ paddingLeft: "3rem", borderLeft: "1px solid white" }}>
            {/* BIO components */}
            {currentUserData.bio ? (
              <div>
                {updateBio ? (
                  <div class="bg-[#232628] rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between mb-[2rem]">
                    <div class="mb-4 md:mb-0">
                      <p class="font-bold text-lg leading-tight mb-3">Bio</p>
                      <input
                        class="h-7 p-2 w-full text-sm leading-tight text-black border-gray-400 border rounded-lg"
                        placeholder={currentUserData.bio}
                        onChange={(e) => setBio(e.target.value)}
                        type="text"
                      />
                    </div>
                    <div>
                      <button
                        onClick={() => setUpdateBio(false)}
                        class="cancel-btn fw-500"
                      >
                        Cancel
                      </button>
                      <button onClick={() => UpdatingBio()} class="update-btn">
                        Update
                      </button>
                    </div>
                  </div>
                ) : (
                  <div class="bg-[#232628] rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between mb-[2rem]">
                    <div class="mb-4 md:mb-0">
                      <p class="font-bold text-lg leading-tight mb-3">Bio</p>
                      <p class="text-sm">{currentUserData.bio}</p>
                    </div>
                    <div>
                      <button
                        onClick={() => setUpdateBio(true)}
                        class="edit-btn"
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
                      className="h-7 p-2 w-full text-sm leading-tight text-black border-gray-400 border rounded-lg"
                      placeholder="You can add your bio here"
                      onChange={(e) => setBio(e.target.value)}
                      type="text"
                    />
                  ) : (
                    <span style={{ color: "green" }}>
                      Tell us a little bit about you
                    </span>
                  )}
                </div>
                {addBio ? (
                  <div>
                    <button onClick={() => setAddBio(false)} class="cancel-btn">
                      Cancel
                    </button>
                    <button onClick={() => UpdatingBio()} class="submit-btn">
                      Submit
                    </button>
                  </div>
                ) : (
                  <div>
                    <button onClick={() => setAddBio(true)} class="add-btn">
                      +Add
                    </button>
                  </div>
                )}
              </div>
            )}
            {/* End Of BIO components */}

            {/* Interests components */}
            <div class="bg-[#232628] rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between mb-[4]">
              <div class="mb-4 md:mb-0">
                <p class="font-bold text-lg leading-tight mb-3">Interests</p>
                {currentUserData?.interests?.map((i, index) => (
                  <p className="text-sm leading-tight d-inline" key={index}>
                    {i},&nbsp;
                  </p>
                ))}
              </div>
              {updateInterests ? (
                <button onClick={editInterests} class="edit-btn">
                  +Add
                </button>
              ) : (
                <div>
                  <button onClick={editInterests} class="edit-btn">
                    Edit
                  </button>
                </div>
              )}
            </div>
            {/* End Of Interests components */}
          </div>

          {/* My List Container */}
          <div className="mylist-container" style={{ marginTop: "4rem" }}>
            <h2 className="font-bold mb-[2rem]">My List</h2>
            <div
              className="list-tools"
              style={{ padding: "0 0 0 3rem", borderLeft: "1px solid white" }}
            >
              {LikedTools?.map((tool) => (
                <Toolitem toolData={tool} forceRender={forceRender} />
              ))}
            </div>
          </div>
          {/* END My List Container */}
        </main>
      </div>

      {/* View of Profile Modals */}
      {!editProfileClicked ? (
        <div>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={ModalcustomStyles}
            contentLabel="Example Modal"
          >
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
              Please choose your interests :
            </h2>
            <span id="close-button" onClick={closeModal}>
              X
            </span>
            <div className="modal-flex inner-modal">
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
            <span className="save-btn" onClick={handleInterestsChange}>
              Save
            </span>
          </Modal>
        </div>
      ) : (
        <div className="form-container">
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={ModalcustomStyles}
            contentLabel="Example Modal"
          >
            <label className="form-label">
              Username:
              <input
                className="form-input"
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
