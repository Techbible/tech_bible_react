import React from "react";

const NewsHomePage = ({ title, date, provider }) => {
  // Parse the date string
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="max-w-xl mx-auto mb-5 mt-10 rounded-xl shadow-md md:max-w-2xl">
      <div className="md:flex">
        <div className="md:pt-4">
          <a
            href="www"
            className="block text-[15px] light text-white leading-tight text-gray-900 hover:text-[#7869E6] w-[311px]"
          >
            {title}
          </a>
          <p className="mt-2 poppins fw-[50px] text-gray-500 text-sm">
            By {provider} | {formattedDate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsHomePage;
