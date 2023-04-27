import React from "react";
import { Navbar } from "../layouts";
import {
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
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { db } from "../config/firebase";
import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "react-modal";
import Toolitem from "../components/Tools/Toolitem"
import { useReducer } from "react";
import { ModalcustomStyles } from "./Profile";

import "../assets/styles/profile/profile.css";
import "../assets/styles/Modal/modal.css";




const UserList = () => {
  //to force re-render
  const [reducerValue, forceRender] = useReducer((x) => x + 1, 0);

  const { currentUser } = useContext(AuthContext);
  const [categories, setCategories] = useState([]);
  const [Category, setCategory] = useState("");
  const [Name, setName] = useState("");

  const [LikedTools, setLikedTools] = useState([]);

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

  const createFolder = async () => {
    try {

      await setDoc(doc(db, "Users", currentUser?.uid), 
      {
        folders : [
          {
            name : Name,
            category : Category,
            tools : []
          }
        ]
      }
      )
      .then(function() {
        console.log("lvl 3");
        closeModal();
        console.log("Folder updated!");
      }); 
    } catch (error) {
      console.log(error); 
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

  //_______________________________Modal Configs_____________________________________________

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

  return (
    <div className="wrapper">
      <div className="create-folder" onClick={openModal}>
        + create a new folder
      </div>
      <div className="lists-container">
        <div className="tools-list-container">
          {LikedTools ? (
            LikedTools.map((LikedTool) => (
              <Toolitem toolData={LikedTool} forceRender={forceRender} />
            ))
          ) : (
            <div>you didn't like any tools yet</div>
          )}
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
              {" "}
              <h4>Folder Category : </h4>
              <select
                className="folder-input"
                name="categories"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>Select a Category</option>
                {categories?.map((c,index) => (
                  <option value={c.id} ket={index}>{c.Category}</option>
                ))}
              </select>
            </div>
          </div>
          <span
            className="save-btn"
            onClick={createFolder}
          >
            + create
          </span>
        </Modal>
    </div>
  );
};

export default UserList;
