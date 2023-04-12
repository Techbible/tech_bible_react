import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  // const apiKey = "e7eb7131ce9941609ec6cddbd650f536";
  // const q = "AI";


  useEffect(() => {
    axios
      .get(
        `
        https://newsapi.org/v2/everything?q=AI&from=2023-04-10&to=2023-04-10&sortBy=popularity&apiKey=e7eb7131ce9941609ec6cddbd650f536`
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