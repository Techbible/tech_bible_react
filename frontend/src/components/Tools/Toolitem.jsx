import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useRef } from "react";
import { useReducer } from "react";
import { LikeMethods } from "../../lib";
import axios from "axios";
import { BASE_URL } from "../../config/mongo";
import { render } from "react-dom";

const Toolitem = ({ toolData, forceRender }) => {
  const { currentUser, isAdmin } = useContext(AuthContext);
  const LikeMethodsRef = useRef(null);
  const navigate = useNavigate();

  const [isToolLiked, setIsToolLiked] = useState(false);
  useEffect(() => {
    toolData?.LikedBy.includes(currentUser?.uid)
      ? setIsToolLiked(true)
      : setIsToolLiked(false);
  }, []);

  const like = async (toolId) => {
    const response = await axios.post(
      `${BASE_URL}/like/${toolId}/${currentUser?.uid}`
    );
  };
  const unlike = async (toolId) => {
    const response = await axios.post(
      `${BASE_URL}/unlike/${toolId}/${currentUser?.uid}`
    );
  };
  const [LikeUnlikeClicked, setLikeUnlikeClicked] = useState();
  const handleLikes = async (toolID) => {
    setIsToolLiked(true);
    setLikeUnlikeClicked(true);
    like(toolID);
  };
  const handleUnLikes = async (toolID) => {
    setIsToolLiked(false);
    setLikeUnlikeClicked(false);
    unlike(toolID);
  };

  return (
    <div className="px-mobile-1 max-w-[680px] px-tablet-1 pt-mobile-0 pt-desktop-6 pt-tablet-6 pt-widescreen-6 pb-mobile-7 pb-desktop-6 pb-tablet-6 pb-widescreen-6">
      <LikeMethods ref={LikeMethodsRef} />

      <div
        className="flex direction-row flex-row-gap-4 flex-row-gap-mobile-2 flex-row-gap-widescreen-undefined flex-1"
        data-test="post-item-390145"
      >
        <Link to={`/tooldetails/${toolData._id}`}>
          <div
            className="rounded-[6px]  lg:w-[81px] md:w-[61px] sm:w-[51px] w-[51px]  "
            data-test="post-thumbnail"
          >
            <img
              loading="lazy"
              src={toolData?.Icon}
              className="lg:rounded-[6px] md:rounded-[6px] sm:rounded-[6px]"
              alt="tool"
            />
          </div>
        </Link>
        <div className="flex direction-column flex-1">
          <Link to={`/tooldetails/${toolData._id}`}>
            <div
              onClick={() => {
                navigate(`/tooldetails/${toolData._id}`);
              }}
              className="color-white font-700 text-[15px] font-bold mb-1"
            >
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
                {/* <div className="color-white fontSize-12 fontWeight-400 noOfLines-undefined">
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
          </Link>
        </div>
        <div className="flex direction-column mr-mobile-0 mr-desktop-2 mr-tablet-2 mr-widescreen-2 mt-2 mb-2 ml-mobile-2 ml-desktop-0 ml-tablet-0">
          <div className="flex direction-row align-center mt-3">
            <div className="flex direction-column align-items-center gap-2 mx-3 ">
              {/* like/unlike logic*/}
              {isToolLiked ? (
                <i
                  className="text-red-500 fas fa-heart text-[25px] hover:text-[26px] "
                  onClick={
                    currentUser
                      ? () => {
                          handleUnLikes(toolData._id);
                        }
                      : () => {
                          navigate("/signup");
                        }
                  }
                ></i>
              ) : (
                <i
                  className="text-white border-white text-[25px] far fa-heart hover:text-[27px]"
                  onClick={
                    currentUser
                      ? () => {
                          handleLikes(toolData._id);
                        }
                      : () => {
                          navigate("/signup");
                        }
                  }
                ></i>
              )}
              {/* if(LikeUnlikeClicked )
              {
                <div className="color-white fontSize-12 fontWeight-600 noOfLines-undefined">
                  {toolData.LikedBy?.length}
                </div>
              } */}
              <div className="color-white fontSize-12 fontWeight-600 noOfLines-undefined">
                {toolData.LikedBy?.length}
              </div>
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
