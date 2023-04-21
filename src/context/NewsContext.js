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


  useEffect(() => {
    axios
      .get(
        `
        https://newsapi.org/v2/everything?q=${query}&from=${oneWeekAgoStr}&to=${currentDateStr}&sortBy=popularity&apiKey=e7eb7131ce9941609ec6cddbd650f536`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};

//how to make a get request to an News api on react specifying the language and the pulished data ?