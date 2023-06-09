import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Discussion from "./Discussion";
import UserInDiscussion from "./UserInDiscussion";
import NewDiscussion from "./NewDiscussion";

const DiscussionsPage = ({
  toggleDropdown,
  isOpen,
  Discussions,

  CategoriesData,

  selectedFilter,
  setSelectedFilter,

  fetchDiscussions,
}) => {
  const [search, setSearch] = useState("");
  const [isnewClicked, setIsNewClicked] = useState(false);
  const [isPopularClicked, setIsPopularClicked] = useState(false);
  const [isAllClicked, setIsAllClicked] = useState(true);
  const [searchResultVisible, setsearchResultVisible] = useState(false);
  const [category, setCategory] = useState("");
  const [isCategoryClicked, setIsCategoryClicked] = useState(false);
  const [userDiscussionData, setUserDiscussionData] = useState();
  const [isDateFilterClicked, setIsDateFilterClicked] = useState(false);
  const [sortedDiscussionByDate, setSortedDiscussionByDate] =
    useState(Discussions);
  const [showUserAside, setShowUserAside] = useState(false);
  const [categoryOfDiscussion, setCategoryOfDiscussion] = useState("");
  const [createDiscussionClicked, setCreateDiscussionClicked] = useState(false);

  const handleDateFilter = () => {
    setIsDateFilterClicked(true);

    // Apply the selected filter option
    if (selectedFilter === "Week") {
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

      const filteredDiscussions = Discussions.filter((discussion) => {
        return new Date(discussion.createdAt) >= oneWeekAgo;
      });
      setSortedDiscussionByDate(filteredDiscussions);
    } else if (selectedFilter === "Month") {
      const oneMonthAgo = new Date();
      oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

      const filteredDiscussions = Discussions.filter((discussion) => {
        return new Date(discussion.createdAt) >= oneMonthAgo;
      });

      setSortedDiscussionByDate(filteredDiscussions);
    } else if (selectedFilter === "Year") {
      const oneYearAgo = new Date();
      oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

      const filteredDiscussions = Discussions.filter((discussion) => {
        return new Date(discussion.createdAt) >= oneYearAgo;
      });

      setSortedDiscussionByDate(filteredDiscussions);
    }
    setSelectedFilter("");
  };

  const handleCategoryFilter = (cat) => {
    setCategory(cat);
    setIsNewClicked(false);
    setIsPopularClicked(false);
    setIsAllClicked(false);
    setsearchResultVisible(false);
    setIsCategoryClicked(true);
    setIsDateFilterClicked(false);
  };
  useEffect(() => {
    setSortedDiscussionByDate(Discussions);
  }, [Discussions]);
  return (
    <div>
      <div className="mt-desktop-10 mt-mobile-8 mt-tablet-8 mt-widescreen-10 toolDetailLayoutContainer ">
        <main className="layoutMain">
          <div className="flex flex-col mb-12 p-5 text-white">
            <p className="text-lg font-bold mb-2">Discussions</p>
            <p className="text-base">
              Ask questions, find support, and connect with the community
            </p>

            <button
              onClick={() =>
                setCreateDiscussionClicked(!createDiscussionClicked)
              }
              className="light text-[14px]  px-[8px] py-[1px] rounded-[5px] mt-2 mb-2 mx-auto bg-[#EF4722] hover:bg-orange mt-10 ml-0"
            >
              <Link>Create New Discussion</Link>
            </button>
            {createDiscussionClicked && <NewDiscussion />}
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
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setsearchResultVisible(true);
                    setIsAllClicked(true);
                  }}
                  onKeyDown={(e) => {
                    if (e.keyCode === 13) {
                      e.preventDefault();
                      setsearchResultVisible(true);
                      setIsAllClicked(true);
                    }
                  }}
                  autoComplete="off"
                  type="search"
                  id="default-search"
                  className="bg-white h-[15px] border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search discussions..."
                  required
                />
              </div>
            </form>
            <div className="flex direction-row">
              <p className="mr-3 hover:cursor-pointer hover:font-bold">
                <button
                  onClick={() => {
                    setIsNewClicked(false);
                    setIsPopularClicked(false);
                    setIsAllClicked(true);
                    setIsCategoryClicked(false);
                    setIsDateFilterClicked(false);
                  }}
                >
                  All
                </button>
              </p>
              <p className="mr-3 hover:cursor-pointer hover:font-bold">
                <button
                  onClick={() => {
                    setIsNewClicked(true);
                    setIsPopularClicked(false);
                    setIsAllClicked(false);
                    setIsCategoryClicked(false);
                    setIsDateFilterClicked(false);
                  }}
                >
                  New
                </button>
              </p>

              <p className="mr-3 hover:cursor-pointer hover:font-bold">
                <button
                  onClick={() => {
                    setIsPopularClicked(true);
                    setIsNewClicked(false);
                    setIsAllClicked(false);
                    setIsCategoryClicked(false);
                    setIsDateFilterClicked(false);
                  }}
                >
                  Popular
                </button>
              </p>

              <div className="flex direction-column mb-20">
                <button
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="dropdown"
                  onClick={() => {
                    toggleDropdown();
                    setSelectedFilter("All");
                  }}
                  className="text-white bg-[#ef4722] focus:ring-4 focus:outline-none focus:ring-orange-500 font-medium rounded-lg text-sm px-3 py-0.5 text-center inline-flex items-center "
                  type="button"
                >
                  Filter Date
                  <svg
                    className={`w-4 h-4 ml-2 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    onClick={() => setSelectedFilter("All")}
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
                {isOpen && selectedFilter !== "" && (
                  <div
                    id="dropdown"
                    className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-35 dark:bg-gray-700"
                  >
                    <ul
                      className="py-2 text-sm text-black cursor-pointer"
                      aria-labelledby="dropdownDefaultButton"
                      onClick={console.log(selectedFilter)}
                    >
                      <li
                        className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                          selectedFilter === "Week" && "font-bold"
                        }`}
                        onClick={() => {
                          setSelectedFilter("Week");
                          handleDateFilter();
                          console.log(sortedDiscussionByDate);
                        }}
                      >
                        Week
                      </li>
                      <li
                        className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                          selectedFilter === "Month" && "font-bold"
                        }`}
                        onClick={() => {
                          setSelectedFilter("Month");
                          handleDateFilter();
                          console.log(sortedDiscussionByDate);
                        }}
                      >
                        Month
                      </li>
                      <li
                        className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                          selectedFilter === "Year" && "font-bold"
                        }`}
                        onClick={() => {
                          setSelectedFilter("Year");
                          handleDateFilter();
                          console.log(sortedDiscussionByDate);
                        }}
                      >
                        Year
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
            {isAllClicked && searchResultVisible && search !== "" ? (
              <div className="mr-16">
                {Discussions?.filter((discussion) => {
                  const lowercasedDiscussionTitle =
                    discussion.Title.toLowerCase();

                  const lowercasedDiscussionDescription =
                    discussion.Description.toLowerCase();
                  const lowercasedSearch = search.toLowerCase();

                  return (
                    (lowercasedDiscussionTitle.includes(lowercasedSearch) ||
                      lowercasedDiscussionDescription.includes(
                        lowercasedSearch
                      )) &&
                    discussion.ParentId === null
                  );
                }).map((discussion) => (
                  <Discussion
                    discussion={discussion}
                    Discussions={Discussions}
                    setUserDiscussionData={setUserDiscussionData}
                    setShowUserAside={setShowUserAside}
                    setCategoryOfDiscussion={setCategoryOfDiscussion}
                  />
                ))}
                {Discussions &&
                  Discussions.length > 0 &&
                  Discussions.filter((discussion) =>
                    discussion.Title.toLowerCase().includes(
                      search.toLowerCase()
                    )
                  ).length === 0 &&
                  Discussions.filter((discussion) =>
                    discussion.Description.toLowerCase().includes(
                      search.toLowerCase()
                    )
                  ).length === 0 && <p>Nothing found for {search}.</p>}
              </div>
            ) : isnewClicked ? (
              <div className="mr-16">
                {Discussions?.filter((discussion) => {
                  const twentyFourHoursAgo = new Date();
                  twentyFourHoursAgo.setDate(twentyFourHoursAgo.getDate() - 1);
                  const discussionDate = new Date(discussion.createdAt);

                  return (
                    discussionDate >= twentyFourHoursAgo &&
                    discussion.ParentId === null
                  );
                }).map((discussion) => (
                  <Discussion
                    discussion={discussion}
                    Discussions={Discussions}
                    setUserDiscussionData={setUserDiscussionData}
                    setShowUserAside={setShowUserAside}
                    setCategoryOfDiscussion={setCategoryOfDiscussion}
                  />
                ))}
              </div>
            ) : isPopularClicked ? (
              <div className="mr-16">
                {Discussions?.filter(
                  (discussion) => discussion.ParentId === null
                )
                  .sort((a, b) => b.LikedBy.length - a.LikedBy.length) // Sort discussions in descending order based on LikedBy length
                  .map((discussion) => (
                    <Discussion
                      discussion={discussion}
                      Discussions={Discussions}
                      setUserDiscussionData={setUserDiscussionData}
                      setShowUserAside={setShowUserAside}
                      setCategoryOfDiscussion={setCategoryOfDiscussion}
                    />
                  ))}
              </div>
            ) : isCategoryClicked && category !== "" ? (
              <div className="mr-16">
                {Discussions?.filter((disc) => {
                  return disc?.Category === category;
                }).map((disc) => (
                  <Discussion
                    key={disc._id}
                    discussion={disc}
                    Discussions={Discussions}
                    setUserDiscussionData={setUserDiscussionData}
                    setShowUserAside={setShowUserAside}
                    setCategoryOfDiscussion={setCategoryOfDiscussion}
                  />
                ))}
              </div>
            ) : isDateFilterClicked && selectedFilter !== "" ? (
              <div className="mr-16">
                {sortedDiscussionByDate.map((discussion) => {
                  if (discussion?.ParentId === null) {
                    return (
                      <Discussion
                        discussion={discussion}
                        Discussions={Discussions}
                        setUserDiscussionData={setUserDiscussionData}
                        setShowUserAside={setShowUserAside}
                        setCategoryOfDiscussion={setCategoryOfDiscussion}
                      />
                    );
                  }
                })}
              </div>
            ) : (
              <div className="mr-16">
                {Discussions &&
                  Discussions?.map((discussion) => {
                    if (discussion?.ParentId === null) {
                      return (
                        <Discussion
                          discussion={discussion}
                          Discussions={Discussions}
                          setUserDiscussionData={setUserDiscussionData}
                          setShowUserAside={setShowUserAside}
                          setCategoryOfDiscussion={setCategoryOfDiscussion}
                        />
                      );
                    }
                  })}
              </div>
            )}
          </div>
        </main>

        <aside className="sidebarWithSeparator right">
          {showUserAside && (
            <UserInDiscussion
              userDiscussionData={userDiscussionData}
              categoryOfDiscussion={categoryOfDiscussion}
            />
          )}
          <p className="">TOPICS </p>
          <div className="flex flex-wrap justify-start gap-4 my-5">
            {CategoriesData?.map((group) => (
              <div
                onClick={() => handleCategoryFilter(group.groupName)}
                className="flex items-center w-full cursor-pointer hover:text-gray-400"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/assets/categories/${group.groupName}.png`}
                  className="h-8 w-8 mr-2 transition duration-500 hover:w-9"
                />
                <div>{group.groupName}</div>
              </div>
            ))}
          </div>

          <aside className="sidebarWithSeparator bottom"></aside>
        </aside>
      </div>
    </div>
  );
};

export default DiscussionsPage;
