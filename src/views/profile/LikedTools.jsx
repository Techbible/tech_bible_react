import React, { useState, useEffect, useReducer, useContext } from "react";
import "../../assets/styles/profile/profile.css";
import "../../assets/styles/Modal/modal.css";
import Toolitem from "../../components/Tools/Toolitem";
import { collection, getDocs, query, where } from "firebase/firestore";
import { AuthContext } from "../../context/AuthContext";
import { db } from "../../config/firebase";

function LikedTools() {
  const { currentUser, isAdmin } = useContext(AuthContext);

  const [reducerValue, forceRender] = useReducer((x) => x + 1, 0);
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

  useEffect(()=>{LoadLikedTools()},[])

  return (
    <div className="liked-tools w-[500px] mt-[10rem] mx-auto">
    <h1 className="mb-10">All your liked tools</h1>
    <div className="lists-container">
      <div className="tools-list-container">
        {LikedTools ? (
          LikedTools?.map((LikedTool) => (
            <Toolitem toolData={LikedTool} forceRender={forceRender} />
          ))
        ) : (
          <div>you didn't like any tools yet</div>
        )}
      </div>
    </div>
    </div>
  );
}

export default LikedTools;
