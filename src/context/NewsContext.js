import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../config/mongo";
export const NewsContext = createContext();
export const NewsContextProvider = (props) => {
  const [DataAPI, setDataAPI] = useState();
  const [MongoDBData, setMongoDBData] = useState();
  const fetchNewsFromAPI = async () => {
    const options = {
      method: "GET",
      url: "https://bing-news-search1.p.rapidapi.com/news/search",
      params: {
        q: "AI",
        freshness: "Day",
        textFormat: "Raw",
        safeSearch: "Off",
      },
      headers: {
        "X-BingApis-SDK": "true",
        "X-RapidAPI-Key": "ce4c0a583fm<sh239831e4c4f9cb6p1a2f1cjsnb464fa3848e6",
        "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
      },
    };
    try {
      const response = await axios.request(options);
      // console.log(response.data.value);
      setDataAPI(response.data.value);
      console.log(response.data.value);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchNewsFromMongoDB = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/news`);
      console.log(response.data);
      // return response.data;
       // Sort the news articles by the datePublished field in descending order
       const sortedData = response.data.sort((a, b) => {
        const dateA = new Date(a.datePublished);
        const dateB = new Date(b.datePublished);
        return dateB - dateA;
      });
      setMongoDBData(sortedData);
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  useEffect(() => {
    fetchNewsFromAPI();
    if (!DataAPI) {
      console.log("Faggot API!");
      fetchNewsFromMongoDB();
    }
  }, []);
  return (
    <NewsContext.Provider value={{ DataAPI, MongoDBData }}>
      {props.children}
    </NewsContext.Provider>
  );
};
