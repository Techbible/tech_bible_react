import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-row border-t-[1px] border-white py-[6vh] bg-[#0D0C12] sm:gap-[150px]">
      <div className="flex flex-column sm:flex-row xl:ml-[12vh] lg:ml-[12vh] md:ml-10 sm:ml-5 pl-3 mr-16 gap-y-3">
        <div>
          <Link to="/">
            <img
              className="w-[130px] sm:w-[100px] md:w-[135px] lg:w-[140px] xl:w-[161px] w-[100px]"
              src={`${process.env.PUBLIC_URL}/TechBibleLogoV2.svg`}
              alt=""
            />
          </Link>
        </div>
        <div className="flex flex-col justify-center">
          <div className="xl:max-w-[361px] lg:max-w-[361px] max-w-[100px] poppins xl:text-[16px] lg:text-[16px] text-[13px] font-light opacity-[.9] mt-8">
            TechBible is a company registered in England and Wales (Company No.
            12731987).
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-center sm:justify-start mr-5 xl:gap-x-[12vh] lg:gap-x-[12vh] gap-x-[8vh] xl:mt-3 xl:mt-3">
        <div className="flex flex-col xl:gap-y-3 lg:gap-y-3 gap-y-1 mb-4">
          <div className="xl:text-[15px] lg:sm:text-[15px] text-[12px] poppins font-bold xl:mb-5 lg:mb-5 mb-2">
            About Us
          </div>
          <div className="xl:text-[15px] lg:sm:text-[15px] text-[12px] poppins font-light opacity-[.9]">
            Our Story
          </div>
          <div className="xl:text-[15px] lg:sm:text-[15px] text-[12px] poppins font-light opacity-[.9]">
            Mission and Vision
          </div>
          <div className="xl:text-[15px] lg:sm:text-[15px] text-[12px] poppins font-light opacity-[.9]">
            Team
          </div>
        </div>
        <div className="flex flex-col xl:gap-y-3 lg:gap-y-3 gap-y-1 mb-4">
          <div className="xl:text-[15px] lg:sm:text-[15px] text-[12px] poppins font-bold xl:mb-5 lg:mb-5 mb-2">
            Services
          </div>
          <div className="xl:text-[15px] lg:sm:text-[15px] text-[12px] poppins font-light opacity-[.9]">
            Browse Computer Tools
          </div>
          <div className="xl:text-[15px] lg:sm:text-[15px] text-[12px] poppins font-light opacity-[.9]">
            Latest AI Tech News
          </div>
          <div className="xl:text-[15px] lg:sm:text-[15px] text-[12px] poppins font-light opacity-[.9]">
            Discuss Topics
          </div>
        </div>
        <div className="flex flex-col xl:gap-y-3 lg:gap-y-3 gap-y-1 mb-4">
          <div className="xl:text-[15px] lg:sm:text-[15px] text-[12px] poppins font-bold xl:mb-5 lg:mb-5 mb-2">
            Contact Us
          </div>
          <div className="xl:text-[15px] lg:sm:text-[15px] text-[12px] poppins font-light opacity-[.9]">
            Email: info@example.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
