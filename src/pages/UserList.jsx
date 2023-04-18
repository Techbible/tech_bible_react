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
import "../assets/styles/profile.css";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { db } from "../firebase";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../assets/styles/profile.css";
import Modal from "react-modal";

const UserList = () => {
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
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());

        // setLikedTools([...LikedTools, doc.data()]);
        // setLikedTools(LikedTools.concat(doc.data()));

        LikedOnes.push(doc.data());
        setLikedTools(LikedOnes);
        // console.log(LikedOnes);
      });
    } catch (error) {
      console.log(error);
    }
    // console.log("xxx", LikedTools);
  };

  const createFolder = async () => {
    // alert("lvl 0");
    try {
      // console.log("lvl 1");

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

  return (
    <div className="home-page-SPw">
      <Navbar />
      <div className="create-folder" onClick={openModal}>
        + create a new folder
      </div>
      <div className="lists-container">
        <div className="tools-list-container">
          {LikedTools ? (
            LikedTools.map((LikedTool, index) => (
              <div className="tool-container" key={index}>
                <img className="tool-logo" src={LikedTool.Icon} alt="" />
                <div className="tool-data">
                  <Link to={`/ToolDetails/${LikedTool.id}`}>
                    {" "}
                    <div className="tool-title">{LikedTool.Name}</div>
                  </Link>
                  <div className="tool-description">
                    {LikedTool.Description}
                  </div>
                  <div className="tool-comments">
                    <img
                      alt="tech bible"
                      className="layer1-xx5"
                      src="/assets/layer1-xPw.png"
                    />
                    {LikedTool.Comments}
                  </div>
                </div>
                <div className="tool-icons">
                  <img
                    alt="tech bible"
                    className="like-eGV"
                    src="/assets/liked.png"
                  />
                  <div className="save-3ZX">
                    <img
                      alt="tech bible"
                      className="ellipse-4-v7X"
                      src="/assets/ellipse-4-ray.png"
                    />
                    <img
                      alt="tech bible"
                      className="item-32360-1-iJH"
                      src="/assets/-aLV.png"
                    />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>you didn't like any tools yet</div>
          )}
        </div>
      </div>

      <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
            Create a <span className="under-line">New folder</span>{" "}
          </h2>
          <span id="close-button" onClick={closeModal}>
            X
          </span>
          <div className="flex inner-modal mt-5">
            <div className="flex m-5">
              {" "}
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
            className="profile-btn-outlined-3 mt-5"
            onClick={createFolder}
          >
            + create
          </span>
        </Modal>
      </div>
    </div>
  );
};

export default UserList;
