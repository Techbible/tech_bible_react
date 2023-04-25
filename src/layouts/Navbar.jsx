import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth, db } from "../config/firebase";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { doc, onSnapshot } from "firebase/firestore";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const [authUser, setAuthUser] = useState(null);

  const [userData, setUserData] = useState({
    pfp: "",
    username: "",
  });

  const { currentUser, isAdmin } = useContext(AuthContext);


  const navigate = useNavigate();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);

        const unsub = onSnapshot(doc(db, "Users", user.uid), (doc) => {
          setUserData({
            pfp: doc.data().photo,
            username: doc.data().username,
          });
        });

      } else {
        setAuthUser(null);
      }
    });
    return listen();
  }, []);

  //Sign out
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
        {isAdmin ? (
          <Link to="/tools">
            <p className="all-tools-ik5">All tools</p>
          </Link>
        ) : (
          <div></div>
        )}
        <Link to="/addTool">
          <p className="submit-your-tool-VeM">Submit your tool</p>
        </Link>
        <p className="resources-W3f">Resources</p>
        <p className="community-VgH">Community</p>

        <a
          href="https://www.tiktok.com/discover/TechBible?lang=en"
          title="tiktok"
          target="_blank"
          rel="noreferrer"
        >
          <img
            alt="tech bible"
            className="tiktok-X7B"
            src={`${process.env.PUBLIC_URL}/assets/tiktok.png`}
          />
        </a>
        <div className="auto-group-aeah-kEq">
          <a
            href="https://www.youtube.com/channel/UCkyxFbFun3bjehZAdkVQgZw"
            title="Youtube"
            target="_blank"
            rel="noreferrer"
          >
            <img
              alt="tech bible"
              className="youtube-button-MVX"
              src={`${process.env.PUBLIC_URL}/assets/youtube-button.png`}
            />
          </a>
          <a
            href="https://www.instagram.com/my.techbible/"
            title="instagram"
            target="_blank"
            rel="noreferrer"
          >
            <img
              alt="tech bible"
              className="instagram-button-vww"
              src={`${process.env.PUBLIC_URL}/assets/instagram-button.png`}
            />
          </a>

          <div>
            {authUser ? (
              <div className="user-info-container">
                <Link to="/profile">
                  <div className="user-info">
                    <div
                      className="user"
                      style={{ backgroundImage: `url(${userData.pfp})` }}
                    ></div>
                    <div className="username">{userData.username}</div>
                  </div>
                </Link>
                <span className="signout" onClick={UserSignOut}>
                  <img src={`${process.env.PUBLIC_URL}/assets/logout.png`} alt="sign out" />
                </span>
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
  );
}

export default Navbar;
