import React from "react";
import ToolLoader from "./ToolLoader";
import SearchBarLoader from "./SearchBarLoader";
import CategoryLoader from "./CategoryLoader";
import DiscussionLoader from "./DiscussionLoader";

const LoadingCommunity = () => {
  return (
    <div className="flex flex-col lg:flex-row mt-16 ">
      <main className="layoutMain xl:mt-15 lg:mt-15 ml:mt-15 sm:mt-12 flex-grow">
        <div className="flex flex-column align-items-center mb-16 "></div>
        <div className="w-[40%] ml-14 ">
          <CategoryLoader />
          <CategoryLoader />
        </div>
        <DiscussionLoader />
        <DiscussionLoader />
        <DiscussionLoader />
        <DiscussionLoader />
      </main>
      <div className="sidebarWithSeparator ml-4 flex-grow-0">
        <div className="h-full flex flex-row">
          <div className="h-full border-l-2 border-white mr-5"></div>
          <div className="flex-grow mt-16 mr-4">
            <CategoryLoader />
            <CategoryLoader />
            <CategoryLoader />
            <CategoryLoader />
            <CategoryLoader />
            <CategoryLoader />
            <CategoryLoader />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingCommunity;
