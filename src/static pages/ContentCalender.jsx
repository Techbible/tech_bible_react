import React, { useContext } from "react";
import NewsLetter from "../components/home components/NewsLetter";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import RelatedArticleCard from "./RelatedBlogs";


function ContentCalender() {
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
    <h1 className="text-[#ef4823] text-4xl font-bold">
      Free Content Calendars to Download
    </h1>
  </div>
  
      <div className="col-span-12 md:col-span-8 py-4">
        <h2 className="text-2xl font-bold">
          Streamline Your Email Campaigns, Social Media Posts, and Content
          Creation
        </h2>
      </div>

      <div className="col-span-12 md:col-span-8 py-4 text-lg text-left ml-5">
        <div className="py-8">
          <img
            src="https://uploads-ssl.webflow.com/645299d48a785f5f60711d8f/64773bb434e8399a584ff350_647093ad4f90b915da1b90e2_content%2520pipeline.png"
            alt="1"
            className="max-w-full"
          />
          <button
          className="text-orange-600 mb-10"
          onClick={handleButtonClick}

        >
          Download your free content calendars by clicking here !
        </button>
        </div>
        Greetings, tech-savvy marketers and trailblazers!
        <br />
        Running a tech startup is no small feat. Amidst the relentless hustle of
        funding rounds, technological advancements, and team building, your
        marketing strategies can often be relegated to the back burner. This is
        where we, Techbible, step in to help!
        <br />
        <br />
        But first, let's break it down. What exactly are content calendars, and
        why should they be an integral part of your marketing arsenal?
        <br />
        Content calendars, also known as editorial calendars, are strategic
        tools designed to organize, schedule, and streamline your content across
        various marketing channels. Using these calendars, you can effectively
        plan your marketing campaigns and ensure a consistent content flow,
        maintaining your brand's visibility and relevancy.
        <br />
        <br />
        <div className="text-[#ef4823]">
          <b>1. Social Media Content Calendar</b>
        </div>
        In today's hyperconnected era, your social media presence is paramount.
        Our social media content calendar will help you strategically schedule
        and manage your posts across multiple platforms. Stay on top of trending
        hashtags, timely content, and regular engagement with your audience, all
        while keeping an eye on the big picture.
        <div className="py-8">
          <img
            src="https://uploads-ssl.webflow.com/645299d48a785f5f60711d8f/64773bb434e8399a584ff350_647093ad4f90b915da1b90e2_content%2520pipeline.png"
            alt="1"
            className="max-w-full"
          />
        </div>
        <div className="text-[#ef4823]">
          <b>2. Email Planning Content Calendar</b>
        </div>
        Email remains one of the most effective methods of reaching out to your
        customers directly. However, without proper planning, your messages can
        get lost in the crowd. Our email planning content calendar ensures you
        craft compelling subject lines, schedule timely emails, and leverage
        segmentation strategies to reach the right audience with the right
        message, at the right time. ‍
        <div className="py-8">
          <img
            src="https://uploads-ssl.webflow.com/645299d48a785f5f60711d8f/647093096b25b30b3bd75a4d_email%20planning.png"
            alt="1"
            className="max-w-full"
          />
        </div>
        <div className="text-[#ef4823]">
          <b>3. Video/Written Content Planning Calendar</b>
        </div>
        In the digital age, written blogs and videos are key to engaging your
        audience, driving website traffic, and improving SEO. Our video/written
        content planning calendar allows you to strategically schedule blogs,
        articles, vlogs, webinars, and more, ensuring your target audience
        always has something valuable to consume and share.
        <div className="py-8">
          <img
            src="https://uploads-ssl.webflow.com/645299d48a785f5f60711d8f/647093ad4f90b915da1b90e2_content%20pipeline.png"
            alt="1"
            className="max-w-full"
          />
        </div>
        As you embark on your marketing journey, remember that consistency is
        key. With our content calendars, you'll not only stay organised and
        efficient but also ensure that your brand's voice is heard loud and
        clear in the bustling tech startup ecosystem. So, what are you waiting
        for? Turbocharge your marketing strategy by downloading our FREE content
        calendars today. Harness the power of strategic planning and propel your
        tech startup to unprecedented heights. We at Techbible are excited to be
        part of your journey. Let's pave the path to success together!
        <br />

        <br />
        Download your free content calendars by <br/>
        <button
          className="text-white mt-5 mb-20 light rounded-[6px] px-[10px] py-[5px] bg-[#ef4823] transition duration-250 hover:bg-[#ca391c] active:bg-[#b32712]"
          onClick={handleButtonClick}
        >
        clicking here !
        </button>
      </div>

      <div className="col-span-12 md:col-span-4 py-4 ml-20">
        <NewsLetter />
        <RelatedArticleCard />

      </div>
    </div>
  );
}

export default ContentCalender;
