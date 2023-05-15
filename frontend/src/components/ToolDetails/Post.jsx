import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { db } from "../../config/firebase";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { BASE_URL } from "../../config/mongo";

const Post = ({
  commentId,
  likedBy,
  commentText,
  commentUser,
  toolName,
  toolCategory,
  timeAgo,
}) => {
  const [IsAddCommentClick, setIsAddCommentClick] = useState(false);

  const handleIsAddCommentClick = () => {
    setIsAddCommentClick(!IsAddCommentClick);
  };

  const { currentUser } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");

  const [isCommentLiked, setIsCommentLiked] = useState(false);

  const likeToolComment = async (toolCommentId) => {
    const response = await axios.post(
      `${BASE_URL}/likeToolComment/${toolCommentId}/${currentUser?.uid}`
    );
  };
  const unlikeToolComment = async (toolCommentId) => {
    const response = await axios.post(
      `${BASE_URL}/unlikeToolComment/${toolCommentId}/${currentUser?.uid}`
    );
  };

  const handleCommentLikes = async (toolCommentId) => {
    setIsCommentLiked(true);
    likeToolComment(toolCommentId);
  };
  const handleCommentUnLikes = async (toolCommentId) => {
    setIsCommentLiked(false);
    unlikeToolComment(toolCommentId);
  };

  const getUserInfo = async () => {
    try {
      const userData = await onSnapshot(
        doc(db, "Users", commentUser),
        (doc) => {
          setName(doc.data().username);
          setPhoto(doc.data().photo);
        }
      );
    } catch (error) {
      console.log("Error checking user credentials:", error);
    }
  };

  useEffect(() => {
    console.log(typeof likedBy);
  }, []);

  useEffect(() => {
    getUserInfo();
    console.log(name);
    console.log(photo);
  }, [commentUser]);

  return (
    <div className="post">
      <div className="max-w-[632px] px-5 my-4 py-6 bg-[#18151D] rounded-lg shadow-md flex flex-row">
        <div>
          <div className="w-10 h-10 rounded-full overflow-hidden mr-[1rem]">
            <img
              className="w-full h-full object-cover rounded-full"
              // src="https://wallpapers.com/images/featured/87h46gcobjl5e4xu.jpg"
              src={photo}
              alt="Profile picture"
            />
          </div>
        </div>

        <div className="flex flex-column">
          <div className="flex flex-wrap sm:flex-no-wrap w-full max-w-[600px]">
            {/* <div className="text-white text-base sm:text-lg">User78-&nbsp;</div> */}
            <div className="text-white text-base sm:text-lg">{name}-&nbsp;</div>
            <div className="flex flex-row mt-1 sm:mt-2">
              <div className="text-gray-300 text-xs sm:text-sm">
                Posted in-&nbsp;{toolCategory} &nbsp;-&nbsp; {toolName}{" "}
                &nbsp;-&nbsp;{timeAgo}
              </div>
            </div>
          </div>

          {/* <div className="flex justify-between items-center">
            <span className="text-white text-[15px] mt-1 font-bold">
              {commentText}
            </span>
          </div> */}
          <div className="mt-2">
            <p className="flex mt-2 text-gray-300 text-[15px] font-sans max-w-[452px]">
              {commentText}
            </p>
          </div>

          <div className="flex flex-row justify-between mt-4">
            {/* <div></div> */}
            <div className="flex flex-row gap-2">
              {/* To See the Like Methods  */}
              {/* <img
                  alt="tech bible"
                  className="follow-unfollow w-[30px] transition duration-300 hover:w-[32px] "
                  src={
                    // toolData.LikedBy?.find((user) => user === currentUser?.uid)
                    // toolData.LikedBy?.includes(currentUser?.uid)
                    //   ? process.env.PUBLIC_URL + "/assets/liked.png"
                    //   : process.env.PUBLIC_URL + "/assets/like.png"
                    isToolLiked
                      ? process.env.PUBLIC_URL + "/assets/liked.png"
                      : process.env.PUBLIC_URL + "/assets/like.png"
                  }
                  onClick={() => {
                    toolData.LikedBy?.find((user) => user === currentUser?.uid)
                      ? // toolData.LikedBy?.includes(currentUser.uid)
                        handleUnLikes(toolData._id)
                      : handleLikes(toolData._id);
                  }}
                /> */}
              {/* {isCommentLiked ? ( */}
              <i
                // onClick={handleCommentUnLikes(commentId)}
                className="text-red-500 fas fa-heart text-[25px]"
              ></i>
              {/* ) : ( */}
              {/* <i
                  onClick={handleCommentLikes(commentId)}
                  className="text-white border-white text-[25px] far fa-heart"
                ></i> */}
              {/* )} */}

              <div className="text-[14px]">23</div>
              {/* <button
                onClick={handleIsAddCommentClick}
                className=" bi bi-chat-left-dots text-[18px] hover:text-[19px] active:text-[18px]"
              ></button>
              <div className="text-[14px]">10</div> */}
            </div>
          </div>
          {IsAddCommentClick ? (
            <div className="flex justify-content-center py-3">
              <input
                type="text"
                className="text-black lg:w-[451px] lg:h-[36px] md:w-[300px] md:h-[26px] rounded-[4px] px-[10px] py-[5px] "
                placeholder="Add comment"
              />
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Post;
