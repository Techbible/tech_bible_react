import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useReducer, useState, useRef } from "react";
import { auth, db } from "../config/firebase";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { collection, query, limit, getDocs, where } from "firebase/firestore";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from 'axios';


import "../assets/styles/home/home.css";
import "../assets/styles/home/global.css";

import NewsHomePage from "../components/News Scraper/NewsHomePage";
import Toolitem from "../components/Tools/Toolitem";
import YouMightLikeApp from "../components/home components/Filtering-container/YouMightLikeApp";
import AppOfTheDay from "../components/home components/Filtering-container/AppOfTheDay";

import "../assets/styles/search-container/search-container.css";
import { NewsContext, NewsContextProvider } from "../context/NewsContext";
import { useRecoilState, useRecoilValue } from "recoil";
import { allToolsAtom, toolState } from "../recoil/tool";

const toolsdata = require("../config/data.json");

const Home = () => {
  const { currentUser } = useContext(AuthContext);

  const allTools = useRecoilValue(allToolsAtom);


  const { data } = useContext(NewsContext);
  // const { toolsdata } = useContext(ToolsContext)

  const [authUser, setAuthUser] = useState(null);
  //To store the fetched trending tools
  const [AllTools, setAllTools] = useState([]);

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

  // handling  by price
  const handleFilter = async () => {
    const SearchedTools = [];
    const q = query(collection(db, "Tools"), where("Price", "==", Pricing));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      SearchedTools.push(doc.data());
    });
    setSearchedTool(SearchedTools);
  };

  useEffect(() => {
    handleFilter();
  }, [Pricing]);

  //search bar suggestions
  const [isFocused, setIsFocused] = useState(false);

  //input value
  const [value, setValue] = useState("");
  const onChange = (event) => {
    setValue(event.target.value);
  };
 

  return (
    <div className="home-container mt-desktop-30 mt-mobile-12 mt-tablet-8 mt-widescreen-20 layoutContainer">
      <main className="layoutMain " onMouseLeave={() => setIsFocused(false)}>
        <div className="flex direction-column ">
          <div className="max-w-[750px] mx-auto flex flex-column py-2 my-4 md:mb-[2rem] lg:w-[900px] p-[30px] rounded-xl bg-gradient-to-r from-[#18151D] to-[#27242E]">
            <h2 className="text-white fontWeight-500 text-[18px] mt-2">
              The Largest Saas Tools directory
            </h2>
            <form className="flex items-center mt-5">
              <div className="relative w-full">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 pointer text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="voice-search"
                  className="bg-white h-[36px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search your tool..."
                  value={value}
                  onChange={(e) => {
                    onChange(e);
                    setIsFocused(true);
                  }}
                  required
                />
              </div>
              <div className="ml-2">
                <svg
                  className="filter-icon"
                  onClick={() => setIsFiltering(!isFiltering)}
                  width="30"
                  height="28"
                  viewBox="0 0 30 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_3_252)">
                    <path
                      d="M2.79855 20.9446V20.4649C2.79855 14.2308 2.79855 7.9941 2.79855 1.76005C2.79855 1.55181 2.80337 1.33302 2.85163 1.13532C2.97468 0.637127 3.40173 0.286544 3.87945 0.278636C4.34269 0.270728 4.80594 0.270728 5.26677 0.278636C5.93751 0.286544 6.40317 0.800557 6.40558 1.54126C6.41041 3.51033 6.40558 5.47939 6.40558 7.44846C6.40558 11.8083 6.40558 16.1682 6.40558 20.5281V20.9446C6.85676 20.9446 7.28623 20.9551 7.71569 20.942C8.039 20.9314 8.34059 20.9578 8.50466 21.3215C8.6832 21.7169 8.68561 22.115 8.46605 22.4919C8.33818 22.7133 8.18859 22.9216 8.04865 23.1351C7.07873 24.6165 6.10881 26.0953 5.1389 27.5767C4.78422 28.1171 4.41749 28.1197 4.06282 27.5767C2.97226 25.9187 1.88895 24.2554 0.798394 22.5974C0.581248 22.2679 0.506453 21.9173 0.619852 21.5271C0.738075 21.1107 0.940745 20.9472 1.33885 20.9472C1.80933 20.9472 2.28222 20.9472 2.79855 20.9472V20.9446Z"
                      fill="white"
                    />
                    <path
                      d="M19.9651 0.275992C22.6746 0.275992 25.3841 0.29708 28.0912 0.262812C28.979 0.252268 29.5774 0.956071 29.4954 1.80749C29.4785 1.97355 29.4954 2.14489 29.4954 2.31359C29.4954 3.18873 28.979 3.75283 28.1732 3.75283C24.1343 3.75283 20.0954 3.75283 16.0564 3.75283C14.6305 3.75283 13.2022 3.75283 11.7763 3.75283C10.9366 3.75283 10.43 3.19664 10.4251 2.27669C10.4251 2.0869 10.4203 1.89711 10.4251 1.70732C10.4348 0.826909 10.9487 0.278628 11.7545 0.278628C14.493 0.278628 17.229 0.278628 19.9675 0.278628L19.9651 0.275992Z"
                      fill="white"
                    />
                    <path
                      d="M18.4595 8.35236C20.6551 8.35236 22.8531 8.37609 25.0487 8.34182C25.98 8.326 26.5253 9.01926 26.4698 9.90231C26.4626 10.0183 26.4698 10.1343 26.4698 10.2503C26.4698 11.302 25.9921 11.8266 25.0366 11.8292C23.7844 11.8292 22.5322 11.8292 21.28 11.8292C18.1 11.8292 14.9225 11.8292 11.7425 11.8266C10.9704 11.8266 10.4517 11.2836 10.4251 10.4427C10.4179 10.2107 10.4179 9.97875 10.4251 9.74679C10.4493 8.89537 10.9463 8.36027 11.728 8.35763C13.3856 8.35236 15.0431 8.35763 16.6982 8.35763C17.2869 8.35763 17.8732 8.35763 18.4619 8.35763L18.4595 8.35236Z"
                      fill="white"
                    />
                    <path
                      d="M16.6789 19.89C15.06 19.89 13.441 19.8663 11.8221 19.9005C10.9559 19.919 10.3745 19.2811 10.4203 18.3506C10.4275 18.203 10.4203 18.0553 10.4203 17.9077C10.4275 16.9641 10.927 16.4158 11.7883 16.4158C13.9381 16.4158 16.0878 16.4158 18.2351 16.4184C19.3426 16.4184 20.4524 16.4158 21.5599 16.4158C22.4647 16.4158 22.952 16.9509 22.9544 17.9341C22.9544 18.1028 22.9544 18.2715 22.9544 18.4402C22.9544 19.3496 22.4622 19.8873 21.6226 19.89C19.9747 19.8926 18.3268 19.89 16.6789 19.89Z"
                      fill="white"
                    />
                    <path
                      d="M14.8983 27.9668C13.8488 27.9668 12.7968 27.9694 11.7473 27.9668C10.9366 27.9668 10.4324 27.4185 10.4227 26.5328C10.4203 26.2376 10.4131 25.9424 10.4493 25.6498C10.5313 24.9803 11.0162 24.4979 11.6315 24.4952C13.8005 24.4847 15.9696 24.4873 18.1362 24.4952C18.7346 24.4952 19.2268 24.9302 19.3112 25.576C19.3691 26.0056 19.3715 26.4617 19.3112 26.8913C19.2219 27.545 18.737 27.9589 18.1338 27.9642C17.0553 27.9721 15.9744 27.9642 14.8959 27.9642L14.8983 27.9668Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3_252">
                      <rect
                        width="28.9359"
                        height="27.7172"
                        fill="white"
                        transform="translate(0.566711 0.262695)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </form>
            {isFocused && (
              <div className="bg-white p-4 rounded-lg shadow-md ">
                <ul>
                  {AllTools.filter((tool) => {
                    const searchTerm = value.toLowerCase();
                    const name = tool?.Name?.toLowerCase();
                    return searchTerm && name?.startsWith(searchTerm);
                  })
                    .slice(0, 10)
                    .map((tool, index) => (
                      <li className="flex items-center space-x-4 py-2 hover:bg-gray-100 hover:cursor-pointer pl-6">
                        <div>
                          <p className="text-gray-500" key={tool.Name}>
                            <Link to={`/newtooldetails/${tool._id}`}>
                              {" "}
                              {tool.Name}
                            </Link>
                          </p>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            )}

            <div className="logo-search-container">
              <div className="my-0 mr-4">
                <img
                  className="w-[100px]"
                  src={`${process.env.PUBLIC_URL}/assets/logo-homepage.png`}
                  alt="search-box-logo"
                />
              </div>
              {isFiltering ? (
                <div className="filter-box">
                  <select
                    className="combo-box bg-white text-black rounded-[4px] "
                    onChange={(e) => setPricing(e.target.value)}
                  >
                    <option selected disabled>
                      Pricing
                    </option>
                    <option value="Freemium">Preemium</option>
                    <option value="Free">Free</option>
                    <option value="Paid">Paid</option>
                  </select>
                </div>
              ) : (
                <div className="fontWeight-500 text-[#F5F5F7] text-[12px] w-[274px]">
                  Browse 1000+ of the latest tech tools per task Updated daily
                </div>
              )}
            </div>
          </div>

          <div
            style={
              isFiltering
                ? {
                    display: "block",
                    transition: "transform ease-out .5s, opacity ease-out .5s",
                    transform: "scale(1)",
                    opacity: 1,
                  }
                : {
                    display: "hidden",
                    transition: "transform ease-in .5s, opacity ease-in .5s",
                    transform: "scale(1)",
                    opacity: 0,
                  }
            }
            className="transform opacity-0 scale-105 opacity-100 scale-100 transition-opacity duration-500 ease-in-out"
          >
            <div
              style={
                !isFiltering
                  ? {
                      display: "block",
                    }
                  : {
                      display: "none",
                    }
              }
            >
              <AppOfTheDay />
              {/************You might also like***********/}
              <div className="you-might-like-apps-container">
                {/* <div className="you-might-like-apps-container"> */}
                <p className="fontWeight-500 text-[#15C988] mb-4 text-[11px]">
                  YOU MIGHT ALSO LIKE
                </p>
                <div
                  className="flex flex-col sm:flex-row"
                  style={{ display: "flex" }}
                >
                  <YouMightLikeApp />
                </div>
                {/***********END You might also like********/}
              </div>
            </div>
            {!isFiltering ? (
              <div></div>
            ) : (
              // {/* End Filtering container */}
              <div data-test="homepage-section-0">
                <div>
                  <div>
                    {SearchedTool.map((tool, index) => (
                      <Toolitem
                        key={tool.id}
                        toolData={tool}
                        forceRender={forceRender}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div data-test="homepage-section-0">
            <div>
              <div>
                {!isFiltering ? (
                  <div className="tools-section-ngu">
                    <h1>Top tools</h1>
                    {!allTools ? (
                      <h1 style={{ color: "#fff" }}>Loading...</h1>
                    ) : (
                      allTools.slice(0, 50).map((tool, index) => (
                        <Toolitem
                          key={index}
                          toolData={tool}
                          forceRender={forceRender}
                        />
                      ))
                    )}
                  </div>
                ) : (
                  <div style={{ display: "none" }}></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <aside className="sidebarWithSeparator right">
        <Link to="/News">
          <h1 className="poppins" style={{ fontWeight: "300px" }}>
            News
          </h1>{" "}
        </Link>
        {data?.slice(0, 3).map((article, index) => (
          <NewsHomePage
            key={index}
            title={article.name}
            date={article.datePublished}
            provider={article?.provider[0]?.name}
          />
        ))}
        <Link to="/News">
          <div className="underline text-[14px] transition duration-300 hover:tracking-[.2px] hover:cursor-pointer ">
            See more...
          </div>
        </Link>
      </aside>
    </div>
  );
};

export default Home;
