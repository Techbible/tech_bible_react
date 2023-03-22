import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { doc, onSnapshot } from "firebase/firestore";
function Navbar() {




    const [authUser, setAuthUser] = useState(null);

    const [userData, setUserData] = useState({
      pfp: "",
      username: "",
    });
  
    const navigate = useNavigate();

  
    useEffect(() => {
      const listen = onAuthStateChanged(auth, (user) => {
        if (user) {
          setAuthUser(user);
  
          const unsub = onSnapshot(doc(db, "Users", user.uid), (doc) => {
            // console.log(" data: ", doc.data());
            setUserData({
              pfp: doc.data().photo,
              username: doc.data().username,
            });
            // console.log(userData);
  
          });
          
  
          // console.log(user);
        } else {
          // navigate("/signin")
          setAuthUser(null);
        }
      });
      return listen();
    }, []);
  
  
    const UserSignOut = () => {
      signOut(auth)
        .then(() => {
          console.log("signed out on successfully");
          navigate("/signin");
        })
        .catch((error) => console.log(error));
    };
  

  return (
    <div className="nav-bar-viR">
    <div className="auto-group-hejw-bLh">
    <Link to="/">
    <div className="tech-bible-logo-XNm">
        <p className="tech-bible-fdP">
          Tech
          <br />
          Bible
        </p>
      </div>
      </Link> 
      <p className="all-tools-ik5">All tools</p>
      <p className="submit-your-tool-VeM">Submit your tool</p>
      <p className="resources-W3f">Resources</p>
      <p className="community-VgH">Community</p>
      
      <a href="https://www.tiktok.com/discover/TechBible?lang=en" title="tiktok"><img
        alt="tech bible"
        className="tiktok-X7B"
        src="/assets/tiktok.png"
      /></a>
      <div className="auto-group-aeah-kEq">
      <a href="https://www.youtube.com/channel/UCkyxFbFun3bjehZAdkVQgZw" title="Youtube">
      <img
          alt="tech bible"
          className="youtube-button-MVX"
          src="/assets/youtube-button.png"
        />
        </a>
       <a href="https://www.instagram.com/my.techbible/" title="instagram">
       <img
          alt="tech bible"
          className="instagram-button-vww"
          src="/assets/instagram-button.png"
        /></a> 

        <div>
          {authUser ? (
            
            <div className="user-info-container">
            <Link to="/profile"><div className="user-info">
              <div
                className="user"
                style={{ backgroundImage: `url(${userData.pfp})` }}
              ></div>
              <div className="username">{userData.username}</div>
            </div></Link>
            <span class="signout" onClick={UserSignOut}><img src="/assets/logout.png" alt="sign out" /></span>
            </div>
          ) : (
            <div className="flex">
              <Link to="/signin">
                <div className="sign-in-button-v4m no-dec">Sign in</div>
              </Link>
              <Link to="/signup">
                <div className="sign-up-button-rm3 no-dec">Sign up</div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
  )
}

export default Navbar
