import React from "react";
import { Link } from "react-router-dom";

function RelatedArticleCard() {
  const articles = [
    {
      title: "Free Content Calendars to Download",
      imageUrl: "https://uploads-ssl.webflow.com/645299d48a785f5f60711d8f/6486fb7564b286f1d7dfb930_8-p-1080.png",
      articleUrl: "/blogs/chatgpt-plugins-list",
    },
    {
      title: "How to get the most out of CHATGPT",
      imageUrl: "https://uploads-ssl.webflow.com/645299d48a785f5f60711d8f/64873c904703bfb76cf44f74_AUTOMATION%20RECIPES%20(2)-p-800.png",
      articleUrl: "/blogs/how-to-get-the-most-out-of-chatgpt",
    },
    {
      title: "Chat GPT Plugins List",
      imageUrl: "https://uploads-ssl.webflow.com/645299d48a785f5f60711d8f/6486faf386e9f3861f81fa87_2-p-1080.png",
      articleUrl: "/blogs/chatgpt-plugins-list",
    }
    // Add more articles as needed
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Related Articles</h1>
      {articles.map((article, index) => (
        <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
          <Link to={article.articleUrl}>
            <img className="w-full" src={article.imageUrl} alt="Article" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{article.title}</div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default RelatedArticleCard;
