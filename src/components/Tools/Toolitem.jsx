import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useRef } from "react";
import { useReducer } from "react";
import { LikeMethods } from "../../lib";
import axios from "axios";
import { BASE_URL } from "../../config/mongo";

const Toolitem = ({
  toolData,
  setIsOpen,
  setToolToFolder,
  homeTool,
  FolderTool,
}) => {
  const { currentUser, isAdmin } = useContext(AuthContext);
  // const LikeMethodsRef = useRef(null);
  const navigate = useNavigate();

  const [isToolLiked, setIsToolLiked] = useState();
  // const [LikeUnlikeClicked, setLikeUnlikeClicked] = useState();
  const [simulatedLikesNumber, setSimulatedLikesNumber] = useState(
    toolData?.LikedBy?.length || 0
  );
  useEffect(() => {
    console.log("TOOLITEM DATA : " + toolData);
    setIsToolLiked(toolData?.LikedBy?.includes(currentUser?.uid) || false);
    // setLikesNumber(toolData?.LikedBy?.length || 0);
    setSimulatedLikesNumber(toolData?.LikedBy?.length || 0);
  }, [toolData, currentUser]);

  const likeTool = async () => {
    try {
      setIsToolLiked(true);
      // Simulate increment visually
      setSimulatedLikesNumber((prevLikes) => prevLikes + 1);
      if (homeTool) {
        const res = await axios.post(
          `${BASE_URL}/likeHomeTool/${toolData._id}/${currentUser?.uid}`
        );
      } else {
        const res = await axios.post(
          `${BASE_URL}/like/${toolData._id}/${currentUser?.uid}`
        );
      }
    } catch (error) {
      console.error("Failed to like tool:", error);
    }
  };

  const unlikeTool = async () => {
    try {
      setIsToolLiked(false);
      setSimulatedLikesNumber((prevLikes) => Math.max(prevLikes - 1, 0));
      if (homeTool) {
        try {
          const res = await axios.post(
            `${BASE_URL}/unlikeHomeTool/${toolData._id}/${currentUser?.uid}`
          );
          console.log("UNLIKE home TOOL Succesfuly");
        } catch (e) {
          console.log("UNLIKE TOOL ERROR t-item: " + e);
        }
      } else {
        const res = await axios.post(
          `${BASE_URL}/unlike/${toolData._id}/${currentUser?.uid}`
        );
      }
      // setLikesNumber((prevLikes) => Math.max(prevLikes - 1, 0));
    } catch (error) {
      console.error("Failed to unlike tool:", error);
    }
  };

  const handleLikeUnlike = async () => {
    if (isToolLiked) {
      unlikeTool();
    } else {
      likeTool();
    }
  };

  return (
    <div className="px-mobile-1 max-w-[680px] xl:min-w-[680px] lg:min-w-[680px] md:min-w-[680px] sm:min-w-[600px] px-tablet-1 pt-mobile-0 pt-desktop-6 pt-tablet-6 pt-widescreen-6 pb-mobile-7 pb-desktop-6 pb-tablet-6 pb-widescreen-6 mx-4 ">
      <div
        className="flex direction-row flex-row-gap-4 flex-row-gap-mobile-2 flex-row-gap-widescreen-undefined flex-1  "
        data-test="post-item-390145"
      >
        <div
          className="rounded-[6px]  lg:w-[81px] md:w-[61px] sm:w-[51px] w-[51px] cursor-pointer  "
          data-test="post-thumbnail"
          onClick={
            // currentUser
            //   ? () => navigate(`/tooldetails/${toolData?._id}`)
            //   : () => {
            //       navigate(`/tooldetails/${toolData?._id}`);
            //     }
            homeTool
              ? () => navigate(`/tooldetails/${toolData?._id}/${"1"}`)
              : () => navigate(`/tooldetails/${toolData?._id}/${"0"}`)
          }
        >
          <img
            loading="lazy"
            src={toolData?.Icon}
            className="lg:rounded-[6px] md:rounded-[6px] sm:rounded-[6px]"
            alt="tool"
          />
        </div>

        <div
          onClick={
            // currentUser
            //   ? () => navigate(`/tooldetails/${toolData?._id}`)
            //   : () => {
            //       navigate(`/tooldetails/${toolData?._id}`);
            //     }
            homeTool
              ? () => navigate(`/tooldetails/${toolData?._id}/${"1"}`)
              : () => navigate(`/tooldetails/${toolData?._id}/${"0"}`)
          }
          className="flex direction-column flex-1 cursor-pointer "
        >
          <div className="color-white font-700 text-[15px] font-bold mb-1">
            {toolData?.Name}{" "}
          </div>
          {/* <div className="color-white fontSize-mobile-12 fontSize-desktop-16 fontSize-tablet-16 fontSize-widescreen-16 fontWeight-400 noOfLines-2"> */}
          <div className="text-gray-300 text-[12px] ">
            <span className="styles_tagline__j29pO fontWeight-100 poppins noOfLines-2">
              {toolData.Description}
            </span>
          </div>
          <div className="flex direction-row flex-row-gap-6 mt-3 align-center">
            <div className="flex direction-row flex-row-gap-3">
              <div className="color-white fontSize-12 fontWeight-400 noOfLines-undefined">
                <span className="bi bi-chat-left-dots"></span>
              </div>
              {/* <div className="fontSize-12 fontWeight-400 noOfLines-undefined">
                  {toolData?.LikedBy?.length}
                </div> */}
              <div className="color-white fontSize-12 fontWeight-400 noOfLines-undefined">
                {toolData.Price}
              </div>
              <Link to="/" className="styles_postTopicLink__wDe_p">
                <div className="color-white fontSize-12 fontWeight-400 noOfLines-undefined">
                  {toolData.Category}
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex direction-column mr-mobile-0 mr-desktop-2 mr-tablet-2 mr-widescreen-2 mt-2 mb-2 ml-mobile-2 ml-desktop-0 ml-tablet-0">
          <div className="flex direction-row align-center mt-3">
            <div className="flex direction-column align-items-center gap-2 mx-3 ">
              {/* like/unlike logic*/}
              {/* {homeTool === false ? ( */}
              <>
                <i
                  className={`${
                    isToolLiked ? "text-red-500" : "text-white border-white"
                  } text-[25px] fas fa-heart hover:text-[26px] cursor-pointer`}
                  onClick={
                    currentUser ? handleLikeUnlike : () => navigate("/signin")
                  }
                ></i>
                <div className="text-white fontSize-12 fontWeight-600 noOfLines-undefined">
                  {simulatedLikesNumber}
                </div>
              </>
            </div>
            <div
              className="cursor-pointer ml-2 text-center"
              onClick={() => {
                setToolToFolder(toolData._id);
                setIsOpen(true);
              }}
            >
              {!homeTool && !FolderTool && <h1>+</h1>}
            </div>

            <div>
              {/* <span className="bi bi-plus-lg fw-bold text-[25px] text-gray-400 transition duration-500 hover:text-white hover:text-[27px] "></span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toolitem;
