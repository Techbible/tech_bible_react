import React, { useState } from "react";
import { Link } from "react-router-dom";

const DiscussionReply = ({ discussion, userInfo }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  return (
    <div className="flex items-center justify-center ">
      {" "}
      <div className="rounded-xl border p-5 shadow-md w-9/12 bg-black ">
        <div className="flex w-full items-center justify-between border-b pb-3">
          <div className="flex items-center space-x-3">
            <div>
              <img
                className="h-7 w-7 rounded-full"
                src={userInfo?.photo}
                alt=""
              />
            </div>
            <div className="text-white text-lg font-bold text-slate-700">
              {userInfo?.username}
            </div>
          </div>
          <div className="flex items-center space-x-8">
            <button className="text-black rounded-2xl border bg-neutral-100 px-3 py-1 text-xs font-semibold">
              {discussion?.Category}
            </button>
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
          <div className="text-neutral-200 mb-3 text-xl font-bold">
            {discussion?.Title}
          </div>
          <div className="text-neutral-300 text-sm text-neutral-600">
            {discussion?.Description}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between text-slate-500">
            <div className="flex space-x-4 md:space-x-8">
              <div className="flex cursor-pointer items-center transition text-neutral-300 hover:text-slate-600">
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
      </div>
    </div>
  );
};

export default DiscussionReply;
