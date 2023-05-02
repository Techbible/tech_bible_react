import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { db } from "../../../config/firebase";
import YouMightLikeItem from "./YouMightLikeItem";

const YouMightLikeApp = () => {
  const { currentUser, currentUserData, isAdmin } = useContext(AuthContext);
  // const [userData, setUserData] = useContext()
  const [Tools, setTools] = useState();

  // useEffect(()=>(console.log("current user",currentUser)),[currentUser])

  const LoadingMightLike = async () => {
    const ToolsRef = collection(db, "Tools");
    const tools = [];
    const q = query(
      ToolsRef,
      where("category", "in", currentUserData?.interests),
      limit(3)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        tools.push(doc.data());
        setTools(tools);
        // console.log("YOU MIGHT LIKE", Tools);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let isMounted = true;
      if (isMounted) {
        LoadingMightLike();
        console.log('YOU MIGHT LIKE')
      }

    return () => {
      isMounted = false;

    }; 
  }, []);

  return (
    <div>
      <div className="flex flex-col sm:flex-row" style={{ display: "flex" }}>
        <YouMightLikeItem title="" description="" icon="" />
      </div>
    </div>
  );
};

export default YouMightLikeApp;
