import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { BASE_URL } from "../../config/mongo";
import { NewsContext } from "../../context/NewsContext";
import { AuthContext } from "../../context/AuthContext";
// import loader from "/assets/loader.gif"
const NewsList = () => {
  const { DataAPI, MongoDBData } = useContext(NewsContext);
  const { isAdmin } = useContext(AuthContext);
  

  
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure that you want to delete this item?")) {

    try {
      const response = await axios.delete(`${BASE_URL}/delete-article/${id}`);
      console.log("Article deleted:", response.data);
      document.location.reload();

      // Handle successful deletion, such as updating the UI or showing a success message
    } catch (error) {
      console.error("Error deleting article:", error);
      // Handle error, such as displaying an error message or performing necessary error handling
    }
  }
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`${BASE_URL}/news`);
        console.log(response.data);
        // return response.data;
      } catch (error) {
        console.error(error);
        return [];
      }
    })();
  }, [MongoDBData]);
  return (
    <div className="container mx-auto bg-[#0D0C12] text-white my-3">
      <div className="News-title text-center py-8">
        <h1 className="text-4xl font-bold">Daily AI News</h1>
      </div>
      <div className="mx-auto w-full my-5 text-center">
        {isAdmin ? (
          <Link to="/AddNewsArticle">
            <span className="bg-dark p-5">+ Add an Article</span>
          </Link>
        ) : (
          <div></div>
        )}
      </div>
      <div className="flex flex-wrap justify-center">
        {DataAPI?.length > 0
          ? DataAPI?.map((article, index) => (
              <div className="w-full my-5" key={index}>
                <div className="lg:ml-[15%] rounded-lg shadow-lg overflow-hidden">
                  <NewsItem
                    title={article.name}
                    description={article.description}
                    url={article.url}
                    urlToImage={article.image?.thumbnail?.contentUrl}
                  />
                </div>
              </div>
            ))
          : MongoDBData?.map((article, index) => (
              <div className="w-full my-5" key={index}>
                <div className="lg:ml-[15%] rounded-lg shadow-lg overflow-hidden">
                {isAdmin?
                  <div
                    className="m-25 mr-3"
                    onClick={() => handleDelete(article._id)}
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/bin.png`}
                      alt="delete"
                      className="cursor-pointer w-[32px] h-[32px] m-2"
                    />
                  </div>
                :<div></div>}  
   
                  
                  <NewsItem
                    _id={article._id}
                    title={article.name}
                    description={article.description}
                    url={article.url}
                    urlToImage={article?.image?.contentUrl}
                  />
       
                </div>
              </div>
            ))}
      </div>
      {!DataAPI && !MongoDBData && (
        <div className="loader-wrapper">
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        </div>
      )}
    </div>
  );
};
export default NewsList;
