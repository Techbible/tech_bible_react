import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NewsItem  from './NewsItem'
import { useParams } from 'react-router-dom'
import {Navbar} from "../../layouts"

const NewsList = () => {
    const [articles, setArticles] = useState([])
    const { keyword } = useParams();

    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get(`https://newsapi.org/v2/everything?q=${keyword}&apiKey=e7eb7131ce9941609ec6cddbd650f536`)
            setArticles(response.data.articles)
            console.log(response)
        }

        getArticles()
    }, [])
    return (
        <div className='home-page-SPw'>
        <Navbar />
            {articles.map(article => {
                return(
                    <NewsItem 
                        title={article.title}
                        description={article.description}
                        url={article.url}
                        urlToImage={article.urlToImage} 
                    />
                )
            })}
        </div>
    )
}

export default NewsList
