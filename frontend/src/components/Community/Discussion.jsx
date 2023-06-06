import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../config/mongo";

const Discussion = ({
  discussion,
  setDiscussion,
  setIsRepliesClicked,
  setUserInfo,
}) => {
  const [userData, setUserData] = useState();
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const getUserData = async () => {
    const res = await axios.get(`${BASE_URL}/check-user/${discussion.UserId}`);

    setUserData(res.data);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div>
      <article className="p-6 mb-6 text-white bg-[#1c1c1c] rounded-lg ">
        <footer className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <div className="flex items-center">
              <img
                className="mr-2 w-6 h-6 rounded-full"
                src={userData?.photo}
                alt={userData?.username}
              />
              <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                <p className="text-white">{userData?.username} </p>
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <time pubdate datetime="2022-02-08" title="February 8th, 2022">
                  {discussion?.timeAgo}
                </time>
              </p>
            </div>
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
        </footer>

        <div className="flex flex-column"></div>
        <p className="text-white fontWeight-500 ">{discussion?.Title}</p>
        <p className="text-white">{discussion?.Description}</p>
        <div className="flex items-center mt-4 space-x-4">
          <button
            type="button"
            className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400"
            onClick={() => {
              setDiscussion(discussion);
              setIsRepliesClicked(true);
              setUserInfo(userData);
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
            Reply
          </button>
          {/* <!-- Up/down vote --> */}
          <button className="p-2 border rounded-full hover:bg-white hover:text-black ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-2 w-2  hover:text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                strokeWidth="2"
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
          <div className="color-white fontSize-12 fontWeight-400 noOfLines-undefined">
            42
          </div>
          <button className="p-2 border rounded-full hover:bg-gray-100 hover:text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-2 w-2 text-current hover:text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {/* <!--End Up/down vote --> */}
        </div>
      </article>
    </div>
  );
};

export default Discussion;
