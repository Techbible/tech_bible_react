import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser"
import { CategoriesData } from "../dataJson/CategoriesData";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kd0qax9",
        "template_dyt5ehd",
        form.current,
        "CGfMlTTd0JD9zR-ik"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
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
          <div className="text-[15px] fontWeight-400 poppins mb-1">
            Username
          </div>
          <input
            type="text"
            name="user_name"
            className="w-full md:w-[378px] h-[36px] text-black mb-4 rounded-[5px] px-3"
            placeholder="Username"
          />
        </div>
        <div>
          <div className="text-[15px] fontWeight-400 poppins mb-1">Email</div>
          <input
            type="email"
            name="user_email"
            className="w-full md:w-[378px] text-black h-[36px] rounded-[5px] px-3"
            placeholder="Example@site.com"
          />
        </div>
        <div>
          <div className="flex justify-start items-center w-full md:w-[378px] mb-4 ">
            <div className="text-[15px] fontWeight-400 poppins mt-4">
              What services are you looking for?
            </div>
          </div>
          <div className="mb-8">
            <select className="px-3 py-[4px] ">
              {CategoriesData?.map((group, index) => (
                <option value={group.groupName} key={index}>
                  {group.groupName}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-start items-center w-full md:w-[378px] mb-4 ">
            <div className="text-[15px] fontWeight-400 poppins ">
              Tell us a little bit about your project
            </div>
          </div>
          <div className="flex justify-start items-center w-full md:w-[378px]  ">
            <div className="text-[15px] text-gray-400 text-[12px] poppins max-w-[378px] ">
              What does your company do? What project do you need help with?
              This is optional, but helps get the ball rolling.
            </div>
          </div>
          <div className="flex justify-start items-center w-full md:w-[378px]  ">
            <textarea
              name="message"
              className="max-w-[378px] h-[176px] rounded-md bg-white italic poppins text-black p-4 "
              placeholder="Add a comment"
            />
          </div>
          <div className="flex justify-start items-center w-full md:w-[378px] mb-4 ">
            <input
              type="submit"
              value="Send"
              className="rounded-md py-4 w-full  bg-[#EF4823] max-w-[378px]"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

{
  /* <form ref={form} onSubmit={sendEmail}>
  <label>Name</label>
  <input type="text" name="user_name" />
  <label>Email</label>
  <input type="email" name="user_email" />
  <label>Message</label>
  <textarea name="message" />
  <input type="submit" value="Send" />
</form>; */
}

export default ContactUs;
