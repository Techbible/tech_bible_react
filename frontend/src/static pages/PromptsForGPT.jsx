import React, { useContext } from "react";
import NewsLetter from "../components/home components/NewsLetter";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import RelatedArticleCard from "./RelatedBlogs";


function PromptsForGPT() {
  const navigate = useNavigate();
  //CONTEXT
  const { currentUser } = useContext(AuthContext);
  const handleButtonClick = () => {
    if (!currentUser) {
        navigate("/signin");
      
    } else {
      // Navigate to the desired link if currentUser is filled or true
      window.location.href =
        "https://pensight.com/x/techbible/new-digital-item/a1f753d8-24d9-4333-9e16-dd52fe788b21";
    }
  };

  return (
    <div className="container mx-auto grid gap-4 grid-cols-1 md:grid-cols-12 mt-10">
    <div className="col-span-12 md:col-span-12 py-4 flex justify-center">
    <div className="w-full">
      <h1 className="text-[#ef4823] text-3xl font-bold text-center">
        How to get the most out of CHATGPT
      </h1>
      <br />
      <button className="text-orange-600 mb-10" onClick={handleButtonClick}>
        Explore the prompts and find the perfect ones for you to maximize your
        CHATGPT experience! Click here to download!
      </button>
      <br />
    </div>
  </div>
  
      <div className="col-span-12 md:col-span-8 py-4 text-lg text-left ml-5">
        <div className="py-8">
          <img
            src="https://uploads-ssl.webflow.com/645299d48a785f5f60711d8f/64762c23ecc9cecfe0597814_exl-p-800.png"
            alt="1"
            className="max-w-full"
          />
        </div>
        An estimated 2 billion people will install the ChatGPT app on their
        mobile devices soon. However, most of these users don't know how to use
        it effectively.
        <br />
        <br />
        <b>What is a prompt?</b>
        <br />
        A prompt is a message or instruction given to a language model like
        ChatGPT. It helps the model understand what to do and generate a useful
        response. The prompt can be a question, statement, or text that gives
        context. A good prompt makes the model's response better.
        <br />
        <br />
        This "Prompts Bible" Excel sheet is designed to provide you with prompts
        in various topics to assist you with your daily tasks. Whether you're
        looking to improve your learning or writing skills, tackle research and
        report writing, solve problems and make decisions, create captivating
        content, refine your writing style and editing, enhance your
        memorization and learning abilities, analyze and summarize information,
        generate ideas, engage with communities, stay updated, compare and
        contrast concepts, learn from mistakes, or identify gaps in your
        content, you've come to the right place.
        <br />
        <br />
        The prompts in this sheet are updated on a weekly basis to ensure you
        always have fresh inspiration.
        <br />
        <br />
        <br />
        <span className="text-orange-600 mb-10">
          Explore the prompts and find the perfect ones for you to maximize your
          CHATGPT experience ! 
        </span>
        <br />
        <button
          className="text-white mt-5 mb-20 light rounded-[6px] px-[10px] py-[5px] bg-[#ef4823] transition duration-250 hover:bg-[#ca391c] active:bg-[#b32712]"
          onClick={handleButtonClick}
        >
        Click here to download !
        </button>
      </div>

      <div className="col-span-12 md:col-span-4 py-4 ml-20">
        <NewsLetter />
        <RelatedArticleCard />

      </div>
    </div>
  );
}

export default PromptsForGPT;
