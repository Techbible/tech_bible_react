import React from "react";
import { CategoriesData } from "../dataJson/CategoriesData";

const ContactUs = () => {
  return (
    <div className="flex flex-column align-items-center mt-10">
      <div className="poppins xl:text-[25px] lg:text-[25px] md:text-[23px] sm:text-[20px] text-[20px] fontWeight-700">
        Get in touch
      </div>
      <div className="max-w-[430px] fontWeight-300 poppins text-[20px] opacity-[.8] mt-10">
        Ensure that your brand stands out at every point of your customers'
        journey, whether they're just discovering your brand, actively
        considering, or ready to convert.
      </div>
      <div className="bg-white h-[123px] w-[.5px] opacity-[.5] mt-8 mb-8"></div>

      <div className="flex flex-column align-items-center  max-w-[430px] ">
        <div className="poppins fontWeight-700 text-[25px] inline-block">
          LET’S DISCUSS <p className="text-[#FF763B] inline-block"> YOUR</p>
        </div>
        <div>
          <p className="text-[#FF763B] inline-block poppins fontWeight-700 text-[25px] mb-10">
            REQUIREMENTS
          </p>
        </div>
      </div>
      <div>
        <div className="text-[15px] fontWeight-400 poppins mb-1">Username</div>
        <input
          className="w-full md:w-[378px] h-[36px] mb-4 rounded-[5px] px-3"
          type="text"
          placeholder="Username"
        />
      </div>
      <div>
        <div className="text-[15px] fontWeight-400 poppins mb-1">Email</div>
        <input
          className="w-full md:w-[378px] h-[36px] rounded-[5px] px-3"
          type="text"
          placeholder="Example@site.com"
        />
      </div>
      <div className="flex justify-start items-center w-full md:w-[378px] mb-4 ">
        <div className="text-[15px] fontWeight-400 poppins mt-4">
          What services are you looking for?
        </div>
      </div>
      <div className="mb-12">
        <select className="px-3 py-[4px] ">
          {CategoriesData?.map((group, index) => (
            <option value={group.groupName} key={index}>
              {group.groupName}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ContactUs;
