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

function Community() {
  const [isOpen, setIsOpen] = useState(false);
  const [Users, setUsers] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const usersRef = collection(db, "Users");

    const getUsers = async () => {
      try {
        const querySnapshot = await getDocs(usersRef);
        const usersData = [];
        querySnapshot.forEach((doc) => {
          usersData.push(doc.data());
        });
        setUsers(usersData);
        console.log(usersData);
      } catch (error) {
        console.error(error);
      }
    };

    getUsers();
  }, []);

  return (
    <div className="mt-desktop-10 mt-mobile-8 mt-tablet-8 mt-widescreen-10 layoutContainer ">
      <main className="layoutMain">
        <div className="flex flex-col mb-12 p-5 text-white">
          <p className="text-lg font-bold mb-2">Discussions</p>
          <p className="text-base">
            Ask questions, find support, and connect with the community
          </p>
        </div>
        <div className="flex direction-column">
          <div className="flex direction-row">
            <p className="mr-3 hover:cursor-pointer hover:font-bold">New </p>
            <p className="mr-3 hover:cursor-pointer hover:font-bold">
              Popular{" "}
            </p>

            <div className="flex direction-row">
              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                onClick={toggleDropdown}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-0.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                Filter Date
                <svg
                  className={`w-4 h-4 ml-2 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isOpen && (
                <div
                  id="dropdown"
                  className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                >
                  <ul
                    className="py-2 text-sm text-black dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Now
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Week
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Month
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Year
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        All
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <form className="ml-3 mx-auto max-w-lg">
              <label
                for="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-1 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search discussions"
                  required
                />
              </div>
            </form>
          </div>

          <div>
            {Users &&
              Users?.map((user) => (
                <Link to={`/profile/${user.username}`}>
                  <Comment User={user} />
                </Link>
              ))}
          </div>
        </div>
      </main>

      <aside className="sidebarWithSeparator right">
        <p>TOPICS </p>
        <Topic />
        <Topic />
        <Topic />

        <aside className="sidebarWithSeparator bottom">
          <p>NEW DISCUSSIONS</p>
          <Discussion />
          <Discussion />
          <Discussion />
        </aside>
      </aside>
    </div>
  );
}

export default Community;
