import React from "react";
import NewsLetter from "../components/home components/NewsLetter";
import { Navigate } from "react-router-dom";

function PluginsGpt() {
  
  return (
    <div className="container mx-auto grid gap-4 grid-cols-1 md:grid-cols-12 mt-10">
      <div className="col-span-12 md:col-span-8 py-4">
        <h1 className="text-[#ef4823] text-3xl font-bold">ChatGPT Plugins List</h1>
      </div>

      <div className="col-span-12 md:col-span-8 py-4 text-lg text-left ml-5">
      <div className="py-8">
      <img
      src="https://uploads-ssl.webflow.com/645299d48a785f5f60711d8f/647f5a77f67c0926f8f8ab24_sheesh.png"
      alt="1"
      className="max-w-full"
    />
      </div>
        These nifty add-ons have taken the ChatGPT experience to a whole new
        level, providing users with a wide array of functionalities and
        possibilities. They allow you to tweak and modify ChatGPT's behavior and
        responses, making your conversations feel truly personal and tailored.
        <br />
        <br />
        Need a seamless and interactive interface? Look no further than C3
        Glide. This plugin offers a smooth and intuitive user experience, making
        your interactions with ChatGPT a breeze.
        <br />
        <br />
        Looking to generate high-quality training data? The Golden Plugin is
        your go-to. It enables you to train ChatGPT using human demonstrations
        and corrections, resulting in more accurate and refined responses.
        <br />
        <br />
        But it doesn't stop there! From Crypto Prices Plugin for tracking the
        latest cryptocurrency trends to Dev Community for connecting with fellow
        developers, these plugins cater to a wide range of needs. Whether you're
        searching for comics, exploring craft ideas, staying updated with world
        news, or even managing your investment portfolio, there's a plugin for
        you.
        <br />
        <br />
        These ChatGPT plugins are designed to simplify tasks, enhance
        productivity, and unlock new possibilities. They enable you to have more
        engaging conversations, access real-time information, and tap into
        specialized domains with ease. With their help, you can amplify your
        creativity, streamline workflows, and discover new ways to leverage the
        power of artificial intelligence.
        <br />
        <br />
        So, get ready to dive into the exciting world of ChatGPT plugins, <br/>
        <a href="https://docs.google.com/spreadsheets/d/1-keCRE-1MxYz76FhxjGTvK5nUDZ3YqlgnWsN6UucqDc/edit#gid=0" className="text-orange-600 mb-10">Get the full list here  🚀🔥</a>
    <br/>
        <button
        className="text-white mt-5 mb-20 light rounded-[6px] px-[10px] py-[5px] bg-[#ef4823] transition duration-250 hover:bg-[#ca391c] active:bg-[#b32712]"
         onClick={()=>(window.history.back())}>Go back</button>
      </div>

      <div className="col-span-12 md:col-span-4 py-4">
        <NewsLetter />
      </div>
    </div>
  );
}

export default PluginsGpt;
