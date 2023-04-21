import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useReducer, useState, forwardRef, useImperativeHandle, useRef  } from "react";
import { auth, db } from "../config/firebase";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  limit,
  getDocs,
  arrayUnion,
  where,
  updateDoc,
  arrayRemove,
  increment,
} from "firebase/firestore";
import { Navbar } from "../layouts";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { LikeMethods } from "../lib";

import "../assets/styles/home/home.css";
import "../assets/styles/home/global.css";


const Home = () =>{
  const { currentUser } = useContext(AuthContext);
  const LikeMethodsRef = useRef(null);




  const [authUser, setAuthUser] = useState(null);
  //To store the fetched trending tools
  const [tools, setTools] = useState([]);
  const [toolsCopy, setToolsCopy] = useState([]);

  const [updated,setUpdated] = useState(0)

  //To store the searched value
  const [Search, setSearch] = useState("");

  //to keep track either if the user is searching or not
  const [isSearching, setIsSearching] = useState(false);
  const [isFiltering, setIsFiltering] = useState(false);

  //To store the results of the research
  const [SearchedTool, setSearchedTool] = useState([]);

  //storing the pricing choice
  const [Pricing, setPricing] = useState("");

  //to force Re-render
  const [reducerValue,forceRender] = useReducer(x => x+1,0);

  const [userData, setUserData] = useState({
    pfp: "",
    username: "",
  });

  const navigate = useNavigate();

  //Pop up Welcome Notification
  const notify = (message) =>
    toast(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  useEffect(() => {
    const listen = onAuthStateChanged(auth, async (user) => {
      //checking if the user exist or not
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

        // notify(userData.username);
        localStorage.setItem("SignedUp", true);

        // console.log(user);
      } else {
        // navigate("/signin");
        setAuthUser(null);
      }

      //showing the Welcome Message, if it's the user's first sign up
      if (localStorage.getItem("SignedUp")) {
        <div></div>;
      } else {
        notify("Welcome to the community! 👋🏻");
      }
      const ToolsArray = [];
      //In case we will have more conditions in the future
      const q = query(
        collection(db, "Tools"),
        // where("Likes", ">=", 50),
        limit(3)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        ToolsArray.push(doc.data());
      });
      setTools(ToolsArray);
    });
    return listen();
  }, [reducerValue]);

  //Searching for tools by name (fulltext search)

  const SearchTool = async () => {
    const SearchedTools = [];
    const q = query(collection(db, "Tools"), where("Name", "==", Search));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      SearchedTools.push(doc.data());
    });
    setSearchedTool(SearchedTools);
    console.log(SearchedTool);
  };

  //keeping track on what's the user is searching for
  useEffect(() => {
    if (Search.length > 0) {
      setIsSearching(true);
      SearchTool();
    } else {
      setIsSearching(false);
      setSearchedTool([]);
    }
  }, [Search]);

  useEffect(() => {
    handleFilter();
  }, [Pricing]);

  // handling  by price
  const handleFilter = async () => {
    const SearchedTools = [];
    const q = query(collection(db, "Tools"), where("Price", "==", Pricing));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      SearchedTools.push(doc.data());
    });

    setSearchedTool(SearchedTools);
    console.log(SearchedTool);
  };

  const handleUnLikes = (toolID)=>{
    LikeMethodsRef.current.Unlike(toolID)
    forceRender();
  }
  const handleLikes = (toolID)=>{
    LikeMethodsRef.current.Like(toolID)
    forceRender();
  }




  return (
    <div id="__next">
      <div
        className="mt-desktop-10 mt-mobile-8 mt-tablet-8 mt-widescreen-10 layoutContainer"
      >
        <main className="layoutMain">
          <div className="flex direction-column bg-[##1D1D1F] ">
            <div
              className="styles_container__0sZXQ flex direction-column mb-12 p-5"
            >
              <button
                type="button"
                className="styles_reset__opz7w styles_icon__10p3X"
              >
                <svg width="12" height="12" viewBox="0 0 12 12">
                  <path
                    d="M6 4.586l4.24-4.24a1 1 0 1 1 1.416 1.413L7.413 6l4.24 4.24a1 1 0 1 1-1.413 1.416L6 7.413l-4.24 4.24A1 1 0 1 1 .344 10.24L4.587 6 .347 1.76A1 1 0 1 1 1.757.343L6 4.587z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <div
                className="color-white bg-[##1D1D1F] fs-24 fw-600"
              >
                Welcome to Tech Bible! 👋
              </div>
              <div className="flex direction-row">
                <div
                  className="color-[#F1F1F1] fs-16 fw-400"
                >
                  The place to launch and discover new tech Tools.
                </div>
                <button
                  type="button"
                  className="styles_textButton__q4xv1 styles_left__i0IgN styles_cta__HXZkL"
                >
                  <div
                    className="ml-1 color-blue fs-16 fw-400"
                  >
                    Take a tour.
                  </div>
                </button>
              </div>
            </div>
            <div>
              <div
                className="flex direction-row justify-space-between align-center"
              >
                <h1
                  className="color-darker-grey fs-24 fw-600"
                  data-test="homepage-tagline"
                >
                  Your next favorite Tools 👇
                </h1>
                <div className="styles_container__5MXSs styles_feeds__6Wr4b">
                  <span
                    className="styles_dropdown__BQ713"
                    data-test="feed-navigation"
                  ></span>
                </div>
              </div>
              <div data-test="homepage-section-0">
                <div>
                  <div>
                    <div
                      className="px-mobile-1 px-tablet-1 pt-mobile-0 pt-desktop-6 pt-tablet-6 pt-widescreen-6 pb-mobile-7 pb-desktop-6 pb-tablet-6 pb-widescreen-6"
                    >
                      <div
                        className="styles_item__Sn_12 flex direction-row flex-row-gap-4 flex-row-gap-mobile-2 flex-row-gap-widescreen-undefined flex-1"
                        data-test="post-item-390145"
                      >
                        <a href="/posts/mage-4" aria-label="Mage">
                          <div
                            className="styles_thumbnail__Rmwk5 styles_thumbnail__E2_pB"
                            data-test="post-thumbnail"
                          >
                            <img
                              loading="lazy"
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/2101px-Adobe_XD_CC_icon.svg.png"
                              style={{width: "80px",height: "80px"}}
                              alt="Adobe XD"
                              className="styles_mediaThumbnail__LDCQN"
                            />
                          </div>
                        </a>
                        <div className="flex direction-column flex-1">
                          <div
                            className="color-darker-grey fs-mobile-12 fs-desktop-16 fs-tablet-16 fs-widescreen-16 fw-600 noOfLines-2 styles_format__w0VVk"
                          >
                            <a>Adobe XD</a
                            ><a
                              href="/r/p/390145"
                              rel="noopener"
                              target="_blank"
                              className="styles_externalLinkIcon__822Ku"
                              ><svg width="13" height="14" viewBox="0 0 13 14">
                                <g
                                  stroke="#4B587C"
                                  stroke-width="1.5"
                                  fill="none"
                                  fill-rule="evenodd"
                                >
                                  <path
                                    d="M9.6 4H4.2a2.4 2.4 0 0 0-2.4 2.4V10"
                                  ></path>
                                  <path d="M6.6 7l3-3-3-3M12 10v3H0"></path>
                                </g></svg
                            ></a>
                          </div>
                          <div
                            className="color-[#F1F1F1] fs-mobile-12 fs-desktop-16 fs-tablet-16 fs-widescreen-16 fw-400 noOfLines-2"
                          >
                              Browse 1000+ of the latest tech tools per task
                              Updated daily
                          </div>
                          <div
                            className="flex direction-row flex-row-gap-6 mt-3 align-center"
                          >
                            <div className="flex direction-row flex-row-gap-3">
                              <div
                                className="color-[#F1F1F1] fs-12 fw-400"
                              >
                                Free
                              </div>
                              <a
                                className="styles_postTopicLink__wDe_p"
                                href="/topics/art"
                              >
                                <div
                                  className="color-[#F1F1F1] fs-12 fw-400"
                                >
                                  Design tool
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-test="ad-slot-3">
                    <div
                      className="px-mobile-1 px-tablet-1 pt-mobile-0 pt-desktop-6 pt-tablet-6 pt-widescreen-6 pb-mobile-7 pb-desktop-6 pb-tablet-6 pb-widescreen-6"
                    >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <aside className="sidebarWithSeparator right">
         <Link to="/News"><h1>News</h1></Link>
          <div
            className="max-w-md mx-auto mb-5 bg-[#E2E2E0] rounded-xl shadow-md overflow-hidden md:max-w-2xl"
          >
            <div className="md:flex">
              
              <div className="p-8 md:pt-4">
                <div
                  className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-2"
                >
                  Breaking News
                </div>
                <a
                  href="www"
                  className="block text-xl font-bold leading-tight text-gray-900 hover:underline"
                  >Title of the News Article</a
                >
                <p className="mt-2 text-gray-500 text-sm">
                  By John Doe | April 20, 2023
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Home;
