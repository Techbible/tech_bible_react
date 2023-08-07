import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth, db } from "../../config/firebase";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { doc, onSnapshot } from "firebase/firestore";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import ProfilePhoto from "../ProfilePhoto";
//import Blogs from "../../views/Blogs";
//import Chat from "../../views/Chat"
import "../../assets/styles/navbar.css";

function Navbar() {
  const [authUser, setAuthUser] = useState(null);
  const { currentUser, currentUserData, isAdmin } = useContext(AuthContext);
  const [isSelected, setIsSelected] = useState(false);
  const [topic, setTopic] = useState("");
  const [isTopicChosen, setIsTopicChosen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('');
 
  const handleButtonClick = () => {
    setIsSelected(!isSelected);
  };
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    console.log("Navbar User Data" + typeof JSON.stringify(currentUserData));
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    // Attach the event listener on component mount
    window.addEventListener("resize", handleResize);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const navigate = useNavigate();

  const handleIsMenuClicked = () => {
    setIsMenuClicked(!isMenuClicked);
  };
  const chooseTopic = (topic) => {
    setTopic(topic);
    setIsTopicChosen(true);
  };
  useEffect(() => {
    console.log("navbar : " + typeof currentUserData);
  }, []);
  useEffect(() => {
    setIsMenuClicked(false);

    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return listen();
  }, [currentUser]);
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
    <header aria-label="Site Header" className="navbar-header py-6 border-none bg-black bg-opacity-50">
  <div className="lg:px-[94px] px-[20px]">
    <div className="flex h-16 items-center justify-between">
      <div className="frame frame-1 flex-basis: 30%">
      {!authUser ? (
        <div>
        <Link to="/News">
          <button
            className={`sig cursor-pointer bg-[#ef4822] text-white font-semibold px-2 py-1 rounded-full fontWeight-500 transition duration-200 hover:bg-[#fa795c] hover:text-[#ef4822]${
              isSelected
                ? "bg-[#edb3a6] text-[#ef4822] "
                : "bg-[#ef4822] text-white"
            }`}
            onClick={() => {
              setIsTopicChosen(false);
              setTopic("");
              setSelectedTopic("");
            }}
          >
            Tech News
          </button>
        </Link>
      </div>
      ):(
        <div className="container">
  <div className="pane">
    <label className="label">
      <Link to="/News">
        <button >News</button>
      </Link>
        <input id="left" className="input" name="radio" type="radio" />
    </label>
    <label className="label">
      <Link to="/Blogs">
        <button >Blog</button>
      </Link>
        <input id="middle" className="input" checked="checked" name="radio" type="radio" />
    </label>
    <label className="label">
      <Link to="/">
        <button >Home</button>
      </Link>
        <input id="right" className="input" name="radio" type="radio" />
    </label>
    <span className="selection"></span>
  </div>
</div>


      )
      }
      </div>

      <div className="frame frame-2" style={{ position: 'fixed', top: 33, left: '48%', transform: 'translateX(-50%)', zIndex: 999 }}>
      <Link to="/" className="flex items-center flex-basis: 40%">
    <img
      className="xl:w-[200px] lg:w-[160px] md:w-[180px] sm:w-[140px] w-[140px]"
      src={`${process.env.PUBLIC_URL}/TechBibleLogoV2.svg`}
      alt=""
    />
      </Link>
     </div>



      <div className="frame frame-3 flex-basis: 30%">
        <div className="hidden md:block">
          <nav aria-label="Site Nav">
            <ul className="flex items-center gap-6 text-sm mr-6">

              <div className="flex flex-row lg:gap-[64px] gap-6">
                {isAdmin && (
                  <Link to="/AdminSpace">
                    <div className="text-[15px] px-4 py-2 transition text-white duration-300 hover:text-gray-800">
                      Admin Space
                    </div>
                  </Link>
                )}
              </div>
            </ul>
          </nav>
        </div>
        {!authUser ? (
          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4 lg:mr-[30px]">
              <Link to="/signin">
              <button class="signin">
               <div class="log"><svg viewBox="0 0 512 512"><path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"></path></svg></div>
               <div class="text">Login</div>
              </button>
              </Link>

              <div className="hidden sm:flex">
              </div>
            </div>
          </div>
        ) : (
          <div className="user-info-container" style={{ display: screenWidth < 768 ? "none" : "flex" }}>
            <Link to="/profile">
              <div className="user-info">
                <img src={currentUserData?.photo} className="pfp" />
                <div className="username">{currentUserData?.username}</div>
              </div>
            </Link>
            <button class="signout" onClick={UserSignOut}>
            <div class="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
            <div class="text">Logout</div>
            </button>



          </div>
        )}

        <div className="block md:hidden">
          <button
            onClick={handleIsMenuClicked}
            className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 black:bg-gray-800 black:text-white black:hover:text-white/75"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div
            style={
              !isMenuClicked
                ? {
                    display: "none",
                    pointerEvents: "none",
                    transition: "transform ease-out .3ms, opacity ease-out .3s",
                    transform: "scale(1)",
                    opacity: 0,
                  }
                : {
                    display: "block",
                    transition: "transform ease-in .3s, opacity ease-in .3s",
                    transform: "scale(1)",
                    opacity: 1,
                  }
            }
            className="absolute right-0 mt-[20px] z-10 w-56 origin-top-right"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex="-1"
          >
            {!authUser ? (
              <div>
                <Link to="/signin">
                  <div className="fontWeight-500 px-4 py-2 bg-[#ef4822] text-white transition duration-300 hover:bg-[#fa795c] hover:text-[#ef4822]">
                    Log in
                  </div>
                </Link>
              </div>
            ) : (
              <div>
                <div className="text-[15px] px-4 py-2 bg-black transition duration-300 hover:bg-white hover:text-black">
                  <div className="user-info-container">
                    <Link to="/profile">
                      <div
                        className="user-info hover:text-black"
                        onClick={() => {
                          navigate("/profile");
                        }}
                      >
                        <img src={currentUserData?.photo} className="pfp" />
                        <div className="username text-white">
                          {currentUserData?.username}
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="text-[15px] px-4 py-2 bg-black transition duration-300 hover:bg-white hover:text-black">
                  <span
                    className="signout cursor-pointer flex"
                    onClick={UserSignOut}
                  >
                    Sign out
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/logout.png`}
                      alt="sign out"
                      className="ml-5"
                    />
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
</header>

  
  );
}

export default Navbar;