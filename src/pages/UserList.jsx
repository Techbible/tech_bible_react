import React from 'react'
import { Navbar } from '../layouts'
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
import "../assets/styles/profile.css";
import { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { db } from '../firebase';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const UserList = () => {
  const { currentUser } = useContext(AuthContext);


  const [LikedTools, setLikedTools] = useState([]);



//loading the liked tools by the currentUser
  const LoadLikedTools = async () => {
    const ToolsRef = collection(db, "Tools");
    const LikedOnes = [];
    const q = query(
      ToolsRef,
      where("LikedBy", "array-contains", currentUser?.uid),
    );
    try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          LikedOnes.push(doc.data());
          console.log(LikedOnes);
        });
      }
       catch (error) {
        console.log(error);
      }
      setLikedTools(LikedOnes);
      console.log(LikedTools);

  }
    useEffect(()=>{
       LoadLikedTools()
    },[]);

    
  return (
    <div className='home-page-SPw'>
      <Navbar />
      <div className='list-container'>
      <div className="liked-tools-container">
      {LikedTools ? (
        LikedTools.map((LikedTool,index) => (
          <div className="tool-container" key={index}>
            <img className="tool-logo" src={LikedTool.Icon} alt="" />
            <div className="tool-data">
            <Link to={`/ToolDetails/${LikedTool.id}`}> <div className="tool-title">{LikedTool.Name}</div></Link>
              <div className="tool-description">{LikedTool.Description}</div>
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
    </div>
  )
}


export default UserList
