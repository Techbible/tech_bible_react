import React, { useReducer, forwardRef, useImperativeHandle } from "react";
import { db } from "../config/firebase";
import "react-toastify/dist/ReactToastify.css";
import { doc, arrayUnion, updateDoc, arrayRemove } from "firebase/firestore";

import { useContext } from "react";
import "../assets/styles/home/home.css";
import { AuthContext } from "../context/AuthContext";
//mongo
import axios from "axios";
import { BASE_URL } from "../config/mongo";

const LikeMethods = forwardRef((props, ref) => {
  const { currentUser } = useContext(AuthContext);

  //handling the likes/follow logic
  // const handleLikes = async (ToolId) => {
  //   try {
  //     const ToolRef = doc(db, "Tools", ToolId);
  //     await updateDoc(ToolRef, {
  //       LikedBy: arrayUnion(currentUser?.uid),
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  //this is mongo
  const handleLikes = async (ToolId) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/like/${ToolId}/${currentUser?.uid}`
      );
      console.log(response.data.Name); // The message "tool has been liked successfully!!!!!"
      console.log("tool has been liked successfully!!!!!");
    } catch (error) {
      console.log(error);
    }
  };

  const handleUnLike = async (ToolId) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/unlike/${ToolId}/${currentUser?.uid}`
      );
      console.log(response.data); // The message "tool has been unliked successfully!!!!!"
      console.log("tool has been unliked successfully!!!!!");
    } catch (error) {
      console.log(error);
    }
  };

  //handling unfollow logic
  // const handleUnLike = async (ToolId) => {
  //   try {
  //     const ToolRef = doc(db, "Tools", ToolId);
  //     await updateDoc(ToolRef, {
  //       LikedBy: arrayRemove(currentUser?.uid),
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  /********************************Malking the methods exportable START***************************** */
  // create our ref object
  const publicRef = {
    // Referencing our methods
    Like: handleLikes,
    Unlike: handleUnLike,
  };

  // pass the ref and a function that returns our object
  useImperativeHandle(ref, () => publicRef);

  /********************************Malking the methods exportable END******************************* */
  return <div></div>;
});

export default LikeMethods;
