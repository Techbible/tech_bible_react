import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { db } from "../../config/firebase";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../config/mongo";

const Post = ({ comment, toolData, replies, submitLabel, handleSubmit }) => {
  const [IsAddCommentClick, setIsAddCommentClick] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [isAddReplyEnabled, setIsAddReplyEnabled] = useState(true);
  const [currentReplies, setCurrentReplies] = useState(replies);
  const [showedReplies, setShowedReplies] = useState(3);

  const handleIsAddCommentClick = () => {
    setIsAddCommentClick(!IsAddCommentClick);
  };

  const { currentUser } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [id, setId] = useState("");

  const [isCommentLiked, setIsCommentLiked] = useState();
  const [simulatedLikesNumber, setSimulatedLikesNumber] = useState(
    comment?.likedBy?.length || 0
  );
  const [isDropdownVisible, setDropdownVisible] = useState("");

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
    setSimulatedLikesNumber((prevLikes) => prevLikes + 1);

    likeToolComment(toolCommentId);
  };
  const handleCommentUnLikes = async (toolCommentId) => {
    setIsCommentLiked(false);
    setSimulatedLikesNumber((prevLikes) => Math.max(prevLikes - 1, 0));

    unlikeToolComment(toolCommentId);
  };
  const handleDeleteComment = async () => {
    if (window.confirm("Are you sure that you want to delete your comment?")) {
      try {
        const res = await axios.delete(
          `${BASE_URL}/deleteToolComment/${comment?._id}`
        );
        const res2 = await axios.post(
          `${BASE_URL}/removeCommentIdFromTool/${comment?.toolId}/${comment?._id}`
        );

        window.location.reload();
      } catch (error) {
        console.log("DELETE TOOL COMMENGT ERROR : " + error);
      }
    }
  };

  const getUserInfo = async () => {
    try {
      // const userData = await onSnapshot(
      //   doc(db, "Users", comment.userId),
      //   (doc) => {
      //     setName(doc.data().username);
      //     setPhoto(doc.data().photo);
      //     setId(doc.data().uid)
      //   }
      // );
      const res = await axios.get(`${BASE_URL}/check-user/${comment.userId}`);
      setName(res.data.username);
      setPhoto(res.data.photo);
      setId(res.data.uid);
    } catch (error) {
      console.log("Error checking user credentials:", error);
    }
  };

  // const getCommentLikedBy = async () => {
  //   const response = axios.get(`${BASE_URL}/mongo-toolComments/${toolId}`);
  //   const comment = response.filter((comment) => comment._id === comment._id);
  //   setLikedBy(comment.likedBy);
  // };
  useEffect(() => {
    // setIsToolLiked(toolData?.LikedBy?.includes(currentUser?.uid) || false);
    setIsCommentLiked(comment?.likedBy?.includes(currentUser?.uid) || false);
    setSimulatedLikesNumber(comment?.likedBy?.length || 0);
  }, [comment, currentUser]);

  useEffect(() => {
    getUserInfo();
    // console.log(name);
    // console.log(photo);
  }, [comment.userId]);

  useEffect(() => {
    if (replyText === "") setIsAddReplyEnabled(false);
    else setIsAddReplyEnabled(true);
  }, [replyText]);

  // const getLikesNumber = async () => {
  //   const response = await axios.get(
  //     `${BASE_URL}/mongo-toolComments/${toolData._id}`
  //   );
  //   const data = response.data;
  //   const Comment = data?.filter(
  //     (toolComment) => toolComment._id === comment._id
  //   );
  //   const likesNumber = Comment?.likedBy?.length;
  //   console.log(Comment?.likedBy);
  //   setLikes(likesNumber);
  // };
  // useEffect(() => {
  //   getLikesNumber();
  // }, [isCommentLiked]);
  const fetchReplies = async () => {
    const response = await axios.get(
      `${BASE_URL}/mongo-toolComments/${toolData._id}`
    );
    const data = response.data;
    const replies = data.filter((reply) => reply.parentId === comment._id);
    // Sort the replies by createdAt field in descending order
    const sortedReplies = replies.sort((a, b) => {
      return new Date(a.createdAt) - new Date(b.createdAt);
    });
    const repliesWithTimeAgo = sortedReplies.map((comment) => {
      const createdAt = new Date(comment.createdAt);
      const currentDate = new Date();
      const timeDifferenceInSeconds = Math.floor(
        (currentDate - createdAt) / 1000
      );

      let formattedTimeAgo;
      if (timeDifferenceInSeconds < 1) {
        formattedTimeAgo = "Now";
      } else if (timeDifferenceInSeconds < 60) {
        formattedTimeAgo = `${timeDifferenceInSeconds}s ago`;
      } else if (timeDifferenceInSeconds < 3600) {
        const minutes = Math.floor(timeDifferenceInSeconds / 60);
        formattedTimeAgo = `${minutes}m ago`;
      } else if (timeDifferenceInSeconds < 86400) {
        const hours = Math.floor(timeDifferenceInSeconds / 3600);
        formattedTimeAgo = `${hours}h ago`;
      } else if (timeDifferenceInSeconds < 31536000) {
        const days = Math.floor(timeDifferenceInSeconds / 86400);
        formattedTimeAgo = `${days}d ago`;
      } else {
        const years = Math.floor(timeDifferenceInSeconds / 31536000);
        formattedTimeAgo = `${years}y ago`;
      }

      return {
        ...comment,
        timeAgo: formattedTimeAgo,
      };
    });
    setCurrentReplies(repliesWithTimeAgo);
  };
  const [replyAdded, setReplyAdded] = useState(false);
  const addReply = () => {
    handleSubmit(replyText, comment._id);
    setReplyText("");
    fetchReplies();
    setReplyAdded(!replyAdded);
  };

  useEffect(() => {
    console.log("replies fetched");
    fetchReplies();
  }, [replyAdded]);

  return (
    <div className="post">
      <div
        className={
          comment?.parentId === "null"
            ? "max-w-[632px] px-5 my-4 py-6 bg-[#18151D] rounded-lg shadow-md flex flex-row"
            : "max-w-[500px] px-5 my-4 py-[0px] bg-[#18151D] rounded-lg shadow-md flex flex-row mb-6"
        }
      >
        <div>
          <div
            className={
              comment?.parentId === "null"
                ? "w-8 h-8 rounded-full overflow-hidden mr-[1rem]"
                : "w-6 h-6 rounded-full overflow-hidden mr-[1rem]"
            }
          >
            <Link to={`/UserProfile/${id}`}>
              <img
                className="w-full h-full object-cover rounded-full"
                // src="https://wallpapers.com/images/featured/87h46gcobjl5e4xu.jpg"
                src={photo}
              />
            </Link>
          </div>
        </div>

        <div className="flex flex-column">
          <div className="flex flex-wrap sm:flex-no-wrap w-full max-w-[600px]">
            {/* <div className="text-white text-base sm:text-lg">User78-&nbsp;</div> */}
            <div
              className={
                comment?.parentId === "null"
                  ? "text-white text-base sm:text-lg"
                  : "text-white light text-[14px]"
              }
            >
              <Link to={`/UserProfile/${id}`} className="text-[14px]">
                {name}&nbsp;
              </Link>
            </div>
            <div className="flex flex-row  mt-1 sm:mt-2">
              {comment.parentId === "null" ? (
                <div className="text-gray-300 text-[10px] sm:text-sm">
                  -Posted in-&nbsp;{toolData?.Category} &nbsp;-&nbsp;{" "}
                  {toolData?.Name} &nbsp;-&nbsp;{comment.timeAgo}
                </div>
              ) : (
                <div className="text-gray-300 text-[12px]">
                  {"-" + comment.timeAgo}
                </div>
              )}
            </div>
            {comment?.userId === currentUser?.uid && (
              <div className="relative">
                <button
                  id="dropdownComment1Button"
                  data-dropdown-toggle="dropdownComment1"
                  className="inline-flex items-center p-2 text-sm font-medium text-center text-white  ml-4 rounded-lg  "
                  type="button"
                  onClick={() => setDropdownVisible(!isDropdownVisible)}
                >
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
                  </svg>
                  <span className="sr-only">Comment settings</span>
                </button>

                {/* <!-- Dropdown menu --> */}
                <div
                  id="dropdownComment1"
                  className={`${
                    isDropdownVisible ? "block" : "hidden"
                  } z-10 w15 bg-[#1c1c1c] rounded divide-y divide-gray-100 shadow  absolute right-0`}
                >
                  <ul
                    className="py-1 text-sm text-white "
                    aria-labelledby="dropdownMenuIconHorizontalButton"
                  >
                    <li>
                      <div
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                        // onClick={handleEdditDiscussion}
                      >
                        Edit
                      </div>
                    </li>
                    <li>
                      <div
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                        onClick={handleDeleteComment}
                      >
                        Delete
                      </div>
                    </li>
                  </ul>
                </div>
                {/* <!--End Dropdown menu --> */}
              </div>
            )}
          </div>

          {/* <div className="flex justify-between items-center">
            <span className="text-white text-[15px] mt-1 font-bold">
              {commentText}
            </span>
          </div> */}
          <div className="mt-2">
            <p className="flex mt-2 text-gray-300 text-[15px] font-sans max-w-[452px]">
              {comment.text}
            </p>
          </div>

          <div className="flex flex-row justify-between mt-4">
            {/* <div></div> */}
            <div className="flex flex-row gap-2">
              {isCommentLiked ? (
                <i
                  onClick={() => {
                    handleCommentUnLikes(comment._id);
                  }}
                  className="text-red-500 fas fa-heart text-[20px]"
                ></i>
              ) : (
                <i
                  onClick={() => {
                    handleCommentLikes(comment._id);
                  }}
                  className="text-white border-white text-[20px] far fa-heart"
                ></i>
              )}
              <div className="text-[14px]">{simulatedLikesNumber}</div>
              {comment?.parentId === "null" && (
                <>
                  <button
                    onClick={handleIsAddCommentClick}
                    className=" bi bi-chat-left-dots text-[18px] hover:text-[19px] active:text-[18px]"
                  ></button>
                  {currentReplies === 0 ? (
                    <div className="text-[12px]">Comments</div>
                  ) : (
                    <div className="text-[12px]">
                      {currentReplies.length} Comments
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
          {IsAddCommentClick ? (
            <div>
              {replies?.length > 0 && (
                <div>
                  <div className="h-[30px] opacity-[.9] w-[1.5px] bg-white ml-[5.8vh] mt-1 "></div>
                  <div className="replies ml-[2vh]">
                    {currentReplies
                      ?.slice(0, showedReplies)
                      .map((reply, index) => (
                        <Post
                          key={index}
                          comment={reply}
                          toolData={toolData}
                          replies={[]}
                        />
                      ))}
                  </div>
                  <div
                    className="text-12 light cursor-pointer"
                    onClick={() => setShowedReplies(showedReplies + 2)}
                  >
                    {showedReplies === 0 ? (
                      <u>Show replies...</u>
                    ) : (
                      <>
                        {currentReplies?.length - showedReplies > 0 && (
                          <u>
                            Show {currentReplies?.length - showedReplies} more
                            replies...
                          </u>
                        )}
                      </>
                    )}
                  </div>
                </div>
              )}

              <div className="flex flex-row align-items-center gap-2 ">
                <div className="py-3">
                  <input
                    type="text"
                    className="flex flex-wrap text-black  rounded-[4px] px-[10px] py-[5px] "
                    placeholder="Add your reply"
                    onChange={(e) => setReplyText(e.target.value)}
                    value={replyText}
                  />
                </div>
                <button onClick={isAddReplyEnabled ? addReply : null}>
                  <svg
                    className={
                      isAddReplyEnabled
                        ? "h-5 w-5 hover:h-6 hover:w-6 text-orange-500"
                        : "h-5 w-5 hover:h-6 hover:w-6 text-gray-500"
                    }
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    {" "}
                    <path stroke="none" d="M0 0h24v24H0z" />{" "}
                    <line x1="10" y1="14" x2="21" y2="3" />{" "}
                    <path d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3" />
                  </svg>
                </button>
              </div>
            </div>
          ) : (
            <div></div>
          )}

          {/* REPLIES  */}

          {/* END REPLIES  */}
        </div>
      </div>
    </div>
  );
};

export default Post;
