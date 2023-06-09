import React from "react";
import { BASE_URL } from "../../config/mongo";
import axios from "axios";
const NewsItem = ({ _id, title, description, url, urlToImage }) => {

  return (
    <div className="news-app">
      <div className="flex flex-row shadow-lg rounded-lg overflow-hidden bg-[#18151D] max-w-[1000px]">
        
        <img
          className="news-img rounded-lg object-cover w-24 h-24 sm:w-32 sm:h-32"
          src={
            urlToImage
              ? urlToImage
              : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png"
          }
          alt={urlToImage}
        />
        <div className="p-6 relative">
          <h3 className="text-12">
            <a href={url} className="text-gray-200 fontWeight-500">
              {title}
            </a>
          </h3>

          <br />
          <p className="light text-[14px] text-gray-200 opacity-[.8]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
export default NewsItem;
