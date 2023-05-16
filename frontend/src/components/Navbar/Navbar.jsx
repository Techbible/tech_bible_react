import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth, db } from "../../config/firebase";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { doc, onSnapshot } from "firebase/firestore";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {
  const [authUser, setAuthUser] = useState(null);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
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
  const { currentUser, currentUserData, isAdmin } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleIsMenuClicked = () => {
    setIsMenuClicked(!isMenuClicked);
  };

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
    <header aria-label="Site Header" className="navbar-header">
      {/* <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8"> */}
      <div className="lg:px-[94px] px-[20px]">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12 lg:ml-[30px]">
            <Link to="/">
              <img
                width={"51px"}
                height={"52px"}
                src={`${process.env.PUBLIC_URL}/logo.svg`}
                alt=""
              />
            </Link>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Site Nav">
              <ul className="flex items-center gap-6 text-sm mr-6">
                <div className="flex flex-row lg:gap-[64px] gap-6">
                  {isAdmin ? (
                    <Link to="/tools">
                      <li
                        className="tracking-wider hover:tracking-widest"
                        style={{ transition: "0.3s", cursor: "pointer" }}
                      >
                        All Tools
                      </li>
                    </Link>
                  ) : (
                    <div></div>
                  )}
                </div>

                <li
                  className="tracking-wider hover:tracking-widest"
                  style={{ transition: "0.3s", cursor: "pointer" }}
                >
                  <span className="text-white rounded-full p-1">
                    <a
                      href="https://www.tiktok.com/@tech.bible"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-tiktok text-white text-xl"></i>
                    </a>
                  </span>
                </li>
                <li
                  className="tracking-wider hover:tracking-widest"
                  style={{ transition: "0.3s", cursor: "pointer" }}
                >
                  <span className="text-white rounded-full p-1">
                    <a
                      href="https://youtube.com/@MyTechBible"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-youtube text-white text-xl"></i>
                    </a>
                  </span>
                </li>
                <li
                  className="tracking-wider hover:tracking-widest"
                  style={{ transition: "0.3s", cursor: "pointer" }}
                >
                  <span className="text-white rounded-full p-1">
                    <a
                      href="https://www.instagram.com/my.techbible"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-instagram text-white text-xl"></i>
                    </a>
                  </span>
                </li>
              </ul>
            </nav>
          </div>
          {!authUser ? (
            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4 lg:mr-[30px]">
                <Link to="/signin">
                  <div className="signin-btn">Log in</div>
                </Link>

                <div className="hidden sm:flex">
                  <Link to="/signup">
                    <button className="signup-btn">Sign up</button>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div
              className="user-info-container"
              style={{ display: screenWidth < 768 ? "none" : "flex" }}
            >
              <Link to="/profile">
                <div className="user-info ">
                  <img src={currentUserData?.photo} className="pfp" alt="pfp" />
                  <div className="username  ">{currentUserData?.username}</div>
                </div>
              </Link>
              <span
                className="signout cursor-pointer border-[1px] text-white px-2 py-1 rounded-md fontWeight-500 "
                onClick={UserSignOut}
              >
                Sign out
              </span>
            </div>
          )}

          <div className="block md:hidden">
            <button
              onClick={handleIsMenuClicked}
              className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            {/* ********** */}
            {/* isMenuClicked */}

            <div
              style={
                !isMenuClicked
                  ? {
                      display: "hidden",
                      pointerEvents: "none",
                      transition:
                        "transform ease-out .3ms, opacity ease-out .3s",
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
                  <div className="border-[1px] text-white "></div>
                  <Link to="/signin">
                    <div className="text-[15px] px-4 py-2 bg-black transition duration-300 hover:bg-white hover:text-black">
                      Log in
                    </div>
                  </Link>
                  <div className="border-[1px] text-white "></div>
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
                          <img
                            src={currentUserData.photo}
                            className="pfp"
                            alt="pfp"
                          />
                          <div className="username ">
                            {currentUserData.username}
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="border-[1px] text-white "></div>
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
                  <div className="border-[1px] text-white "></div>
                </div>
              )}
              {/* <div className="py-1 bg-black" role="none">
                <Link to="/addTool">
                  <div className="text-[15px] px-4 py-2 transition duration-300 hover:bg-white hover:text-black">
                    Submit your tool
                  </div>
                </Link>
                <div className="border-[1px] text-white "></div>
                <Link to="/">
                  <div className="text-[15px] px-4 py-2 transition duration-300 hover:bg-white hover:text-black">
                    Resources
                  </div>
                </Link>
                <div className="border-[1px] text-white "></div>
                 <Link to="/community"> 
                  <div  className="text-[15px] px-4 py-2 transition duration-300 hover:bg-white hover:text-black">
                    Community
                  </div>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
