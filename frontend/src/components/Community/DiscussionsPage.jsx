import React from "react";
import { Link } from "react-router-dom";
import Discussion from "./Discussion";

const DiscussionsPage = ({
  toggleDropdown,
  isOpen,
  Discussions,

  CategoriesData,

  selectedFilter,
  setSelectedFilter,

  fetchDiscussions,
}) => {
  return (
    <div>
      <div className="mt-desktop-10 mt-mobile-8 mt-tablet-8 mt-widescreen-10 toolDetailLayoutContainer ">
        <main className="layoutMain">
          <div className="flex flex-col mb-12 p-5 text-white">
            <p className="text-lg font-bold mb-2">Discussions</p>
            <p className="text-base">
              Ask questions, find support, and connect with the community
            </p>

            <button className="light text-[14px] border-[1px] px-[8px] py-[1px] rounded-[5px] mt-2 mb-2 mx-auto bg-black hover:bg-gray-900 mt-10 ml-0">
              <Link to="/create-discussion">Create New Discussion</Link>
            </button>
          </div>

          <div className="flex direction-column ">
            <form className="ml-3 mx-auto max-w-lg left-0 mb-6">
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
                  autoComplete="off"
                  type="search"
                  id="default-search"
                  className="block w-full p-1 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search discussions"
                  required
                />
              </div>
            </form>
            <div className="flex direction-row">
              <p className="mr-3 hover:cursor-pointer hover:font-bold">New </p>
              <p className="mr-3 hover:cursor-pointer hover:font-bold">
                Popular{" "}
              </p>

              <div className="flex direction-column mb-20">
                <button
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="dropdown"
                  onClick={toggleDropdown}
                  className="text-white bg-[#ef4722] focus:ring-4 focus:outline-none focus:ring-orange-500 font-medium rounded-lg text-sm px-3 py-0.5 text-center inline-flex items-center "
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
                      className="py-2 text-sm text-black "
                      aria-labelledby="dropdownDefaultButton"
                    >
                      <li
                        className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                          selectedFilter === "Now" && "font-bold"
                        }`}
                        onClick={() => setSelectedFilter("Now")}
                      >
                        Now
                      </li>
                      <li
                        className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                          selectedFilter === "Week" && "font-bold"
                        }`}
                        onClick={() => setSelectedFilter("Week")}
                      >
                        Week
                      </li>
                      <li
                        className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                          selectedFilter === "Month" && "font-bold"
                        }`}
                        onClick={() => setSelectedFilter("Month")}
                      >
                        Month
                      </li>
                      <li
                        className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                          selectedFilter === "Year" && "font-bold"
                        }`}
                        onClick={() => setSelectedFilter("Year")}
                      >
                        Year
                      </li>
                      <li
                        className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                          selectedFilter === "All" && "font-bold"
                        }`}
                        onClick={() => setSelectedFilter("All")}
                      >
                        All
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="mr-16">
              {Discussions &&
                Discussions?.map((discussion) => {
                  if (discussion?.ParentId === null) {
                    return (
                      <Discussion
                        discussion={discussion}
                        Discussions={Discussions}
                        fetchDiscussions={fetchDiscussions}
                      />
                    );
                  }
                })}
            </div>
          </div>
        </main>

        <aside className="sidebarWithSeparator right">
          <p className="">TOPICS </p>
          <div className="flex flex-wrap justify-start gap-4 my-5">
            {CategoriesData?.map((group) => (
              <div className="flex items-center w-full">{group.groupName}</div>
            ))}
          </div>

          <aside className="sidebarWithSeparator bottom"></aside>
        </aside>
      </div>
    </div>
  );
};

export default DiscussionsPage;
