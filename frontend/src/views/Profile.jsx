//TODO : STRUCTURING THE PROFILE, AND SPLICING IT INTO TINY COMPONENTS
import { onAuthStateChanged } from "firebase/auth";
import "firebase/storage";
import "firebase/firestore";
import { storage } from "../config/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import React, { useEffect, useState, useRef, useReducer } from "react";
import { auth, db } from "../config/firebase";
import { Link, useNavigate, useParams } from "react-router-dom";
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
import axios from "axios";
import { BASE_URL } from "../config/mongo";

export const ModalcustomStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    // marginRight: "-50%",
    marginRight: "-20%",
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
  let { name } = useParams();

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
      `profile-pictures/${profilePicture.name + currentUser?.uid}`
    );
    const usersRef = collection(db, "Users");
    const userDocRef = doc(usersRef, currentUser?.uid);
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
  // const LoadLikedTools = async () => {
  //   const ToolsRef = collection(db, "Tools");
  //   const LikedOnes = [];
  //   const q = query(
  //     ToolsRef,
  //     where("LikedBy", "array-contains", currentUser?.uid),
  //     limit(10)
  //   );
  //   try {
  //     const querySnapshot = await getDocs(q);
  //     querySnapshot.forEach((doc) => {
  //       LikedOnes.push(doc.data());
  //       setLikedTools(LikedOnes);
  //       forceRender();
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  //this is mongo
  const LoadLikedTools = async () => {
    try {
      // const response = await axios.get("/api/tools", {
      //   params: {
      //     LikedBy: currentUser?.uid,
      //     limit: 10,
      //   },
      // });
      // const LikedOnes = response.data;
      const response = await axios.get(`${BASE_URL}/mongo-tools`);
      const LikedOnes = response.data.filter((tool) =>
        tool.LikedBy.includes(currentUser?.uid)
      );
      setLikedTools(LikedOnes);
      // forceRender();
    } catch (error) {
      console.error(error);
    }
  };

  //Verifying Sign in and loading users infos on load
  useEffect(() => {
    LoadLikedTools();
    const listen = onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          setAuthUser(user);
          currentUserData.interests.length > 0
            ? setAddInterests(false)
            : setAddInterests(false);
        } else {
          navigate("/signin");
          setAuthUser(null);
        }
      },
      []
    );

    return listen();
  }, [LikedTools]);
  useEffect(() => {
    //getting the available categories
    const dbRef = collection(db, "Categories");
    onSnapshot(dbRef, (docsSnap) => {
      const CategoriesArray = [];
      docsSnap.forEach((doc) => {
        CategoriesArray.push(doc.data());
      });
      setCategories(CategoriesArray);
    });
  }, [categories]);

  //To add/Update a Bio
  const UpdatingBio = async () => {
    try {
      if (bio.length > 50) {
        alert("Your bio is more than 50 characters");
      } else {
        const UserRef = doc(db, "Users", currentUserData.uid);
        await updateDoc(UserRef, { bio: bio });
        setAddBio(false);
        setUpdateBio(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="pt-[6rem]">
      <div className="mt-desktop-10 mt-mobile-8 mt-tablet-8 mt-widescreen-30 layoutContainer">
        <main className="layoutMain pl-desktop-5 pl-mobile-4 ">
          <div className="text-[16px] fontWeight-500 ml-[2.5rem] ">
            WELCOME,
          </div>
          {/* Profile Info Component */}
          {/* <div className="relative max-w-[711px] w-widescreen-5 mb-[4rem] profile-info-container bg-gradient-to-r from-[#18151D] to-[#27242E] rounded-xl p-10"> */}
          <div className="relative max-w-[711px] m-0 pl-0 w-widescreen-5 mb-[4rem] profile-info-container bg-[#0D0C12] rounded-xl p-10">
            <div className="row">
              <div className="col-md-2">
                <div className="mb-3">
                  <img
                    src={currentUserData.photo}
                    className="w-[80px] h-[80px] sm:w-[80px] sm:h-[80px] md:w-[80px] md:h-[80px] border-2 border-gray-300 rounded-full"
                    alt="pfp"
                  />
                </div>
              </div>
              <div className="col-md-7 mr-[100px] ">
                <div className="row justify-content-center">
                  <div className="col-md-3 mb-3">
                    <p className="fontWeight-500">{currentUserData.username}</p>
                  </div>
                  <div className="col">
                    {name?.length === 0 ? (
                      <button
                        onClick={openEditProfileModal}
                        className="edit-profile-btn mb-3 transition duration-250 "
                        type="button"
                      >
                        Edit
                      </button>
                    ) : (
                      <div></div>
                    )}

                    <button className="absolute top-[44px] right-[10px] text-[12px]  bg-[#7869e6] px-[15px] py-[1.5px] rounded-[4px] transition duration-300 hover:bg-[#604fe7] active:bg-[#4635ca]">
                      Share
                    </button>
                  </div>
                </div>
                <div className="bio-interests-texts">
                  <div className="row">
                    <div className="col">
                      <p>{currentUserData.bio}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
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
                <div className="row">
                  <div className="col profile-info-buttons">
                    <button className="mr-4 transition duration-250 w-[100px] my-2 ">
                      <Link to="/folders">My Folders</Link>
                    </button>
                    {/* <button className="mr-4 transition duration-250 ">
                      Share
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="absolute top[] right-[10px]">Share</div> */}
          </div>
          {/* END Profile Info Component */}

          <div
            style={{
              paddingLeft: "3rem",
              borderLeft: "1px solid white",
              maxWidth: "710px",
            }}
          >
            {/* BIO components */}
            {currentUserData.bio ? (
              <div>
                {updateBio ? (
                  <div className="bg-[#232628] rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between mb-[2rem]">
                    <div className="mb-4 md:mb-0">
                      <p className="font-bold text-lg leading-tight mb-3">
                        Bio
                      </p>
                      <input
                        className="h-7 p-2 w-full text-sm leading-tight text-black border-gray-400 border rounded-lg"
                        placeholder={currentUserData.bio}
                        onChange={(e) => setBio(e.target.value)}
                        type="text"
                      />
                    </div>
                    <div>
                      <button
                        onClick={() => setUpdateBio(false)}
                        className="cancel-btn fw-500"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => UpdatingBio()}
                        className="update-btn"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="bg-[#232628] rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between mb-[2rem]">
                    <div className="mb-4 md:mb-0">
                      <p className="font-bold text-lg leading-tight mb-3">
                        Bio
                      </p>
                      <div className="max-w-[10rem]">
                        <p className="text-sm">{currentUserData.bio}</p>
                      </div>
                    </div>
                    <div>
                      <button
                        onClick={() => setUpdateBio(true)}
                        className="edit-btn"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-[#232628] rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between mb-[2rem]">
                <div className="mb-4 md:mb-0">
                  <p className="font-bold text-lg leading-tight mb-3">Bio</p>

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
                    <button
                      onClick={() => setAddBio(false)}
                      className="cancel-btn"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => UpdatingBio()}
                      className="submit-btn"
                    >
                      Submit
                    </button>
                  </div>
                ) : (
                  <div>
                    <button onClick={() => setAddBio(true)} className="add-btn">
                      +Add
                    </button>
                  </div>
                )}
              </div>
            )}
            {/* End Of BIO components */}

            {/* Interests components */}
            <div className="bg-[#232628] rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between mb-[4]">
              <div className="mb-4 md:mb-0">
                <p className="font-bold text-lg leading-tight mb-3">
                  Interests
                </p>
                <div className="flex flex-wrap">
                  {currentUserData?.interests?.map((i, index) => (
                    <p
                      className="text-sm leading-tight d-inline mr-1 mb-1"
                      key={index}
                    >
                      {i},
                    </p>
                  ))}
                </div>
              </div>
              {currentUserData?.interests?.length === 0 ? (
                <button onClick={editInterests} className="edit-btn">
                  +Add
                </button>
              ) : (
                <div>
                  <button onClick={editInterests} className="edit-btn">
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
            <div className="mx-16">
              <h2
                ref={(_subtitle) => (subtitle = _subtitle)}
                className="mb-4 text-xl font-bold"
              >
                Please choose your interests:
              </h2>
              <span
                id="close-button"
                className="text-gray-600 hover:text-black hovet:text-white cursor-pointer px-3 transition duration-250"
                onClick={closeModal}
              >
                X
              </span>
              <div className="flex flex-wrap justify-start gap-4">
                {categories?.map((categorie) => (
                  <label
                    key={categorie.Category}
                    className="flex items-center bg-gray-300 max-w-lg rounded-full py-1 px-3 transition duration-250 hover:bg-white cursor-pointer"
                    htmlFor={categorie.Category}
                    style={
                      checkedInterests.includes(categorie.Category)
                        ? { backgroundColor: "#7869e6", color: "white" }
                        : {}
                    }
                  >
                    <div className="flex items-center w-full">
                      <input
                        type="checkbox"
                        id={categorie.Category}
                        value={categorie.Category}
                        onChange={(e) => handleInterestCheck(e)}
                        checked={checkedInterests.includes(categorie.Category)}
                        className="form-checkbox h-4 w-4 text-primary"
                        style={{ display: "none" }}
                      />

                      <span
                        className="ml-2 text-lg font-medium text-gray-700 w-full"
                        style={
                          checkedInterests.includes(categorie.Category)
                            ? { color: "white" }
                            : {}
                        }
                      >
                        {categorie.Category}
                      </span>
                    </div>
                  </label>
                ))}
              </div>
              <span
                className="inline-block mt-4 px-4 py-2 bg-white text-black transition duration-250 hover:bg-black hover:fontWeight-bold rounded-lg cursor-pointer"
                onClick={handleInterestsChange}
              >
                Save
              </span>
            </div>
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
