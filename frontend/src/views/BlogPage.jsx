import React from 'react'
import BlogPost from '../components/Blog/BlogPost';
import {Link} from "react-router-dom";

function BlogPage() {
  return (
    <div className="flex mt-20 flex-col items-center">
    <h1 className="text-8xl font-bold text-center font-helvetica-neue text-orange-500">
      BLOG
    </h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
{   /*  <Link to="/blogs-post/automation-recipes-part-ii">  
    <BlogPost
        title="Automation Recipes Part II"
        backgroundImage="url('https://uploads-ssl.webflow.com/645299d48a785f5f60711d8f/6486fabd86e9f3861f81bfab_23-p-800.png')"
      />
      </Link> */}
    <Link to="/blogs-post/chatgpt-plugins-list">  
    <BlogPost
        title="Chat GPT Plugins List"
        backgroundImage="url('https://uploads-ssl.webflow.com/645299d48a785f5f60711d8f/6486faf386e9f3861f81fa87_2-p-1080.png')"
      />
      </Link>
      
      <Link to="/blogs-post/free-content-calendars">  
      <BlogPost
        title="Free Content Calendars to Download"
        backgroundImage="url('https://uploads-ssl.webflow.com/645299d48a785f5f60711d8f/6486fb7564b286f1d7dfb930_8-p-1080.png')"
      />
      </Link>
      
      <Link to="/blogs-post/how-to-get-the-most-out-of-chatgpt">  
      <BlogPost
        title="How to get the most out of CHATGPT"
        backgroundImage="url('https://uploads-ssl.webflow.com/645299d48a785f5f60711d8f/64873c904703bfb76cf44f74_AUTOMATION%20RECIPES%20(2)-p-800.png')"
      />
      </Link>

      {/* Add more BlogPosts as needed */}
    </div>
  </div>
  )
}

export default BlogPage
