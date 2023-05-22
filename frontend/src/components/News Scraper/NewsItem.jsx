import React from "react";
import { BASE_URL } from "../../config/mongo";
import axios from "axios";
const NewsItem = ({ _id, title, description, url, urlToImage }) => {
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/deleteArticle/${_id}`);
      console.log("Article deleted:", response.data);
      // Handle successful deletion, such as updating the UI or showing a success message
    } catch (error) {
      console.error("Error deleting article:", error);
      // Handle error, such as displaying an error message or performing necessary error handling
    }
  };
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
          <div
            className="delete-btn m-25 mr-3"
            onClick={() => handleDelete(_id)}
          >
            {/* <img
              src={`${process.env.PUBLIC_URL}/assets/bin.png`}
              alt="delete"
              className="cursor-pointer w-[32px] h-[32px] m-2"
            /> */}
            Delete
          </div>
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
