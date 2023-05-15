import React from "react";
import { useState, useEffect } from "react";
import { db } from "../../config/firebase";
import { doc, getDoc, onSnapshot } from "firebase/firestore";

const Post = ({
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

  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");

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
              <i className="text-red-500 fas fa-heart text-[25px]"></i>
              <div className="text-[14px]">23</div>
              <button
                onClick={handleIsAddCommentClick}
                className=" bi bi-chat-left-dots text-[18px] hover:text-[19px] active:text-[18px]"
              ></button>
              <div className="text-[14px]">10</div>
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
