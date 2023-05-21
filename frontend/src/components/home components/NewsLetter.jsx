import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../config/mongo";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [emailError, setEmailError] = useState("");
  const handleSubmit = async () => {
    console.log(email);
    const isValidEmail = validateEmail(email);
    setValidEmail(isValidEmail);

    if (isValidEmail) {
      setSubscribed(true);
      setEmailError("");
    } else {
      setEmailError("Invalid email format");
    }
    try {
      const response = await axios.post(`${BASE_URL}/addSubscriber/${email}`);
      console.log("Subscription successful!");
    } catch (error) {
      console.error("Subscription failed:", error);
    }
  };
  const validateEmail = (email) => {
    // Regular expression to match email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="news-letter-container flex flex-column gap-3 bt-white bt-white mb-8">
      <div className="text-[16px] medium fontWeight-500 opacity-[.98] ">
        Newsletter
      </div>
      <div className="text-[12px] light text-gray-300 ">
        Get the latest Saas products news directly to your inbox!
      </div>
      {emailError && <p style={{ color: "red" }}>{emailError}</p>}
      {subscribed && validEmail ? (
        <p>Thank you for subscribing to the newsletter! 😊</p>
      ) : null}
      <input
        type="text"
        className="text-black lg:w-[278px] lg:h-[36px] md:w-[300px] md:h-[36px] rounded-[6px] px-[10px] py-[5px]"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button
        className="text-white light lg:w-[278px] lg:h-[36px] md:w-[300px] md:h-[36px] rounded-[6px] px-[10px] py-[5px] bg-[#ef4823] transition duration-250 hover:bg-[#ca391c] active:bg-[#b32712]"
        onClick={handleSubmit}
      >
        Subscribe to newsletter
      </button>
    </div>
  );
};

export default NewsLetter;
