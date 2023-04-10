import React from 'react'
import '../../assets/styles/News.css';

const NewsItem = ({ title, description, url, urlToImage }) => {
    return (
        <div className="news-app">
            <div className='news-item'>
                <img className='news-img' src={urlToImage?urlToImage:"https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png"} alt={urlToImage} />
                <h3 className='article-title'><a href={url}>{title}</a></h3>
                <p>{description}</p>
                
            </div>
        </div>
    )
}

export default NewsItem
