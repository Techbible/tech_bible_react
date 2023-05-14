import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {


  const [data, setData] = useState();
  // const apiKey = "e7eb7131ce9941609ec6cddbd650f536";
  const query = "AI";

  // create a new date object for the current date
  const currentDate = new Date();
  // subtract 7 days from the current date
  const oneWeekAgo = new Date(currentDate);
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

  // format the date as YYYY-mm-dd
  const currentDateStr = currentDate.toISOString().slice(0, 10);
  const oneWeekAgoStr = oneWeekAgo.toISOString().slice(0, 10);

const fetchNews = async() =>{

  const options = {
  method: 'GET',
  url: 'https://bing-news-search1.p.rapidapi.com/news/search',
  params: {
    q: 'AI',
    freshness: 'Day',
    textFormat: 'Raw',
    safeSearch: 'Off'
  },
  headers: {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '7ff7e98c00msh04dbdf7ebeaf70ap1699e7jsn264ccf613bd0',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	// console.log(response.data.value);
  setData(response.data.value)
} catch (error) {
	console.error(error);
}
}

  useEffect(() =>{fetchNews()}, []);



  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};

//how to make a get request to an News api on react specifying the language and the pulished data ?