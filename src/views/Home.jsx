import { onAuthStateChanged, signOut } from "firebase/auth";
import React, {
  useEffect,
  useReducer,
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
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

import Search_format from "../components/Search-container/Search_format";
import NewsHomePage from "../components/News Scraper/NewsHomePage";
import Toolitem from "../components/Tools/Toolitem";
import YouMustLikeApp from "../components/Filtering-container/YouMightLikeApp";
import YouMightLikeApp from "../components/Filtering-container/YouMightLikeApp";
import AppOfTheDay from "../components/Filtering-container/AppOfTheDay";

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  const LikeMethodsRef = useRef(null);

  const [authUser, setAuthUser] = useState(null);
  //To store the fetched trending tools
  const [tools, setTools] = useState([]);
  const [toolsCopy, setToolsCopy] = useState([]);

  const [updated, setUpdated] = useState(0);

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
  const [reducerValue, forceRender] = useReducer((x) => x + 1, 0);

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

  const handleUnLikes = (toolID) => {
    LikeMethodsRef.current.Unlike(toolID);
    forceRender();
  };
  const handleLikes = (toolID) => {
    LikeMethodsRef.current.Like(toolID);
    forceRender();
  };

  return (
    <div id="__next">
      <div className="mt-desktop-10 mt-mobile-8 mt-tablet-8 mt-widescreen-10 layoutContainer">
        <main className="layoutMain">
          <div class="flex direction-column">
            <div class="flex flex-col mb-12 p-5 styles_container__0sZXQ">
              <div class="flex justify-end">
                <button
                  type="button"
                  class="styles_reset__opz7w styles_icon__10p3X"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12">
                    <path
                      d="M6 4.586l4.24-4.24a1 1 0 1 1 1.416 1.413L7.413 6l4.24 4.24a1 1 0 1 1-1.413 1.416L6 7.413l-4.24 4.24A1 1 0 1 1 .344 10.24L4.587 6 .347 1.76A1 1 0 1 1 1.757.343L6 4.587z"
                      fill="#ffffff"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="color-white fontSize-24 fontWeight-600 noOfLines-undefined">
                Welcome to Tech Bible! 😎
              </div>
              <div class="flex direction-row">
                <div class="color-white fontSize-16 fontWeight-400 noOfLines-undefined">
                  The place to discover new tech Tools.
                </div>
                <button
                  type="button"
                  class="styles_textButton__q4xv1 styles_left__i0IgN styles_cta__HXZkL"
                >
                  <div class="ml-1 text-[#7869E6] fontSize-16 fontWeight-400 noOfLines-undefined">
                    Take a tour.
                  </div>
                </button>
              </div>
            </div>

            <div>
              <div>
                {/* Search bar */}
                <Search_format />
                {/* End Search bar */}

                {/* Filtering container */}
                <div className="filtering-container">
                  <AppOfTheDay />
                  {/************You might also like***********/}
                  <div className="you-must-like-apps-container">
                    <p className="fontWeight-500 text-[#15C988] mb-4">
                      YOU MIGHT ALSO LIKE
                    </p>
                    <div
                      className="flex flex-col sm:flex-row"
                      style={{ display: "flex" }}
                    >
                      <YouMightLikeApp />
                      <YouMightLikeApp />
                      <YouMightLikeApp />
                    </div>
                  </div>
                  {/***********END You might also like********/}
                </div>
                {/* End Filtering container */}
              </div>

              <div data-test="homepage-section-0">
                <div>
                  <div>
                    <Toolitem />
                    <Toolitem />
                    <Toolitem />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <aside className="sidebarWithSeparator right">
          <Link to="/News">
            <h1>News</h1>
          </Link>
          <NewsHomePage />
          <NewsHomePage />
          <NewsHomePage />
        </aside>
      </div>
    </div>
  );
};

export default Home;
