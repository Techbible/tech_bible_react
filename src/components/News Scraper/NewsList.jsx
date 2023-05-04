import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NewsItem  from './NewsItem'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { NewsContext } from '../../context/NewsContext';
// import loader from "/assets/loader.gif"

const NewsList = () => {
    const { data } = useContext(NewsContext)


    // useEffect(()=>{console.log(data)},[])
    return (
        <div className="container mx-auto bg-[#0D0C12] text-white my-3">
  <div className="News-title text-center py-8">
    <h1 className="text-4xl font-bold">Daily AI News</h1>
  </div>
  <div className="flex flex-wrap justify-center">
    {data?.map((article,index) => (
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4" key={index}>
        <div className="News-container bg-gray-900 rounded-lg shadow-lg overflow-hidden  ">
        <NewsItem 
        title={article.name}
        description={article.description}
        url={article.url}
        urlToImage={article.image?.thumbnail?.contentUrl} 
      />
      
        </div>
      </div>
    ))}
  </div>
  {!data && (
    <div className="flex justify-center items-center mt-8">
      <img src="/assets/loader-white.gif" alt="Loading..." />
    </div>
  )}
</div>
    )
}

export default NewsList
