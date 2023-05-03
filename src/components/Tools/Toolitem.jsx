import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useRef } from "react";
import { useReducer } from "react";
import { LikeMethods } from "../../lib";

const Toolitem = ({ toolData, forceRender }) => {
  const { currentUser, isAdmin } = useContext(AuthContext);
  const LikeMethodsRef = useRef(null);

  const handleUnLikes = (toolID) => {
    LikeMethodsRef.current.Unlike(toolID);
    forceRender();
  };
  const handleLikes = (toolID) => {
    LikeMethodsRef.current.Like(toolID);
    forceRender();
  };

  return (
    <div className="px-mobile-1 px-tablet-1 pt-mobile-0 pt-desktop-6 pt-tablet-6 pt-widescreen-6 pb-mobile-7 pb-desktop-6 pb-tablet-6 pb-widescreen-6">
      <LikeMethods ref={LikeMethodsRef} />

      <div
        className="styles_item__Sn_12 flex direction-row flex-row-gap-4 flex-row-gap-mobile-2 flex-row-gap-widescreen-undefined flex-1"
        data-test="post-item-390145"
      >
        <a href="/posts/mage-4" aria-label="Mage">
          <div
            className="styles_thumbnail__Rmwk5 styles_thumbnail__E2_pB mr-3"
            data-test="post-thumbnail"
          >
            <img
              loading="lazy"
              src={toolData?.Icon}
              style={{ width: "81px", height: "79px" }}
              alt="Adobe XD"
              className="styles_mediaThumbnail__LDCQN"
            />
          </div>
        </a>
        <div className="flex direction-column flex-1">
          <div className="color-white font-700 text-[15px] font-bold mb-1">
            <Link to={`/newtooldetails/${toolData.id}`}>{toolData?.Name} </Link>
            <a
              href="/r/p/390145"
              rel="noopener"
              target="_blank"
              className="styles_externalLinkIcon__822Ku"
            >
              <svg width="13" height="14" viewBox="0 0 13 14">
                <g
                  stroke="#4B587C"
                  strokeWidth="1.5"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <path d="M9.6 4H4.2a2.4 2.4 0 0 0-2.4 2.4V10"></path>
                  <path d="M6.6 7l3-3-3-3M12 10v3H0"></path>
                </g>
              </svg>
            </a>
          </div>
          {/* <div className="color-white fontSize-mobile-12 fontSize-desktop-16 fontSize-tablet-16 fontSize-widescreen-16 fontWeight-400 noOfLines-2"> */}
          <div className="text-gray-300 text-[12px] ">
            <span className="styles_tagline__j29pO fontWeight-500 noOfLines-2">
              {toolData.Description}
            </span>
          </div>
          <div className="flex direction-row flex-row-gap-6 mt-3 align-center">
            <div className="flex direction-row flex-row-gap-3">
              <div className="color-white fontSize-12 fontWeight-400 noOfLines-undefined">
                <span class="bi bi-chat-left-dots"></span>
              </div>
              <div className="color-white fontSize-12 fontWeight-400 noOfLines-undefined">
                {toolData?.LikedBy?.length}
              </div>
              <div className="color-white fontSize-12 fontWeight-400 noOfLines-undefined">
                {toolData.Price}
              </div>
              <a className="styles_postTopicLink__wDe_p" href="/topics/art">
                <div className="color-white fontSize-12 fontWeight-400 noOfLines-undefined">
                  {toolData.Category}
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="flex direction-column mr-mobile-0 mr-desktop-2 mr-tablet-2 mr-widescreen-2 mt-2 mb-2 ml-mobile-2 ml-desktop-0 ml-tablet-0">
          <div className="flex direction-column align-center mt-3">
            
            <img
              alt="tech bible"
              className="follow_unfollow"
              src={
                toolData.LikedBy?.find((user) => user === currentUser?.uid)
                  ? process.env.PUBLIC_URL + "/assets/liked.png"
                  : process.env.PUBLIC_URL + "/assets/like.png"
              }
              onClick={() => {
                toolData.LikedBy?.find((user) => user === currentUser?.uid)
                  ? handleUnLikes(toolData.id)
                  : handleLikes(toolData.id);
              }}
            />
            <div className="color-white fontSize-12 fontWeight-600 noOfLines-undefined">
              {toolData.LikedBy?.length}
            </div>
            <span class="bi bi-plus-lg fw-bold text-white"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toolitem;
