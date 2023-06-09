import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../config/mongo";
import { AuthContext } from "../context/AuthContext";

const DiscussionReply = ({
  discussion,
  userInfo,
  Discussions,
  fetchDiscussions,
}) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [AddCommentClicked, setAddCommentClicked] = useState(false);
  const [userData, setUserData] = useState();
  const [reply, setReply] = useState();
  const { currentUser } = useContext(AuthContext);
  const [replies, setReplies] = useState();
  const getUserData = async () => {
    const res = await axios.get(`${BASE_URL}/check-user/${discussion.UserId}`);

    setUserData(res.data);
  };
  // const fetchReplies = () => {
  //   const Replies = Discussions?.filter(
  //     (disc) => disc?.ParentId === discussion?._id
  //   );
  //   setReplies(Replies);
  // };

  //Fetch Replies
  const fetchReplies = async () => {
    const response = await axios.get(`${BASE_URL}/discussions`);
    const data = response.data;

    // Sort the discussions by updatedAt field in descending order
    const sortedReplies = data.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
    sortedReplies = sortedReplies.filter(
      (reply) => reply.ParentId === discussion?._id
    );
    console.log();
    // Calculate the time difference in seconds, minutes, hours, days, or years for each comment and format it
    const repliesWithTimeAgo = sortedReplies.map((reply) => {
      const createdAt = new Date(reply.createdAt);
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
        ...reply,
        timeAgo: formattedTimeAgo,
      };
    });

    setReplies(repliesWithTimeAgo);
    console.log(repliesWithTimeAgo);
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

    const response = await axios.post(`${BASE_URL}/create-discussion`, {
      userId,
      title,
      description,
      category,
      parentId,
    });
    // Handle successful response
    // fetchDiscussions();
    console.log("Reply to discussion Created successfully:", response.data);
    setReply("");
    setAddCommentClicked(false);
    // fetchReplies();
  };

  useEffect(() => {
    getUserData();
    fetchReplies();
    console.log("Replies : " + replies);
  }, []);

  return (
    <div>
      <div className="flex flex-column items-center justify-center ">
        {" "}
        <div
          className={
            discussion?.ParentId === null
              ? "rounded-xl border p-5 shadow-md w-9/12 bg-black "
              : "rounded-xl  p-5 shadow-md w-9/12 bg-black "
          }
        >
          <div
            className={
              discussion?.ParentId === null
                ? "flex w-full items-center justify-between border-b pb-3"
                : "flex w-full items-center justify-between  pb-3"
            }
          >
            <div className="flex items-center space-x-3">
              <div>
                <img
                  className="h-7 w-7 rounded-full"
                  src={userData?.photo}
                  alt=""
                />
              </div>
              <div className="text-white text-lg font-bold text-slate-700">
                {userData?.username}
              </div>
            </div>
            <div className="flex items-center space-x-8">
              {!discussion?.ParentId && (
                <button className="text-black rounded-2xl border bg-neutral-100 px-3 py-1 text-xs font-semibold">
                  {discussion?.Category}
                </button>
              )}
              <div className="text-xs text-neutral-300">
                {discussion?.timeAgo}{" "}
              </div>
              <div className="relative">
                <button
                  id="dropdownComment1Button"
                  data-dropdown-toggle="dropdownComment1"
                  className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
                  } z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 absolute right-0`}
                >
                  <ul
                    className="py-1 text-sm text-black "
                    aria-labelledby="dropdownMenuIconHorizontalButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Edit
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Remove
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Report
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <!--End Dropdown menu --> */}
              </div>
            </div>
          </div>

          <div className="mt-4 mb-6">
            {discussion?.ParentId === null && (
              <div className="text-neutral-200 mb-3 text-xl font-bold">
                {discussion?.Title}
              </div>
            )}
            <div className="text-neutral-300 text-sm text-neutral-300">
              {discussion?.Description}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between text-slate-500">
              <div className="flex space-x-4 md:space-x-8">
                <div
                  onClick={() => {
                    setAddCommentClicked(!AddCommentClicked);
                  }}
                  className="flex cursor-pointer items-center transition text-neutral-300 hover:text-slate-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-1.5 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                  </svg>
                  <span>125</span>
                </div>
                <div className="flex cursor-pointer items-center transition hover:text-slate-600 text-neutral-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-1.5 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                    />
                  </svg>
                  <span>4</span>
                </div>
              </div>
            </div>
          </div>
          {AddCommentClicked && discussion?.ParentId === null && (
            <div class="mb-6 mt-6">
              <div class=" px-4 mb-4 bg-[#0D0C12] rounded-lg rounded-t-lg border border-gray-200">
                <label for="comment" class="sr-only">
                  Your comment
                </label>
                <textarea
                  // ref={inputCommentRef}
                  id="comment"
                  rows="6"
                  class="px-0 w-full text-sm text-gray-900 rounded-[8px] px-3 py-3 border-0 focus:ring-0 focus:outline-none text-white dark:text-white bg-[#27242E] "
                  placeholder="Write a comment..."
                  value={reply}
                  onChange={(e) => {
                    setReply(e.target.value);
                  }}
                ></textarea>
              </div>
              <button
                onClick={handleAddReply}
                class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-[#EF4823] rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
              >
                Post comment
              </button>
            </div>
          )}
        </div>
        {/* div2 */}
      </div>

      <div className="ml-[10%] mt-6 flex flex-column ">
        {/* {Discussions?.map((disc) => {
          console.log(
            "discussionId : " +
              discussion?._id +
              " childParentId : " +
              disc?.ParentId
          );
          if (disc?.ParentId === discussion?._id) {
            return (
              <DiscussionReply
                discussion={disc}
                userInfo={userInfo}
                replies={[]}
              />
            );
          }
        })} */}
        {replies?.map((reply) => (
          <DiscussionReply discussion={reply} replies={[]} />
        ))}
      </div>
    </div>
  );
};

export default DiscussionReply;
