import React, { useState } from 'react'

function BlogPost({ title, backgroundImage }) {
    const [isHovered, setIsHovered] = useState(false);

const handleMouseEnter = () => {
  setIsHovered(true);
};

const handleMouseLeave = () => {
  setIsHovered(false);
};

const cardStyle = {
  backgroundImage: backgroundImage,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  borderRadius : '50px'
};

  return (
    <div
      className="p-4 border rounded-md shadow-md hover:shadow-lg relative w-[500px] h-[350px] overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={cardStyle}
    >
      <div
        className={`${
          isHovered ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-500 absolute inset-0 flex items-center justify-center text-white bg-[rgba(0,0,0,0.3)] bg-opacity-75`}
      >
        <div className="text-center">
          <div className="bg-transparent bg-opacity-0 border text-white rounded-full px-4 py-2 pointer">
            Read
          </div>
        </div>
      </div>
     { /*<div className="absolute bottom-0 p-4 bg-[rgba(0,0,0,0.3)] w-full">*/}
     <div className="bg-[rgba(0,0,0,0.5)] p-4 w-full h-full">
        <h1
          className={`${
            !isHovered ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-500 absolute bottom-0 text-white font-bold p-4`}
        >
          {title}
        </h1>
      </div>
    </div>
  )
}

export default BlogPost
