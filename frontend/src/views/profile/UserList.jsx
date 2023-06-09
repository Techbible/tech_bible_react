import React, { useState, useEffect } from "react";
import {
  arrayUnion,
  collection,
  doc,
  getDocs,
  limit,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { db, storage } from "../../config/firebase";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import Toolitem from "../../components/Tools/Toolitem";
import { useReducer } from "react";
import { ModalcustomStyles } from "../Profile";
import { CategoriesData } from "../../dataJson/CategoriesData";

import "../../assets/styles/profile/profile.css";
import "../../assets/styles/Modal/modal.css";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Folder from "./Folder";
import axios from "axios";
import { BASE_URL } from "../../config/mongo";

const UserList = () => {
  //to force re-render
  const [reducerValue, forceRender] = useReducer((x) => x + 1, 0);

  const { currentUser, updateUserData } = useContext(AuthContext);
  const [categories, setCategories] = useState([]);
  const [Category, setCategory] = useState("");
  const [Name, setName] = useState("");

  const [LikedTools, setLikedTools] = useState([]);
  const [UserFolders, setUserFolders] = useState([]);

  //loading the liked tools by the currentUser
  const LoadLikedTools = async () => {
    const ToolsRef = collection(db, "Tools");
    const LikedOnes = [];
    const q = query(
      ToolsRef,
      where("LikedBy", "array-contains", currentUser?.uid)
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
  // const createFolder = () => {

  //     const usersRef = collection(db, "Users");
  //     const userDocRef = doc(usersRef, currentUser?.uid);
  //     updateDoc(userDocRef, {
  //             folders: arrayUnion({
  //               name: Name,
  //               category: Category,
  //               tools: [],
  //             }),
  //           })
  //             .then(() => {
  //               console.log("Photo uploaded!");
  //             })
  //             .catch((error) => {
  //               console.log("Error updating photo:", error);
  //             });

  //     closeModal();
  //     forceRender();
  //   };

  // const LoadFolders = async () => {
  //   const UserRef = collection(db, "Users");
  //   const q = query(UserRef, where("uid", "==", currentUser?.uid));

  //   try {
  //     const querySnapshot = await getDocs(q);
  //     querySnapshot.forEach((doc) => {
  //       setUserFolders(doc.data().folders);
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const fetchUserFolders = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/userFolders/${currentUser.uid}`
      );
      setUserFolders(response.data);
    } catch (error) {
      console.error(error);
      // Handle error cases and display error messages to the user
    }
  };

  useEffect(() => {
    const fetchUserFolders = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/userFolders/${currentUser.uid}`
        );
        setUserFolders(response.data);
      } catch (error) {
        console.error(error);
        // Handle error cases and display error messages to the user
      }
    };
    fetchUserFolders();
  }, []);

  const handleCreateFolder = async (e) => {
    e.preventDefault();
    try {
      const uid = currentUser?.uid;
      const requestBody = {
        uid,
        Name,
        Category,
      };

      const response = await axios.post(
        `${BASE_URL}/createFolder`,
        requestBody
      );
      fetchUserFolders();
      closeModal();
      console.log(response.data); // Newly created folder object
      // Handle any additional logic or UI updates upon successful response
    } catch (error) {
      console.error(error);
      // Handle error cases and display error messages to the user
    }
  };

  const getCategories = () => {
    //getting the categories
    const dbRef = collection(db, "Categories");
    onSnapshot(dbRef, (docsSnap) => {
      const CategoriesArray = [];
      docsSnap.forEach((doc) => {
        // console.log(doc.data());
        CategoriesArray.push(doc.data());
      });
      setCategories(CategoriesArray);
      // console.log(categories);
    });
  };

  useEffect(() => {
    LoadLikedTools();
    getCategories();
  }, []);

  // useEffect(() => {
  //   LoadFolders();
  // }, [reducerValue]);

  //***************************Modal Configs*********************************/

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
  //*************************END Modal Configs*********************************/

  const [isRowsView, setIsRowsView] = useState(false);

  const toggleView = () => {
    setIsRowsView(!isRowsView);
  };

  return (
    <div className="wrapper">
      <div className="create-folder" onClick={openModal}>
        + create a new folder
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-sm w-full lg:max-w-full mb-[10rem] lg:flex">
          <div
            className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            style={{
              backgroundImage:
                "url('https://images.ctfassets.net/lzny33ho1g45/6VcDGWbQfWElVwAiMWLk9c/1bfe7635d6b112fb7be963620c0c6a0d/best_apps_14.png?w=1520&fm=jpg&q=30&fit=thumb&h=760')",
              title: "Woman holding a mug",
            }}
          ></div>
          <div className="border-b border-gray-400 lg:border-gray-400 bg-dark lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <div className="text-white font-bold text-xl mb-2">
                <Link to="/liked-tools">All your liked tools</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end mb-4">
          <button
            className="px-2 py-1 rounded bg-dark-500 text-white"
            onClick={toggleView}
          >
            <img
              src={
                isRowsView
                  ? `${process.env.PUBLIC_URL}/assets/column.png`
                  : `${process.env.PUBLIC_URL}/assets/row.png`
              }
              alt="view"
              width="28px"
            />
          </button>
        </div>

        <div
          className={`space-x-4 grid grid-cols-${isRowsView ? "1" : "3"} gap-4`}
        >
          {UserFolders.map((item, index) => (
            <Link to={`/folder/f/${index}`}>
              <Folder key={index} isRowsView={isRowsView} item={item} />
            </Link>
          ))}
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={ModalcustomStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
          Create a <span className="under-line">New folder</span>{" "}
        </h2>
        <span id="close-button" onClick={closeModal}>
          X
        </span>
        <div className="flex flex-col inner-modal my-10">
          <div className="flex m-5">
            <h4>Folder Name : </h4>{" "}
            <input
              type="text"
              className="folder-input"
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter a name..."
            />
          </div>
          <div className="flex m-5">
            <h4>Folder Category : </h4>
            <div className="ml-2">
              <select
                onChange={(e) => setCategory(e.target.value)}
                className="combo-box bg-white text-black px-1 rounded-[4px] "
              >
                <option value="all categories">All Categories</option>
                {CategoriesData?.map((group) => {
                  return group.categories.map((category) => {
                    return (
                      <option className="text-black" value={category}>
                        {category}{" "}
                      </option>
                    );
                  });
                })}
              </select>
            </div>
          </div>
        </div>
        <span className="save-btn" onClick={(e) => handleCreateFolder(e)}>
          + create
        </span>
      </Modal>
    </div>
  );
};

export default UserList;
