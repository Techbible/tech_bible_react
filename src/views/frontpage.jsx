import React, { useEffect, useReducer, useState, useRef } from "react";
import { auth, db } from "../config/firebase";
import { Link, useNavigate } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
// import { collection, updateDoc, getDoc, doc } from "firebase/firestore";
import Modal from "react-modal";
import Folder from "./profile/Folder";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "../assets/styles/home/home.css";
import "../assets/styles/home/global.css";
import "../assets/styles/search-container/search-container.css";
import { prompts } from "./prompts";
import Card from '../components/prompt'
import "../assets/styles/Card.css";
import Fuse from 'fuse.js';
const Frontpage = () => {

  const themes = [...new Set(prompts.map((prompt) => prompt.theme))];
  const { currentUser, currentUserData, updateUserData } =
  useContext(AuthContext);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [searchResults, setSearchResults] = useState([]);

  const options = { keys: ['theme', 'Action'],};
  

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const [authUser, setAuthUser] = useState(null);
  const [Search, setSearch] = useState("");
  const [AppOfTheDayData, setAppOfTheDayData] = useState();
  const [isSearching, setIsSearching] = useState(false);
  const [isFiltering, setIsFiltering] = useState(false);
  console.log(isFiltering);
  console.log(isFiltering);
  const [isHovered, setIsHovered] = useState(false);
  const [SearchedTool, setSearchedTool] = useState();
  const [resultFilter, setResultFilter] = useState("");
  const [Theme, setTheme] = useState("");
  const navigate = useNavigate();
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [showFilterResults, setShowFilterResults] = useState(false);

  useEffect(() => {
    if (Search.length > 0) {
      setIsSearching(true);
      
    } else {
      setIsSearching(false);
      setSearchedTool([]);
    }
  }, [Search]);
  const handleFilter = () => {
    // If the theme is empty or null, return all prompts
    const SearchedTools = [];
    if (Theme === "all Themes"|| Theme==='')
    {  setSearchedTool(prompts); 
     
    }
    else 
    {
       const filtered=prompts?.filter((prompt)=>{return prompt.theme===Theme});
       setSearchedTool(filtered);
       
      }
    console.log(Theme) ;
    
  };
  useEffect(() => {
    console.log("Updated SearchedTools:", SearchedTool);
  }, [SearchedTool]);
  
 
  useEffect(() => {
    handleFilter();
  }, [Theme]);
  //search bar suggestions
  const [isSuggestionsVisible, setisSuggestionsVisible] = useState(false);

  //input value
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const onChange = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue);
    if (inputValue === null) {
      setisSuggestionsVisible(false);
      setIsSearching(false);
    } else 
    {
      const fuse = new Fuse(prompts, options);
      const results = fuse.search(value);
      setSearchResults(results.map((result) => result.item));
      const suggestedItems = fuse
      .search(inputValue, { limit: 8 })
      .map((result) => result.item.theme);
      const uniqueSuggestions = new Set(suggestedItems);

      // Update the state with the suggestions (convert back to array)
      setSuggestions(Array.from(uniqueSuggestions));
      setisSuggestionsVisible(true);
     
  }};
  const handleSuggestionClick = (suggestion) => {
    setValue(suggestion);
    setSuggestions([]);
  };
  const handleSearchButtonClick = (event) => {
    event.preventDefault(); 
    setIsSearching(true);
    setisSuggestionsVisible(false);
  };

  return (
    <div>
      <div className="homeContainer mt-desktop-30 mt-mobile-12 mt-tablet-8 mt-widescreen-20 ">
        <main
          className="layoutMain  xl:mt-15 lg:mt-15 ml:mt-15 sm:mt-12 "
          onMouseLeave={() => setisSuggestionsVisible(false)}
        >
          <div className="flex direction-column ">
            
            {/* <div className="max-w-[750px] mx-auto flex flex-column py-2 my-4 md:mb-[2rem] lg:w-[900px] p-[30px] rounded-xl bg-gradient-to-r from-[#18151D] to-[#27242E]"> */}

            <div  className="flex direction-column align-items-center  justify-center">
              <div className="flex flex-column mt-12 rounded-xl ">
                <div className="text-white flex flex-column align-items-center mt-12 mb-12 poppins xl:text-[25px] lg:text-[23px] md:text-[22px] sm:text-[18px] text-[18px] fontWeight-700 mt-2">
                  <div>
                      Your job done, with the latest tool
                  </div>
                </div>

                <div className="flex flex-wrap logo-search-container">
                  
                 
                </div>
                <form className="flex items-center ml-6
                 mt-12 my-2 ">
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
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>

                    <input
                      type="text"
                      id="voice-search"
                      className="black h-16 w-full pl-20 pr-12 border border-gray-300 rounded-full text-black focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder=""
                      value={value}
                      onChange={(e) => {
                        onChange(e);
                        setIsSearching(false);
                       
                      }}
                      
                      
                      required
                      autoComplete="off"
                      onKeyDown={(e) => {
                        if (e.keyCode === 13) {
                          e.preventDefault();
                          setIsSearching(true);
                          
                        }
                      }}
                    />
                <button className="flex absolute items-center top-0 right-0 h-16 px-4 py-2 bg-[#ef4822] text-white rounded-full hover:bg-[#fa795c] hover:text-[#ef4822]" onClick={handleSearchButtonClick}> Search </button>

                  </div>
                  {/* <div className="ml-2"> */}
                  <div onClick={() => setIsFiltering(!isFiltering)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className=" ml-12 w-7 h-7 hover:w-8 hover:h-8 cursor-pointer"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
                      />
                    </svg>
                  </div>

                  {/* </div> */}
                </form>
                {isFiltering &&(
                    <div className="ml-2">
                      <select
                        onChange={(e) => setTheme(e.target.value)}
                        className="combo-box bg-white text-black px-1 rounded-[4px] "
                      >
                        <option value="all Themes">All Themes</option>
                        {themes.map((theme) => (
    <option key={prompts.id} value={theme}>
      {theme}
    </option>
  ))}
                      </select>
                    </div>
                  )}
               {suggestions?.length > 0 && (
        <ul className="suggestions">
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}
      
              </div>
            </div>
            {!isFiltering && !isSearching && (
          <div>
            <h1 className="ml-12 mt-12 mr-4 pl-12"> Explore Our Prompts Library </h1>
            <div className="cardcontainer">
              {prompts.map((prompt) => (
                <Card content={prompt} />
              ))}
            </div>
          </div>
        )}
            {!isFiltering ? (
                <div> </div>
              ) : (
                // {/* End Filtering container */}
                <div
                 
                 
                >
                  <div className="ml-4">{resultFilter}</div>
                  <div>
                  <div className="cardcontainer">
                    {SearchedTool.map((prompt) => (
                            <Card content={prompt}/>
                          ))} 
                    </div>
                  </div>
                </div>
              )}

             <div classname="flex flex-column">
              {/* keyword filter            */}
              {isSearching && value !== "" ? (
                <div>
                  <h1 className="mt-12 ml-12">Search results for : {value} </h1>
                 <div className="cardcontainer">
                   {searchResults.slice(0, 10)
                    .map((prompt) => (
                      <Card content={prompt} />
                                        ))
                      }  </div>
                 
                </div>
                    ) :
                    null}
                       </div>
            
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
              
           
         
              
            
            {/* <div className="text-white text-[25px]">{screenWidth}</div> */}

            {/***********END You might also like********/}
           
            {/* <div className=" xl:w-[1000px] lg:w-[900px] md:w-[900px] sm:w-[800px] w-[300px]"></div> */}
            <div
              style={
                isFiltering
                  ?{
                    display: "block",
                    transition: "transform ease-in .5s, opacity ease-in .5s",
                    transform: "scale(1)",
                    opacity: 1,
                  }:
                   {
                      display: "block",
                      transition:
                        "transform ease-out .5s, opacity ease-out .5s",
                      transform: "scale(1)",
                      opacity: 1,
                    }
                  
              }
              className="transform opacity-0 scale-105 opacity-100 scale-100 transition-opacity duration-500 ease-in-out flex flex-column align-items-center"
            ></div>
            {/* Choosing Topics */}
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
        <div className="text-[#EF4822] inline-block">Techbible Studio</div>
      </div>
    </a>
  </div>
</footer>
          </div>
        </main>
      </div>
   
    </div>
  );
};

export default Frontpage ;
