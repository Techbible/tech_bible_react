import React, { useState } from "react";
import "../assets/styles/community/community.css";
import "../assets/styles/home/global.css";
import Comment from "../components/Community/Comment";
import Topic from "../components/Community/Topic";
import Discussion from "../components/Community/Discussion";
import { useEffect } from "react";
import { collection, doc, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../config/firebase";
import { Link } from "react-router-dom";
import { CategoriesData } from "../dataJson/CategoriesData";
import axios from "axios";
import { BASE_URL } from "../config/mongo";
import DiscussionsPage from "../components/Community/DiscussionsPage";
import DiscussionReply from "./DiscussionReply";

function Community() {
  const [isOpen, setIsOpen] = useState(false);
  const [Discussions, setDiscussions] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [isRepliesClicked, setIsRepliesClicked] = useState(false);
  const [discussion, setDiscussion] = useState();
  const [userInfo, setUserInfo] = useState();
  const [replies, setReplies] = useState();

  //Fetch Disscutions
  const fetchDiscussions = async () => {
    const response = await axios.get(`${BASE_URL}/discussions`);
    const data = response.data;

    // Sort the discussions by updatedAt field in descending order
    const sortedDiscussions = data.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

   

    // Calculate the time difference in seconds, minutes, hours, days, or years for each comment and format it
    const discussionsWithTimeAgo = sortedDiscussions.map((discussion) => {
      const createdAt = new Date(discussion.createdAt);
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
        ...discussion,
        timeAgo: formattedTimeAgo,
      };
    });

    setDiscussions(discussionsWithTimeAgo);
    console.log(discussionsWithTimeAgo);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {

    fetchDiscussions();
  }, [selectedFilter]);

  return (
    <div>
      {!isRepliesClicked ? (
        <DiscussionsPage
          toggleDropdown={toggleDropdown}
          isOpen={isOpen}
          Discussions={Discussions}
          discussion={discussion}
          CategoriesData={CategoriesData}
          setDiscussion={setDiscussion}
          setIsRepliesClicked={setIsRepliesClicked}
          setUserInfo={setUserInfo}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
          setReplies={setReplies}
        />
      ) : (
        <div>
          {isRepliesClicked && (
            <div
              onClick={() => {
                setIsRepliesClicked(false);
              }}
              className="flex flex-row ml-6 mb-6 mt-14 gap-2 transition duration-250 text-[18px] hover:tracking-[.3px] cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                />
              </svg>

              <div>Back to discussions</div>
            </div>
          )}

          <DiscussionReply
            discussion={discussion}
            userInfo={userInfo}
            replies={replies}
            Discussions={Discussions}
          />
        </div>
      )}
    </div>
  );
}

export default Community;
