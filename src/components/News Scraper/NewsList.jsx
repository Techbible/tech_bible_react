import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NewsItem  from './NewsItem'
import { useParams } from 'react-router-dom'
import {Navbar} from "../../layouts"
import { useContext } from 'react'
import { NewsContext } from '../../context/NewsContext'

const NewsList = () => {
    const { data } = useContext(NewsContext)


    useEffect(()=>{console.log(data)},[])
    return (
        <div className='home-page-SPw'>
        <Navbar />
        <div className="News-title"><h1>Daily AI news</h1></div>
          <div className="container">  
          {data?.articles?.map(article => {
                return(
                    <div className='News-container'>
                    <NewsItem 
                        title={article.title}
                        description={article.description}
                        url={article.url}
                        urlToImage={article.urlToImage} />
                    </div>
                )
            })}:
            <div className="tenor-gif-embed" data-postid="18368917" data-share-method="host" data-aspect-ratio="1" data-width="100%"><a href="https://tenor.com/view/loading-loading-forever-bobux-loader-gif-18368917">Loading Loading Forever Sticker</a>from <a href="https://tenor.com/search/loading-stickers">Loading Stickers</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
            </div>
        </div>
    )
}

export default NewsList
