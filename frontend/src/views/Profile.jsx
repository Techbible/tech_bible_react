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
import { CategoriesData } from "../dataJson/CategoriesData";

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
    marginRight: "-20%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgba(0,0,0,0.8)",
    color: "#fff",
    borderRadius: "34px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flexWrap: "wrap",
    maxHeight: "70vh", // Set maximum height to 90% of viewport height
    overflow: "auto", // Enable scrolling if content overflows the modal
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.8)",
  },
};

const Profile = () => {
  let { name } = useParams();

  const [copied, setCopied] = useState(false);


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
  const [modalIsOpen2, setIsOpen2] = React.useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  function openModal2() {
    setIsOpen2(true);
  }
  function closeModal2() {
    setIsOpen2(false);
  }
  //*************************END Modal Configs*********************************

  //_______________________________Inserting Changes_____________________________________________
  const handleInterestsChange = async () => {
    try {
      const UserRef = doc(db, "Users", currentUserData.uid);
      const userCategories = [];
      CategoriesData.map((group) => {
        if (checkedInterests.includes(group.groupName)) {
          group.categories.map((category) => {
            userCategories.push(category);
          });
        }
      });
      const data = { interests: userCategories };
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
  const copyToClipboard = () => {
    const link = `https://techbible.ai/#/UserProfile/${currentUserData?.uid}`;
    navigator.clipboard.writeText(link)
      .then(() => {
        setCopied(true);
      })
      .catch((error) => {
        console.error('Failed to copy link: ', error);
      });
  };

  //Edit interests
  const editInterests = () => {
    let userCategories = currentUserData.interests;
    let userInterests = [];
    CategoriesData.map((group) => {
      if (
        userCategories?.some((element) => group.categories.includes(element))
      ) {
        userInterests.push(group.groupName);
      }
    });
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
    const usersRef = collection(db, "Users");
    const userDocRef = doc(usersRef, currentUser?.uid);

    if (profilePicture === null) {
      // Photo is not selected for upload, update only the username
      updateDoc(userDocRef, {
        username: editedUsername,
      })
        .then(() => {
          console.log("Username updated");
          closeModal();
        })
        .catch((error) => {
          console.log("Error updating username:", error);
          closeModal();
        });
      return;
    }

    const imageRef = ref(
      storage,
      `profile-pictures/${profilePicture.name + currentUser?.uid}`
    );

    uploadBytes(imageRef, profilePicture)
      .then((snapshot) => {
        console.log("Image uploaded");
        getDownloadURL(snapshot.ref)
          .then((url) => {
            // Photo has changed, update both username and photo
            updateDoc(userDocRef, {
              username: editedUsername,
              photo: url,
            })
              .then(() => {
                console.log("Username and photo updated");
                closeModal();
              })
              .catch((error) => {
                console.log("Error updating username and photo:", error);
                closeModal();
              });
          })
          .catch((error) => {
            console.log("Error getting download URL:", error);
            closeModal();
          });
      })
      .catch((error) => {
        console.log("Error uploading image:", error);
        closeModal();
      });
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

  // useEffect(() => {
  //   //getting the available categories
  //   const dbRef = collection(db, "Categories");
  //   onSnapshot(dbRef, (docsSnap) => {
  //     const CategoriesArray = [];
  //     docsSnap.forEach((doc) => {
  //       CategoriesArray.push(doc.data());
  //     });
  //     setCategories(CategoriesArray);
  //   });
  // }, [categories]);

  // New useEffect locic
  useEffect(() => {
    const CategoriesArray = [];
    CategoriesData.map((group) => {
      group.categories.map((category) => CategoriesArray.push(category));
    });
    setCategories(CategoriesArray);
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
    <div className="flex flex-column align-items-center pt-[6rem]">
      <div className="mt-desktop-10 mt-mobile-8 mt-tablet-8 mt-widescreen-30 layoutContainer">
        <main className="layoutMain pl-desktop-5 pl-mobile-4 ">
          <div className="text-[16px] fontWeight-500 ml-[2.5rem] ">
            WELCOME,
          </div>
          <div className="relative xl:w-[711px] lg:xl:w-[711px] max-w-[711px] m-0 pl-0 w-widescreen-5 mb-[4rem] profile-info-container bg-[#0D0C12] rounded-xl p-10">
            <div className="row">
              <div className="col-md-2">
                <div className="mb-3">
                  <img
                    src={currentUserData.photo}
                    className="w-[80px] h-[80px] sm:w-[80px] sm:h-[80px] md:w-[80px] md:h-[80px] border-2 border-gray-300 rounded-full"
                    alt=""
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

                    <button className="absolute top-[44px] right-[10px] text-[12px]  bg-[#ef4823] px-[15px] py-[1.5px] rounded-[4px] transition duration-300 hover:bg-[#ca391c] active:bg-[#b32712]"
                    onClick={()=>openModal2()}>
                      Share
                    </button>
                    {/* <button
                      onClick={() => setEditProfileClicked(true)}
                      className="text-[12px]  bg-[#ef4823] px-[15px] py-[1.5px] my-3 rounded-[4px] transition duration-300 hover:bg-[#ca391c] active:bg-[#b32712]"
                    >
                      Edit
                    </button> */}
                    <button
                      onClick={openEditProfileModal}
                      className="text-[12px]  bg-[#ef4823] px-[15px] py-[1.5px] my-3 rounded-[4px] transition duration-300 hover:bg-[#ca391c] active:bg-[#b32712]"
                      type="button"
                    >
                      Edit
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
                      {CategoriesData?.map((group) => {
                        if (
                          currentUserData?.interests?.some((interest) =>
                            group.categories.includes(interest)
                          )
                        ) {
                          return (
                            <p className="text-[12] d-inline-block">
                              {group.groupName}&nbsp;&nbsp;
                            </p>
                          );
                        }
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
                  {/* {currentUserData?.interests?.map((i, index) => (
                    <p
                      className="text-sm leading-tight d-inline mr-1 mb-1"
                      key={index}
                    >
                      {i},
                    </p>
                  ))} */}
                  {CategoriesData?.map((group) => {
                    if (
                      currentUserData?.interests?.some((interest) =>
                        group.categories.includes(interest)
                      )
                    ) {
                      return (
                        <p className="text-sm leading-tight d-inline mr-1 mb-1">
                          {group.groupName}&nbsp;&nbsp;
                        </p>
                      );
                    }
                  })}
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
                className="mb-4 text-white xl:text-[30px] lg:text-[28px] md:text-[26px] sm:text-[24px] light fontWeight-500"
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
              <div
                className="flex flex-wrap justify-start gap-4 h-[40vh] "
                style={{ maxHeight: "300px", overflowY: "auto" }}
              >
                {CategoriesData?.map((group) => (
                  <label
                    key={group.groupName}
                    className="flex items-center bg-gray-300 max-w-lg rounded-full py-1 px-3 transition duration-250 hover:bg-white cursor-pointer mr-3"
                    htmlFor={group.groupName}
                    style={
                      checkedInterests.includes(group.groupName)
                        ? { backgroundColor: "#7869e6", color: "white" }
                        : {}
                    }
                  >
                    <div className="flex items-center w-full">
                      <input
                        type="checkbox"
                        id={group.groupName}
                        value={group.groupName}
                        onChange={(e) => handleInterestCheck(e)}
                        checked={checkedInterests.includes(group.groupName)}
                        className="form-checkbox h-4 w-4 text-primary"
                        style={{ display: "none" }}
                      />

                      <span
                        className="ml-2 text-black xl:text-[15px] lg:text-[15px] md:text-[12px] sm:text-[12px] text-[12px]  font-medium w-full"
                        style={
                          checkedInterests.includes(group.groupName)
                            ? { color: "white" }
                            : {}
                        }
                      >
                        {group.groupName}
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
            <div className="flex flex-col items-center">
              <label className="form-label text-[14px] text-[#FF6700] poppins">
                Username
              </label>
              <input
                className=" w-[235px] form-input text-black bg-white rounded-md py-1 px-2 ml-2 light text-[12px]  "
                value={editedUsername}
                onChange={(e) => {
                  setEditedUsername(e.target.value);
                }}
              />

              <label className="form-label text-[14px] text-[#FF6700] poppins mt-2">
                Select a photo:
              </label>
              <input
                className="form-input text-black bg-white rounded-md py-1 px-2 ml-2 light text-[12px] max-w-[400px] "
                type="file"
                accept="image/*"
                onChange={(event) => setProfilePicture(event.target.files[0])}
              />

              <button
                className="bg-[#EF4823] w-[10vh] py-[2px] rounded-md text-[14px] poppins transition duration-250 hover:bg-[#FF6700] mt-2"
                onClick={uploadImage}
              >
                Upload
              </button>
            </div>
          </Modal>
        </div>
      )}
      {/* END View of Profile Modals */}
      <Modal
      isOpen={modalIsOpen2}
      onRequestClose={closeModal}
      style={ModalcustomStyles}
      contentLabel="Example Modal-LINK"
    >
      <div className="p-6">
        <button
          onClick={closeModal2}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-200 focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <p className="mb-4 font-bold">Profile link:</p>
        <code>{`UserProfile/${currentUserData?.uid}`}</code>
        <br/>
        <button
          onClick={copyToClipboard}
          className={`mt-4 px-4 py-2 rounded ${
            copied ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'
          }`}
        >
          {copied ? 'Copied!' : 'Copy Link'}
        </button>
      </div>
    </Modal>
    </div>
  );
};

export default Profile;
