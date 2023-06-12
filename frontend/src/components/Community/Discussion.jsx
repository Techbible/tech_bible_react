import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { BASE_URL } from "../../config/mongo";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import UserInDiscussion from "./UserInDiscussion";
import ProfilePhoto from "../ProfilePhoto";

const Discussion = ({
  discussion,
  Discussions,
  setUserDiscussionData,
  setShowUserAside,
  setCategoryOfDiscussion,
}) => {
  const [userData, setUserData] = useState();
  const [upvoteClicked, setUpvoteClicked] = useState(false);
  const [downvoteClicked, setDownvoteClicked] = useState(false);
  const [voteDifference, setVoteDifference] = useState(
    discussion?.LikedBy.length - discussion?.DislikedBy.length || 0
  ); // State variable for vote difference

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const [replies, setReplies] = useState();
  const [showReplies, setShowReplies] = useState(false);
  const [AddReply, setAddReply] = useState(false);
  const [reply, setReply] = useState("");
  const [isEdditDiscussionClicked, setIsEdditDiscussionClicked] =
    useState(false);
  const [edditedTitle, setEdditedTitle] = useState(discussion?.Title);
  const [edditedDescription, setEdditedDescription] = useState(
    discussion?.Description
  );
  const { currentUser, currentUserData } = useContext(AuthContext);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const userCardStyle = {
    display: isHovered ? "block" : "none",
  };

  const fetchReplies = async () => {
    const response = await axios.get(`${BASE_URL}/discussions`);
    const data = response.data;
    const Replies = data?.filter((dis) => dis?.ParentId === discussion?._id);
    setReplies(Replies);
  };

  const handleAddReply = async () => {
    const userId = currentUser?.uid;
    const title = "";
    const description = reply;
    const category = "";
    const parentId = discussion?._id;
    console.log(
      "userId : " +
        userId +
        "title : " +
        title +
        "description : " +
        description +
        "parentId : " +
        parentId
    );
    try {
      const response = await axios.post(`${BASE_URL}/create-discussion`, {
        userId,
        title,
        description,
        category,
        parentId,
      });
      console.log("Reply to discussion Created successfully:", response.data);
    } catch (error) {
      console.log("Erreur create disc" + error);
    }
    // Handle successful response
    // fetchDiscussions();
    fetchReplies();
    setReply("");
    // setAddReply(false);
  };
  const handleVoteNumber = async () => {
    if (upvoteClicked) {
      try {
        const res = await axios.post(
          `${BASE_URL}/addUpvote/${discussion._id}/${currentUser?.uid}`
        );
        console.log("Upvote added  Succesfuly");
      } catch (e) {
        console.log("Upvote add ERROR " + e);
      }
    } else {
      try {
        const res = await axios.post(
          `${BASE_URL}/removeUpvote/${discussion._id}/${currentUser?.uid}`
        );
        console.log("Upvote removed  Succesfuly");
      } catch (e) {
        console.log("Upvote remove ERROR " + e);
      }
    }

    if (downvoteClicked) {
      try {
        const res = await axios.post(
          `${BASE_URL}/addDownvote/${discussion._id}/${currentUser?.uid}`
        );
        console.log("dwonvote added  Succesfuly");
      } catch (e) {
        console.log("downvote add ERROR " + e);
      }
    } else {
      try {
        const res = await axios.post(
          `${BASE_URL}/removeDownvote/${discussion._id}/${currentUser?.uid}`
        );
        console.log("dwonvote removed  Succesfuly");
      } catch (e) {
        console.log("downvote remove ERROR " + e);
      }
    }
  };

  const handleUpvoteClick = async () => {
    if (upvoteClicked) {
      setDownvoteClicked(false);
      setVoteDifference((prevDifference) => prevDifference - 1);
    } else {
      if (downvoteClicked) {
        try {
          const res = await axios.post(
            `${BASE_URL}/removeDownvote/${discussion._id}/${currentUser?.uid}`
          );
          console.log("Downvote removed successfully");
        } catch (e) {
          console.log("Downvote remove ERROR " + e);
        }
        setDownvoteClicked(false);
        setVoteDifference((prevDifference) => prevDifference + 2);
      } else {
        setVoteDifference((prevDifference) => prevDifference + 1);
      }
    }
    setUpvoteClicked(!upvoteClicked);
  };

  const handleDownvoteClick = async () => {
    if (downvoteClicked) {
      setUpvoteClicked(false);
      setVoteDifference((prevDifference) => prevDifference + 1);
    } else {
      if (upvoteClicked) {
        setUpvoteClicked(false);
        setVoteDifference((prevDifference) => prevDifference - 2);
      } else {
        setVoteDifference((prevDifference) => prevDifference - 1);
      }
    }
    setDownvoteClicked(!downvoteClicked);
  };

  const getUserData = async () => {
    const res = await axios.get(`${BASE_URL}/check-user/${discussion.UserId}`);

    setUserData(res.data);
  };

  useEffect(() => {
    setUpvoteClicked(discussion?.LikedBy?.includes(currentUser?.uid) || false);
    setDownvoteClicked(
      discussion?.DislikedBy?.includes(currentUser?.uid) || false
    );
    setVoteDifference(
      discussion?.LikedBy.length - discussion?.DislikedBy.length || 0
    );
  }, [discussion, currentUser]);

  useEffect(() => {
    handleVoteNumber();
  }, [upvoteClicked, downvoteClicked]);

  useEffect(() => {
    console.log("DISCUSSIONS : " + JSON.stringify(Discussions));
    console.log("REPLIES : " + JSON.stringify(replies));
    getUserData();
    fetchReplies();
    const Replies = Discussions?.filter(
      (disc) => disc?.ParentId === discussion?.ParentId
    );
    setReplies(Replies);
  }, []);

  const handleRemoveDiscussion = async () => {
    if (discussion?.ParentId === null) {
      if (
        window.confirm("Are you sure that you want to delete this dicussion?")
      ) {
        try {
          //delete discussion + their replies
          const response = await axios.delete(
            `${BASE_URL}/deleteDiscussion/${discussion?._id}`
          );
          const res = await axios.delete(
            `${BASE_URL}/deleteReplies/${discussion?._id}`
          );
          console.log("Discussion deleted succesfuly");
          window.location.reload();
        } catch (error) {
          console.log("Delete Discussion error : " + error);
        }
      }
    }
    if (discussion?.ParentId !== null) {
      if (window.confirm("Are you sure that you want to delete your reply?")) {
        try {
          //delete reply
          const response = await axios.delete(
            `${BASE_URL}/deleteDiscussion/${discussion?._id}`
          );
          window.location.reload();

          console.log("reply deleted succesfuly");
          fetchReplies();
        } catch (error) {
          console.log("Delete reply error : " + error);
        }
      }
    }
  };

  const handleEdditDiscussion = () => {
    setIsEdditDiscussionClicked(true);
    setEdditedTitle(discussion?.Title);
    setEdditedDescription(discussion?.Description);
  };

  const edditDiscussion = async () => {
    console.log(
      "DISCUSSION EDDITED : " +
        discussion?._id +
        " " +
        edditedTitle +
        " " +
        edditedDescription
    );
    if (discussion?.ParentId === null) {
      try {
        const res = await axios.post(
          `${BASE_URL}/updateDiscussion/${discussion?._id}/${edditedTitle}/${edditedDescription}`
        );
        console.log("discussion updated succesfuly");
        setIsEdditDiscussionClicked(false);
        // window.location.reload();
        alert("Confirm to edit your discussion.");
      } catch (error) {
        console.log("Update discussion error : " + error);
      }
    } else {
      try {
        const res = await axios.post(
          `${BASE_URL}/updateDiscussion/${
            discussion?._id
          }/${"0"}/${edditedDescription}`
        );
        console.log("discussion updated succesfuly");
        setIsEdditDiscussionClicked(false);
        // window.location.reload();
        alert("Confirm to edit your reply.");
      } catch (error) {
        console.log("Update discussion error : " + error);
      }
    }
  };

  return (
    <div>
      <div>
        <article
          className={
            discussion?.ParentId === null
              ? "p-6 mb-4 text-white  rounded-lg border-1 border-white "
              : "p-6 mb-2 text-white"
          }
        >
          <footer className="flex justify-between items-center">
            <div className="flex flex-row items-center">
              <div className="flex flex-row align-items-center">
                <div
                  className="relative "
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link to={`/UserProfile/${userData?.uid}`}>
                    {discussion?.ParentId === null ? (
                      <ProfilePhoto url={userData?.photo} size={12} />
                    ) : (
                      <ProfilePhoto url={userData?.photo} size={8} />
                    )}
                    {/* <div>
                      <img
                        className={
                          discussion?.ParentId === null
                            ? "mr-2 w-12 h-12 rounded-full"
                            : "mr-2 w-8 h-8 rounded-full"
                        }
                        src={userData?.photo}
                        alt={userData?.username}
                      />
                    </div> */}
                  </Link>
                  <div
                    className="absolute z-[999] w-[300px] top-[-120px] left-[20px]"
                    style={userCardStyle}
                  >
                    <UserInDiscussion
                      userDiscussionData={userData}
                      categoryOfDiscussion={discussion?.Category}
                    />
                  </div>
                </div>
                <div
                  className="cursor-pointer"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                    <p className="text-white">{userData?.username} </p>
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <time>{discussion?.timeAgo}</time>
                  </p>
                </div>
              </div>
              {discussion?.ParentId === null && (
                <div className="text-[12px] text-black bg-white px-[4px]  ml-14 py-[2px] rounded-md   ">
                  {discussion?.Category}
                </div>
              )}
            </div>
            {discussion?.UserId === currentUser?.uid ||
              (currentUserData?.isAdmin === true && (
                <div className="relative">
                  <button
                    id="dropdownComment1Button"
                    data-dropdown-toggle="dropdownComment1"
                    className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-[#1C1C1C] rounded-lg hover:bg-white focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-white dark:focus:ring-gray-600"
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
                          onClick={handleEdditDiscussion}
                        >
                          Edit
                        </div>
                      </li>
                      <li>
                        <div
                          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                          onClick={handleRemoveDiscussion}
                        >
                          Delete
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* <!--End Dropdown menu --> */}
                </div>
              ))}
          </footer>

          <div className="flex flex-column align-items-center my-1 ">
            {/* <div
              className={
                discussion?.ParentId === null &&
                "w-[70%] h-[.5px] opacity-[.6] bg-white "
              }
            ></div> */}
          </div>
          <div
            className={
              discussion?.ParentId === null ? "pl-14 ml-4 " : "pl-14 ml-4"
            }
            style={{
              borderLeft:
                discussion?.ParentId !== null ? "2px solid orange" : "none",
              borderImage:
                discussion?.ParentId !== null
                  ? "linear-gradient(to bottom, white, white, black) 1"
                  : "none",
            }}
          >
            <div className="flex flex-column"></div>
            <div className="">
              {isEdditDiscussionClicked ? (
                <div>
                  {discussion?.ParentId === null && (
                    <textarea
                      className="text-white rounded-md"
                      type="text"
                      value={edditedTitle}
                      onChange={(e) => {
                        setEdditedTitle(e.target.value);
                      }}
                    />
                  )}
                  <textarea
                    className="text-white rounded-md"
                    type="text"
                    value={edditedDescription}
                    onChange={(e) => {
                      setEdditedDescription(e.target.value);
                    }}
                  />
                  <div className="flex flex-row">
                    <div
                      className="bg-white rounded-md text-black px-2 py-[2px] mr-2 cursor-pointer "
                      onClick={() => setIsEdditDiscussionClicked(false)}
                    >
                      Cancel
                    </div>
                    <div
                      onClick={edditDiscussion}
                      className="bg-[#EF4823] rounded-md px-2 py-[2px] text-white cursor-pointer "
                    >
                      Submit
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  {!discussion?.ParentId && (
                    <p className="text-white fontWeight-500 opacity-[.9] text-[16px] mb-4">
                      {/* {discussion?.Title} */}
                      {edditedTitle}
                    </p>
                  )}
                  <p className="text-white text-sm opacity-[.8] ">
                    {/* {discussion?.Description} */}
                    {edditedDescription}
                  </p>
                </div>
              )}
            </div>
            <div className="flex items-center mt-4 space-x-4">
              <button
                type="button"
                className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400"
                onClick={() => {
                  setShowReplies(!showReplies);
                  if (discussion?.ParentId === null) {
                    setUserDiscussionData(userData);
                    setShowUserAside(true);
                    setCategoryOfDiscussion(discussion?.Category);
                  }
                }}
              >
                <svg
                  aria-hidden="true"
                  className="mr-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  ></path>
                </svg>
                Replies
              </button>
              {/* <!-- Up/down vote --> */}
              {/*upvote*/}
              <button
                className={`p-2 border rounded-full ${
                  upvoteClicked
                    ? "bg-white text-black"
                    : "hover:bg-white hover:text-black"
                }`}
                onClick={handleUpvoteClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-2 w-2 hover:text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </button>
              <div className="color-white fontSize-12 fontWeight-400 noOfLines-undefined">
                {voteDifference}
              </div>
              {/* downvote */}
              <button
                className={`p-2 border rounded-full ${
                  downvoteClicked
                    ? "bg-white text-black"
                    : "hover:bg-gray-100 hover:text-black"
                }`}
                onClick={handleDownvoteClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-2 w-2 text-current hover:text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {/* <!--End Up/down vote --> */}
            </div>
          </div>
        </article>
      </div>
      {showReplies && (
        <div className={discussion?.ParentId === null && "ml-8"}>
          {replies?.map((reply) => (
            <Discussion discussion={reply} Discussions={Discussions} />
          ))}
          {discussion?.ParentId === null && (
            <div class="mb-10">
              <input
                type="text"
                id="comment"
                rows="6"
                class="px-0 w-[60%] mr-2 text-sm text-black rounded-[8px] max-h-[30px] px-3 py-3 border-0 focus:ring-0 focus:outline-none   bg-white "
                placeholder="Reply..."
                value={reply}
                onChange={(e) => {
                  setReply(e.target.value);
                }}
              />

              <button
                onClick={handleAddReply}
                class="inline-flex items-center mt-2 py-2 px-4 text-xs font-medium text-center text-white bg-[#EF4823] rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
              >
                Post reply
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Discussion;
