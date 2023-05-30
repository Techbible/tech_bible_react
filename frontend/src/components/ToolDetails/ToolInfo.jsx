import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { BASE_URL } from "../../config/mongo";

const ToolInfo = ({ toolData }) => {
  const navigate = useNavigate();
  const { currentUser, isAdmin } = useContext(AuthContext);

  const [isToolLiked, setIsToolLiked] = useState(false);
  // const [likesNumber, setLikesNumber] = useState(
  //   toolData?.LikedBy?.length || 0
  // );
  const [simulatedLikesNumber, setSimulatedLikesNumber] = useState(
    toolData?.LikedBy?.length || 0
  );

  useEffect(() => {
    setIsToolLiked(toolData?.LikedBy?.includes(currentUser?.uid) || false);
    // setLikesNumber(toolData?.LikedBy?.length || 0);
    setSimulatedLikesNumber(toolData?.LikedBy?.length || 0);
  }, [toolData, currentUser]);

  const likeTool = async () => {
    try {
      setIsToolLiked(true);
      // Simulate increment visually
      setSimulatedLikesNumber((prevLikes) => prevLikes + 1);
      await axios.post(`${BASE_URL}/like/${toolData._id}/${currentUser?.uid}`);
      // setLikesNumber((prevLikes) => prevLikes + 1);
    } catch (error) {
      console.error("Failed to like tool:", error);
    }
  };

  const unlikeTool = async () => {
    try {
      setIsToolLiked(false);
      setSimulatedLikesNumber((prevLikes) => Math.max(prevLikes - 1, 0));
      await axios.post(
        `${BASE_URL}/unlike/${toolData._id}/${currentUser?.uid}`
      );
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
    <div>
      <p className="font-bold">{toolData?.Category}</p>
      <div className="px-mobile-1 px-tablet-1 pt-mobile-0 pt-desktop-6 pt-tablet-6 pt-widescreen-6 pb-mobile-7 pb-desktop-6 pb-tablet-6 pb-widescreen-6">
        <div
          className="flex direction-row flex-row-gap-4 flex-row-gap-mobile-2 flex-row-gap-widescreen-undefined flex-1"
          data-test="post-item-390145"
        >
          <a href={toolData?.URL} target="_blank" rel="noreferrer">
            <div
              className="styles_thumbnail__Rmwk5 styles_thumbnail__E2_pB"
              data-test="post-thumbnail"
            >
              <div className="rounded-[6px]  lg:w-[140px] md:w-[140px] sm:w-[120px] w-[100px] ">
                <img
                  loading="lazy"
                  src={toolData?.Icon}
                  alt=""
                  className="w-full md:w-140 rounded-sm"
                />
              </div>
            </div>
          </a>
          <div className="flex direction-column flex-1 mt-2">
            <a href={toolData?.URL} target="_blank" rel="noreferrer">
              <div className="color-white fontSize-mobile-12 fontSize-desktop-16 fontSize-tablet-16 fontSize-widescreen-16 fontWeight-600 mb-3 noOfLines-2 styles_format__w0VVk">
                {toolData?.Name}
                <i className="ml-3 text-sm text-white hover:text-gray-600 transition-colors duration-300 fas fa-share"></i>
              </div>
            </a>
            <div className="fontSize-mobile-12 fontSize-desktop-16 fontSize-tablet-16 fontSize-widescreen-16 fontWeight-400">
              <span className="styles_tagline__j29pO text-gray-300">
                {toolData?.Description}
              </span>
            </div>
            <div className="flex direction-row flex-row-gap-6 mt-3 align-center">
              <div className="flex direction-row flex-row-gap-3">
                {toolData?.Price ? (
                  <div className="color-white fontSize-12 fontWeight-400 noOfLines-undefined border-1 border-white rounded-md px-3 bg-gradient">
                    {toolData?.Price}
                  </div>
                ) : (
                  <div></div>
                )}
                <Link
                  className="styles_postTopicLink__wDe_p"
                  href="/topics/art"
                >
                  <div className="color-white fontSize-12 fontWeight-400 noOfLines-undefined">
                    {toolData?.Category}
                  </div>
                </Link>
                <div className="color-white fontSize-12 fontWeight-400 noOfLines-undefined">
                  <span className="bi bi-chat-left-dots"></span>
                </div>
                <div className="color-white fontSize-12 fontWeight-400 noOfLines-undefined">
                  {toolData?.comments?.length}
                </div>
                <i
                  className={`${
                    isToolLiked ? "text-red-500" : "text-white border-white"
                  } text-[25px] fas fa-heart hover:text-[26px] cursor-pointer`}
                  onClick={
                    currentUser ? handleLikeUnlike : () => navigate("/signin")
                  }
                ></i>
                {/* <div className="color-white fontSize-12 fontWeight-400 noOfLines-undefined">
                  {likesNumber}
                </div> */}
                <div className="color-white fontSize-12 fontWeight-400 noOfLines-undefined">
                  {simulatedLikesNumber}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolInfo;
