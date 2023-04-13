import React, { useEffect, useReducer, useState, forwardRef, useImperativeHandle  } from "react";
import { auth, db } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import {
  collection,
  doc,
  arrayUnion,
  updateDoc,
  arrayRemove,
} from "firebase/firestore";


import { useContext } from "react";
import "../assets/styles/landingpage.css";
import { AuthContext } from "../context/AuthContext";

const LikeMethods = forwardRef((props, ref) => {
    const { currentUser } = useContext(AuthContext);
    
    const [reducerValue,forceRender] = useReducer(x => x+1,0);

  //handling the likes/follow logic
  const handleLikes = async (ToolId) => {
    try {
      const ToolRef = doc(db, "Tools", ToolId);
      await updateDoc(ToolRef, {
        LikedBy: arrayUnion(currentUser.uid),
      });
       forceRender();
    } catch (error) {
      console.log(error);
    }
  };
  
  //handling unfollow logic
  const handleUnLike = async (ToolId) => {
    try {
      const ToolRef = doc(db, "Tools", ToolId);
      await updateDoc(ToolRef, {
        LikedBy: arrayRemove(currentUser.uid),
      });

       forceRender();
    } catch (error) {
      console.log(error);
    }

  };
  /********************************Malking the methods exportable START***************************** */
    // create our ref object
    const publicRef = {
        // Referencing our methods
        Like : handleLikes,
        Unlike : handleUnLike
      };
  
    // pass the ref and a function that returns our object
    useImperativeHandle(ref, () => publicRef);
  
/********************************Malking the methods exportable END******************************* */
  return (
    <div></div>
  )
});


export default LikeMethods
