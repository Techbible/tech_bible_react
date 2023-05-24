 import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../config/mongo";

const NewsLetter = ({status,message,onValidated}) => {
  let email;
  const [isValideFormat,setIsValidFormat]=useState(false);
  const [isSubscribedClicked,setIsSubscribedClicked]=useState(false)
  const submit = () => {
     setIsSubscribedClicked(true); 
     if(email &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){
        
         
        onValidated({
          EMAIL: email.value,
        });
        console.log('email added')
        setIsValidFormat(true);
     }  
     else {
     setIsValidFormat(false);
     
     console.log(status)

     }  
    
  };
  
    
    
  return (
    <div className="news-letter-container flex flex-column gap-3 bt-white bt-white mb-8">
      <div className="text-[16px] medium fontWeight-500 opacity-[.98] ">
        Newsletter
      </div>
      <div className="text-[12px] light text-gray-300 ">
        Get the latest Saas products news directly to your inbox!
      </div>
     

      {!isValideFormat && isSubscribedClicked && <div  style={{ color: "red" }}> email format is not valid</div>}
      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}

      <input
        type="email"
        className="text-black lg:w-[278px] lg:h-[36px] md:w-[300px] md:h-[36px] rounded-[6px] px-[10px] py-[5px]"
        placeholder="Your Email"
        
        ref={node => (email = node)}
       
        required
        
      />
      <button
        className="text-white light lg:w-[278px] lg:h-[36px] md:w-[300px] md:h-[36px] rounded-[6px] px-[10px] py-[5px] bg-[#ef4823] transition duration-250 hover:bg-[#ca391c] active:bg-[#b32712]"
        onClick={submit }
        
      >
        Subscribe to newsletter
      </button>
    </div>
  );
};

export default NewsLetter;
