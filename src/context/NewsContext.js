import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "e7eb7131ce9941609ec6cddbd650f536";


  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=+AI Tools AND (Artificial Intelligence OR +AI)&from=2023-03-05&sortBy=publishedAt&apiKey=${apiKey}`
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