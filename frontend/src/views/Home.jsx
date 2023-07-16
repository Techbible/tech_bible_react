import React, { useEffect, useReducer, useState, useRef } from "react";
import { auth, db } from "../config/firebase";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { collection, updateDoc, getDoc, doc } from "firebase/firestore";
import Modal from "react-modal";
import Folder from "./profile/Folder";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "../assets/styles/home/home.css";
import "../assets/styles/home/global.css";
import NewsHomePage from "../components/News Scraper/NewsHomePage";
import Toolitem from "../components/Tools/Toolitem";
import YouMightLikeApp from "../components/home components/Filtering-container/YouMightLikeApp";
import AppOfTheDay from "../components/home components/Filtering-container/AppOfTheDay";
import "../assets/styles/search-container/search-container.css";
import { NewsContext } from "../context/NewsContext";
import { ModalcustomStyles } from "./Profile";
import axios from "axios";
import NewsLetterSubscribe from "../components/home components/NewsLetterSubscribe";
import { CategoriesData } from "../dataJson/CategoriesData";
import { useRecoilValue } from "recoil";
import { allToolsAtom } from "../recoil/tool";
import { homeToolsAtom } from "../recoil/homePageTools";
import { BASE_URL } from "../config/mongo";

const Home = () => {
  const allTools = useRecoilValue(allToolsAtom);

  const limitedTools = useRecoilValue(homeToolsAtom);
  //CONTEXT
  const { currentUser, currentUserData, updateUserData } =
    useContext(AuthContext);
  const { DataAPI, MongoDBData } = useContext(NewsContext);

  //RECOIL
  // const allToolsLoadable = useRecoilValueLoadable(allToolsAtom);
  // const allTools = allToolsLoadable.contents;

  //to force Re-render
  const [reducerValue, forceRender] = useReducer((x) => x + 1, 0);
  const [allToolsLoadable, setAllToolsLoadable] = useState(false);

  const [ToolToFolder, setToolToFolder] = useState("");
  const [ToolToFolderIndex, setToolToFolderIndex] = useState();
  const [toolsNumber, setToolsNumber] = useState(30);
  const [topic, setTopic] = useState("");
  const [isTopicChosen, setIsTopicChosen] = useState(false);

  // Handle Screen Sizing
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
  }, []); // The empty dependency array ensures the effect runs only once on mount

  useEffect(() => {
    setAllToolsLoadable(false);
    // LoadFolders();
    // getLimitedTools();
    if (limitedTools) setAllToolsLoadable(true);
  }, []);

  //LOADING
  const [isLoading, setLoading] = useState(false);

  const [authUser, setAuthUser] = useState(null);
  //USERS FOLDERS
  const [UserFolders, setUserFolders] = useState([]);

  //To store the searched value
  const [Search, setSearch] = useState("");
  const [AppOfTheDayData, setAppOfTheDayData] = useState();

  //to keep track either if the user is searching or not
  const [isSearching, setIsSearching] = useState(false);
  const [isFiltering, setIsFiltering] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  //To store the results of the research
  const [SearchedTool, setSearchedTool] = useState([]);

  //storing the pricing choice
  const [Pricing, setPricing] = useState("all");
  const [resultFilter, setResultFilter] = useState("");
  const [category, setCategory] = useState("all categories");

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
  //this is firebase
  // const SearchTool = async () => {
  //   const SearchedTools = [];
  //   const q = query(collection(db, "Tools"), where("Name", "==", Search));
  //   const querySnapshot = await getDocs(q);
  //   querySnapshot.forEach((doc) => {
  //     SearchedTools.push(doc.data());
  //   });
  //   setSearchedTool(SearchedTools);
  //   console.log(SearchedTool);
  // };

  //keeping track on what's the user is searching for
  useEffect(() => {
    if (Search.length > 0) {
      setIsSearching(true);
      // SearchTool();
    } else {
      setIsSearching(false);
      setSearchedTool([]);
    }
  }, [Search]);

  // useEffect(()=>{alert(ToolToFolder)},[ToolToFolder])

  //HANDLE ADDING A TOOL TO A FOLDER START FIREBASE
  // const handleAddToFolder = () => {
  //   const usersRef = collection(db, "Users");
  //   const userDocRef = doc(usersRef, currentUser?.uid);

  //   // Get the current user document
  //   getDoc(userDocRef)
  //     .then((doc) => {
  //       if (doc.exists()) {
  //         const userData = doc.data();
  //         let folders = userData.folders;

  //         if (!folders) {
  //           // Initialize the folders array if it doesn't exist
  //           folders = [];
  //         }

  //         // Update the specific folder's tools array
  //         if (
  //           folders[ToolToFolderIndex] &&
  //           Array.isArray(folders[ToolToFolderIndex].tools)
  //         ) {
  //           folders[ToolToFolderIndex].tools.push(ToolToFolder);
  //         } else {
  //           // Initialize the tools array for the specific folder if it doesn't exist
  //           folders[ToolToFolderIndex].tools = [ToolToFolder];
  //         }

  //         // Update the user document with the modified folders array
  //         updateDoc(userDocRef, { folders })
  //           .then(() => {
  //             console.log("Tool added to folder!");
  //           })
  //           .catch((error) => {
  //             console.log("Error updating folder:", error);
  //           });
  //       }
  //     })
  //     .catch((error) => {
  //       console.log("Error getting user document:", error);
  //     });

  //   closeModal();
  //   forceRender();
  // };
  //HANDLE ADDING A TOOL TO A FOLDER END

  //HANDLE ADD TOOL TO FOLDER MONGODB START
  const handleAddToolToFolder = async (index) => {
    // alert(index);
    try {
      const uid = currentUser.uid;
      const requestBody = {
        uid: uid,
        index: index,
        toolId: ToolToFolder,
      };

      const response = await axios.post(
        `${BASE_URL}/addToolToFolder`,
        requestBody
      );
      console.log(response.data); // Newly added tool object
      updateUserData();
      // Handle any additional logic or UI updates upon successful response
      closeModal();
    } catch (error) {
      console.error(error);
      // Handle error cases and display error messages to the user
    }
  };
  //HANDLE ADD TOOL TO FOLDER MONGODB END

  // handling  by price
  const handleFilter = async () => {
    const SearchedTools = [];
    //this is firebase
    // const q = query(collection(db, "Tools"), where("Price", "==", Pricing));
    // const querySnapshot = await getDocs(q);
    // querySnapshot.forEach((doc) => {
    //   SearchedTools.push(doc.data());
    // });

    //this is mongo
    // const response = await axios.get(`${BASE_URL}/mongo-tools`);

    if (Pricing === "all" && category === "all categories") {
      const toolsWithMatchingPrice = allTools;
      setSearchedTool(SearchedTools.concat(allTools));
      if (toolsWithMatchingPrice.length === 0)
        setResultFilter(`There is no tool in '${category}'`);
      else setResultFilter("");
    } else if (category === "all categories") {
      const toolsWithMatchingPrice = allTools?.filter(
        (tool) => tool.Price === Pricing
      );
      setSearchedTool(SearchedTools.concat(toolsWithMatchingPrice));
      if (toolsWithMatchingPrice.length === 0)
        setResultFilter(
          `There is no tool in '${category}' that is '${Pricing}'`
        );
      else setResultFilter("");
    } else if (Pricing === "all") {
      const toolsWithMatchingPrice = allTools?.filter((tool) => {
        return tool.Category === category;
      });
      setSearchedTool(SearchedTools.concat(toolsWithMatchingPrice));
      if (toolsWithMatchingPrice.length === 0)
        setResultFilter(`There is no tool in '${category}'`);
      else setResultFilter("");
    } else {
      const toolsWithMatchingPrice = allTools?.filter((tool) => {
        return tool.Price === Pricing && tool.Category === category;
      });
      setSearchedTool(SearchedTools.concat(toolsWithMatchingPrice));
      if (toolsWithMatchingPrice.length === 0)
        setResultFilter(
          `There is no tool in '${category}' that is '${Pricing}'`
        );
      else setResultFilter("");
    }
    console.log(typeof SearchedTool);
    console.log(typeof SearchedTools);
  };

  // useEffect(() => {
  //   LoadFolders();
  // }, [UserFolders]);

  //APP OF THE DAY
  useEffect(() => {
    if (Array.isArray(allTools)) {
      const topTool = allTools
        .filter((tool) => tool.LikedBy?.length >= 1)
        .reduce(
          (maxTool, tool) =>
            maxTool.LikedBy?.length > tool.LikedBy?.length ? maxTool : tool,
          {}
        );
      setAppOfTheDayData(topTool);
    }
  }, [allTools]);

  useEffect(() => {
    handleFilter();
  }, [Pricing]);
  useEffect(() => {
    handleFilter();
  }, [category]);

  //search bar suggestions
  const [isSuggestionsVisible, setisSuggestionsVisible] = useState(false);

  //input value
  const [value, setValue] = useState("");
  const inputRef = useRef(null);
  const [selectedTopic, setSelectedTopic] = useState("");

  const onChange = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue);
    if (value === null) {
      setisSuggestionsVisible(false);
      setIsSearching(false);
    } else setisSuggestionsVisible(true);
  };

  const [selectedSuggestion, setSelectedSuggestion] = useState(-1);
  const suggestionContainerRef = useRef(null);
  const filteredSuggestions = allTools.filter((tool) => {
    const searchTerm = value.toLowerCase();
    const name = tool?.Name?.toLowerCase();
    return searchTerm && name?.startsWith(searchTerm);
  });

  //Modal Styles
  Modal.setAppElement("#root");
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const handleKeyDown = (event) => {
    event.preventDefault();
    if (event.key === "ArrowDown") {
      setSelectedSuggestion((prev) =>
        prev === filteredSuggestions.length - 1 ? 0 : prev + 1
      );
    } else if (event.key === "ArrowUp") {
      setSelectedSuggestion((prev) =>
        prev === 0 ? filteredSuggestions.length - 1 : prev - 1
      );
    } else if (event.key === "Enter") {
      setIsSearching(true);
      if (
        selectedSuggestion >= 0 &&
        selectedSuggestion < filteredSuggestions.length
      ) {
        const selectedTool = filteredSuggestions[selectedSuggestion];
        window.location.href = `/tooldetails/${selectedTool._id}/${"0"}`;
        // navigate(`/tooldetails/${selectedTool._id}`);
      }
    }
  };
  useEffect(() => {
    if (isSuggestionsVisible && value !== "") {
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [selectedSuggestion]);

  const chooseTopic = (topic) => {
    setTopic(topic);
    setIsTopicChosen(true);
  };

  return (
    <div >
      <div className="homeContainer mt-desktop-30 mt-mobile-12 mt-tablet-8 mt-widescreen-20 layoutContainer ml-20">
        <main
          className="layoutMain xl:mt-15 lg:mt-15 ml:mt-15 sm:mt-12 mb-5"
          onMouseLeave={() => setisSuggestionsVisible(false)}
        >
        <div className="flex direction-column mb-20 mt-10">

          <div className="flex direction-column align-items-center mb-20 mt-10">
              <div className="flex flex-column  max-w-[560px]  my-4 mx-4  md:mb-[2rem] rounded-xl mb-20">
                <div className={`text-white flex flex-column align-items-center poppins xl:text-[25px] lg:text-[23px] md:text-[22px] sm:text-[18px] text-[18px] fontWeight-700 ml-1000 mt-50 ${screenWidth < 768 ? 'ml-20 fontWeight-400' : ''}`}
>
                  <div>
                   Your job done, with the latest tool
                  </div>
                </div>
                <div className={`flex flex-wrap logo-search-container ${screenWidth < 768 ? '' : 'justify-center'}`}>
                  <div className={`fontWeight-300 poppins text-[#F5F5F7] xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[14px] text-[14px] w-[290px] opacity-[.9] whitespace-nowrap mr-80 mt-10 ${screenWidth < 768 ? 'fontWeight-80 ml-20 ' : ''}`}  >
                    We curate, test and review tools before recommending them to you
                  </div>
                </div>
                


                <div className={`relative w-full max-w-[4000px] ml-1000 py-4 px-300 mt-5${screenWidth < 768 ? 'max-w-[1500px] ml-10 ' : ''}`}>
                 <div className="relative flex items-center">
                   <svg
                    className="absolute w-5 h-5 pointer text-gray-500 dark:text-gray-400 left-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                   >
                   <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                   ></path>
                   </svg>
                   <input
                   type="text"
                   id="voice-search"
                   className={`black h-16 w-full pl-14 pr-10 border border-gray-300 rounded-full text-black focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${screenWidth < 768 ? 'h-12' : ''}`}
                   placeholder="Type Keyword..."
                   value={value}
                   onChange={(e) => {
                   onChange(e);
                   setIsSearching(false);
                                     }}
                   disabled={allTools !== null ? false : true}
                   ref={inputRef}
                    required
                   autoComplete="off"
                   onKeyDown={(e) => {
                   if (e.keyCode === 13) {
                   e.preventDefault();
                   setIsSearching(true);
                   setisSuggestionsVisible(false);
                   }
                   }}
                  />
            <button
             className="absolute top-0 right-0 h-full px-4 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-500 bg-opacity-75"
              onClick={() => {
               setIsSearching(true);
               setisSuggestionsVisible(false);
                            }}
                   >
                   search
             </button>
              </div>
             </div>


                  {/* <div className="ml-2"> */}

                  {/* </div> */}
                {isSuggestionsVisible && value !== "" && (
                  <div
                    ref={suggestionContainerRef}
                    className="bg-white p-4 rounded-lg shadow-md "
                    onMouseLeave={() => {
                      setSelectedSuggestion(-1);
                      inputRef.current.focus();
                    }}
                  >
                    <ul>
                      {allTools
                        ?.filter((tool) => {
                          const searchTerm = value.toLowerCase();
                          const name = tool?.Name?.toLowerCase();
                          return searchTerm && name?.startsWith(searchTerm);
                        })
                        .slice(0, 10)
                        .map((tool, index) => (
                          <Link
                            to={`/tooldetails/${tool._id}/${"0"}`}
                            className="hover:text-black font-bold"
                            key={tool._id}
                          >
                            <li
                              className={`flex items-center space-x-4 py-2 hover:bg-gray-100 hover:cursor-pointer  pl-6 ${
                                index === selectedSuggestion
                                  ? "bg-blue-100"
                                  : ""
                              }`}
                            >
                              <div>
                                <p className="text-gray-500" key={tool._id}>
                                  {tool?.Name}
                                </p>
                              </div>
                            </li>
                          </Link>
                        ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="flex direction-column align-items-center justify-center text-center ">
              {/* keyword filter            */}
              {isSearching && value !== "" ? (
                <div>
                  <h1 className="mb-8">Search results for : {value} </h1>
                  {allTools
                    ?.filter((tool) => {
                      // const lowercasedKeywords = tool.Keywords.toLowerCase();
                      // const lowercasedValues = value.toLowerCase().split(' '); // Split input value into an array of words
                      // return lowercasedValues.some((word) => lowercasedKeywords.includes(word)); // Check if any word matches a tool keyword
                      const lowercasedKeywords = tool.Keywords.toLowerCase();
                      const lowercasedValues = value.toLowerCase();

                      return lowercasedKeywords.includes(lowercasedValues);
                    })
                    .slice(0, 10)
                    .map((tool) => (
                      <Toolitem
                        key={tool._id}
                        toolData={tool}
                        forceRender={forceRender}
                        homeTool={false}
                      />
                    ))}

                  {allTools &&
                    allTools.length > 0 &&
                    allTools.filter((tool) =>
                      tool.Keywords.toLowerCase().includes(value.toLowerCase())
                    ).length === 0 && <p>Nothing found for {value}.</p>}
                  <hr className="my-20 border-white" />
                </div>
              ) : null}
              {/* end keyword filter              */}
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
              ></div>
              {!isFiltering ? (
                <div></div>
              ) : (
                // {/* End Filtering container */}
                <div
                  data-test="homepage-section-0"
                  className="flex flex-column align-items-center"
                  style={{ diplay: "block" }}
                >
                  <div className="ml-4">{resultFilter}</div>
                  <div>
                    <div>
                      {SearchedTool.map((tool, index) => (
                        <Toolitem
                          key={tool._id}
                          toolData={tool}
                          forceRender={forceRender}
                          homeTool={false}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/************You might also like***********/}
            <div className="flex direction-column align-items-center mt-[6vh] ">
              {auth.currentUser ? (
                <div className="you-might-like-apps-container">
                  {/* <div className="you-might-like-apps-container"> */}
                  <p className="fontWeight-500 text-[#15C988] mb-4 text-[11px]">
                    YOU MIGHT ALSO LIKE
                  </p>
                  {currentUserData?.interests?.length === 0 ? (
                    <div>
                      Add your{" "}
                      <u>
                        {" "}
                        <Link to={"/profile"}>interests</Link>
                      </u>{" "}
                      to discover personalized tool suggestions.
                    </div>
                  ) : (
                    <div
                      className="flex flex-col sm:flex-row"
                      style={{ display: "flex" }}
                    >
                      <YouMightLikeApp />
                    </div>
                  )}
                </div>
              ) : // <p className="text[#FFFFFF] fw-500 ml-[90px] mb-[3rem]">
              //   <Link to={"/signup"}>
              //     {" "}
              //     <u>Sign up</u>
              //   </Link>
              //   &nbsp;to save tools, share lists and get personalised
              //   recommendations.
              // </p>
              null}
            </div>
            {/* <div className="text-white text-[25px]">{screenWidth}</div> */}

            {/***********END You might also like********/}
            {!isFiltering && (
              <div className="container xxl:w-[1300px] xl:w-[1050px] max-w-full py-4 mb-6 border-b-[.2px] border-none align-items-center justify-center text-center ml-1">
              <div
                className={
                  screenWidth > 1100
                    ? "flex flex-row ml-[12%] gap-[6%]"
                    : "flex flex-row ml-0 gap-[6%]"
                }
              >
                <div
                  className={`${
                    selectedTopic === "" && !isTopicChosen
                      ? "text-white font-semibold poppins cursor-pointer bg-[#DD5434] text-[#DD5434] px-4 py-2 rounded-full"
                      : "text-[#DD5434] font-semibold poppins cursor-pointer bg-transparent text-[#DD5434] px-4 py-2 rounded-full hover:bg-[#DD5434] text-white"
                  } `}
                  onClick={() => {
                    setIsTopicChosen(false);
                    setTopic("");
                    setSelectedTopic("");
                  }}
                >
                  Popular
                </div>
            
                <div
                  className={`${
                    selectedTopic === "Marketing Automation"
                      ? "text-white font-semibold poppins cursor-pointer bg-[#DD5434] px-4 py-2 rounded-full"
                      : "text-[#DD5434] font-semibold poppins cursor-pointer bg-transparent bg-[#DD5434 bg-opacity-10] px-4 py-2 rounded-full hover:bg-[#DD5434] text-white"
                  } `}
                  onClick={() => {
                    chooseTopic("Marketing Automation");
                    setSelectedTopic("Marketing Automation");
                  }}
                >
                  Automation
                </div>
            
                {screenWidth >= 700 && (
                  <div
                    className={`${
                      selectedTopic === "No-code"
                        ? "text-white font-semibold poppins cursor-pointer bg-[#DD5434] px-4 py-2 rounded-full"
                        : "text-[#DD5434] font-semibold poppins cursor-pointer bg-transparent bg-[#DD5434 bg-opacity-10] px-4 py-2 rounded-full hover:bg-[#DD5434] text-white"
                    } `}
                    onClick={() => {
                      chooseTopic("No-code");
                      setSelectedTopic("No-code");
                    }}
                  >
                    No Code
                  </div>
                )}
            
                <div
                  className={`${
                    selectedTopic === "Artificial Intelligence and Machine Learning"
                      ? "text-white font-semibold poppins cursor-pointer bg-[#DD5434] px-4 py-2 rounded-full"
                      : "text-[#DD5434] font-semibold poppins cursor-pointer bg-transparent bg-[#DD5434 bg-opacity-10] px-4 py-2 rounded-full hover:bg-[#DD5434] text-white"
                  } `}
                  onClick={() => {
                    chooseTopic("Artificial Intelligence and Machine Learning");
                    setSelectedTopic("Artificial Intelligence and Machine Learning");
                  }}
                >
                  AI
                </div>
            
                <div
                  className={`${
                    selectedTopic === "Productivity tools"
                      ? "text-white font-semibold poppins cursor-pointer bg-[#DD5434] px-4 py-2 rounded-full"
                      : "text-[#DD5434] font-semibold poppins cursor-pointer bg-transparent bg-[#DD5434 bg-opacity-10] px-4 py-2 rounded-full hover:bg-[#DD5434] text-white"
                  } `}
                  onClick={() => {
                    chooseTopic("Productivity tools");
                    setSelectedTopic("Productivity tools");
                  }}
                >
                  Productivity
                </div>
            
                {screenWidth >= 810 && (
                  <div
                    className={`${
                      selectedTopic === "Graphic Design"
                        ? "text-white font-semibold poppins cursor-pointer bg-[#DD5434] px-4 py-2 rounded-full"
                        : "text-[#DD5434] font-semibold poppins cursor-pointer bg-transparent bg-[#DD5434 bg-opacity-10] px-4 py-2 rounded-full hover:bg-[#DD5434] text-white"
                    } `}
                    onClick={() => {
                      chooseTopic("Graphic Design");
                      setSelectedTopic("Graphic Design");
                    }}
                  >
                    Design
                  </div>
                )}
              </div>
            </div>
            
            )}
            {/* <div className=" xl:w-[1000px] lg:w-[900px] md:w-[900px] sm:w-[800px] w-[300px]"></div> */}
            <div
              style={
                !isFiltering
                  ? {
                      display: "block",
                      transition:
                        "transform ease-out .5s, opacity ease-out .5s",
                      transform: "scale(1)",
                      opacity: 1,
                    }
                  : {
                      display: "block",
                      transition: "transform ease-in .5s, opacity ease-in .5s",
                      transform: "scale(1)",
                      opacity: 1,
                    }
              }
              className="transform opacity-0 scale-105 opacity-100 scale-100 transition-opacity duration-500 ease-in-out flex flex-column align-items-center"
            ></div>
            {/* Choosing Topics */}
            <div className="flex flex-column align-items-center">
              {isTopicChosen &&
                allTools?.map((tool, index) => {
                  if (tool?.Category === topic) {
                    return (
                      <Toolitem
                        key={tool._id}
                        toolData={tool}
                        forceRender={forceRender}
                        setToolToFolder={setToolToFolder}
                        setIsOpen={setIsOpen}
                        homeTool={false}
                      />
                    );
                  }
                })}
            </div>

            <div data-test="homepage-section-0">
              <div>
                <div className="flex flex-column align-items-center">
                  {!isFiltering && topic === "" ? (
                    <div className="tools-section-ngu">
                      {/* <p className="medium lg:text-[18px] md:text-[17px] sm:text-[16px] mb-[1rem] ">
                        Top tools
                      </p> */}
                      {currentUser ? (
                        <AppOfTheDay tool={AppOfTheDayData} />
                      ) : (
                        <div> </div>
                      )}
                      {!limitedTools ? (
                        <h1 className="text-white">Loading...</h1>
                      ) : (
                        Array.isArray(allTools) &&
                        limitedTools.map((tool, index) => (
                          <div key={index}>
                            <Toolitem
                              toolData={tool}
                              forceRender={forceRender}
                              homeTool={true}
                            />
                          </div>
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
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={ModalcustomStyles}
          contentLabel="Example Modal"
        >
          {!currentUser ? (
            <div>
              <Link to={"/signup"}>
                <u>Sign up</u> to personalize your folders
              </Link>
            </div>
          ) : (
            <div>
              {currentUserData?.folders?.length === 0 ? (
                <Link to={"/folders"}>
                  <div>
                    {" "}
                    <u>Create</u> folders for easy organization.
                  </div>
                </Link>
              ) : (
                <div className={`space-x-4 grid grid-cols-3 gap-4`}>
                  {currentUserData?.folders?.map((item, index) => (
                    <div
                      className="cursor-pointer"
                      key={index}
                      onClick={() => handleAddToolToFolder(index)}
                    >
                      <Folder key={index} isRowsView={false} item={item} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </Modal>
      </div>
      <footer className="bg-black text-white py-10">
         <div className="flex flex-column justify-center items-center">
         <ul className="flex flex-row lg:gap-[64px] gap-3 mb-5">
          <h3>Follow us</h3>
          <li className="tracking-wider hover:tracking-widest">
           <a
            href="https://www.tiktok.com/@tech.bible"
            target="_blank"
            rel="noopener noreferrer"
           >
          <i className="fab fa-tiktok text-white text-xl"></i>
           </a>
          </li>
          <li className="tracking-wider hover:tracking-widest">
           <a
          href="https://youtube.com/@MyTechBible"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-youtube text-white text-xl"></i>
        </a>
      </li>
      <li className="tracking-wider hover:tracking-widest">
        <a
          href="https://www.instagram.com/techbible.ai/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram text-white text-xl"></i>
        </a>
      </li>
    </ul>
    <a href="https://www.mytechbible.com/" target="_blank">
      <div className="text-[14px] font-semibold mb-4">
        Made by{" "}
        <div className="text-[#EF4823] inline-block">Techbible Studio</div>
      </div>
    </a>
  </div>
</footer>

      {/* <Footer /> */}
    </div>
  );
};

export default Home;
