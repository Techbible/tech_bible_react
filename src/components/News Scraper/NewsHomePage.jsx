import React from "react";

const NewsHomePage = () => {
  return (
    <div className="max-w-xl mx-auto mb-5 mt-10 rounded-xl shadow-md md:max-w-2xl">
      <div className="md:flex">
        <div className="md:pt-4">
          <a
            href="www"
            className="block text-[15px] poppins fw-[200px] text-white leading-tight text-gray-900 hover:text-[#7869E6] w-[311px]"
          >
            Title of the News Article
          </a>
          <p className="mt-2 poppins text-white-500 text-sm">
            By John Doe | April 20, 2023
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsHomePage;
