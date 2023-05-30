import React from "react";

const ContactUs = () => {
  return (
    <div className="flex flex-column align-items-center mt-10">
      <div className="poppins xl:text-[25px] lg:text-[25px] md:text-[23px] sm:text-[20px] text-[20px] fontWeight-700">
        Get in touch
      </div>
      <div className="max-w-[430px] fontWeight-300 poppins text-[20px] opacity-[.8] mt-10 ">
        Ensure that your brand stands out at every point of your customers'
        journey, whether they're just discovering your brand, actively
        considering, or ready to convert.
      </div>
      <div className=" bg-white h-[123px] w-[.5px] opacity-[.5] mt-8 mb-8"></div>

      <div className="flex flex-column align-items-center  max-w-[430px] ">
        <div className="poppins fontWeight-700 text-[25px] inline-block ">
          LET’S DISCUSS <p className="text-[#FF763B] inline-block "> YOUR</p>
        </div>
        <div>
          <p className="text-[#FF763B] inline-block poppins fontWeight-700 text-[25px] ">
            {" "}
            REQUIREMENTS
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
