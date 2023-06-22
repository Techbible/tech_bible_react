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
    <Link to="/blogs-post/automation-recipes-part-ii">  
    <BlogPost
        title="Automation Recipes Part II"
        backgroundImage="url('https://uploads-ssl.webflow.com/645299d48a785f5f60711d8f/6486fabd86e9f3861f81bfab_23-p-800.png')"
      />
      </Link>
    <Link to="/blogs-post/chatgpt-plugins-list">  
    <BlogPost
        title="Chat GPT Plugins List"
        backgroundImage="url('https://uploads-ssl.webflow.com/645299d48a785f5f60711d8f/6486faf386e9f3861f81fa87_2-p-1080.png')"
      />
      </Link>
      
      <BlogPost
        title="Every marketer should bookmark these websites for inspiration"
        backgroundImage="url('https://uploads-ssl.webflow.com/645299d48a785f5f60711d8f/6486faa19ff9c75880e3ad88_24-p-800.png')"
      />

      {/* Add more BlogPosts as needed */}
    </div>
  </div>
  )
}

export default BlogPage
