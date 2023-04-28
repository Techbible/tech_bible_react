import React from "react";

const NewsHomePage = () => {
  return (
    <div className="max-w-xl mx-auto mb-5 bg-[#E2E2E0] rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="p-8 md:pt-4">
          <div className="uppercase tracking-wide text-[15px] text-indigo-500 font-semibold mb-2">
            Breaking News
          </div>
          <a
            href="www"
            className="block text-[15px] font-bold leading-tight text-gray-900 hover:text-[#7869E6]"
          >
            Title of the News Article
          </a>
          <p className="mt-2 text-gray-500 text-sm">
            By John Doe | April 20, 2023
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsHomePage;
