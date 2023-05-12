import React from "react";

const NewsItem = ({ title, description, url, urlToImage }) => {
  return (
    <div className="news-app">
    <div className="news-item shadow-lg rounded-lg overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-500">
      <img
        className="news-img object-cover w-full h-48 sm:h-64"
        src={
          urlToImage
            ? urlToImage
            : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png"
        }
        alt={urlToImage}
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">
          <a href={url} className="text-white line-clamp-3">
            {title}
          </a>
        </h3>
      </div>
    </div>
  </div>  
  );
};

export default NewsItem;
