import React from 'react'
import { Link } from 'react-router-dom'


const Comment = ({User}) => {
  return (
    <div className="px-mobile-1 px-tablet-1 pt-mobile-0 pt-desktop-6 pt-tablet-6 pt-widescreen-6 pb-mobile-7 pb-desktop-6 pb-tablet-6 pb-widescreen-6">
      <div
        className="flex direction-row flex-row-gap-4 flex-row-gap-mobile-2 flex-row-gap-widescreen-undefined flex-1"
        data-test="post-item-390145"
      >
        
        <Link to="/Profile">
        <div
            
            >
              <img
                loading="lazy"
  
                src={User.photo}
  
                style={{ width: "60px", height: "60px" ,borderRadius: "50%" }}
                alt={User.username}
                className=" h-auto w-full object-contain"
              />
              
              
            </div>
          
        </Link>
                
         
          
        
          

        <div className="flex direction-column flex-1">
           
          <div className="color-white fontSize-mobile-12 fontSize-desktop-16 fontSize-tablet-16 fontSize-widescreen-16 fontWeight-600 noOfLines-2 styles_format__w0VVk">
            
            <a
              href="/r/p/390145"
              rel="noopener"
              target="_blank"
              className="styles_externalLinkIcon__822Ku"
            >
              <svg  width="13" height="14" viewBox="0 0 13 14">
                <g
                  stroke="#4B587C"
                  strokeWidth="1.5"
                  fill="none"
                  fillRule="evenodd"
                >
                  <path d="M9.6 4H4.2a2.4 2.4 0 0 0-2.4 2.4V10"></path>
                  <path d="M6.6 7l3-3-3-3M12 10v3H0"></path>
                </g>
              </svg>
            </a>
          </div>
          <div className="color-white fontSize-mobile-12 fontSize-desktop-16 fontSize-tablet-16 fontSize-widescreen-16 fontWeight-400 noOfLines-2">
            <p className="styles_tagline__j29pO">
              {User.bio}
            </p>
          </div>
          <div className="flex direction-row flex-row-gap-6 mt-3 align-center">
            <div className="flex direction-row flex-row-gap-3">
              
              <Link to="/Profile">
              <div className="color-white fontSize-12 fontWeight-400 noOfLines-undefined">
              {User.username}
                
              </div>
              </Link>
              <div className="color-blue fontSize-12 fontWeight-400 noOfLines-undefined">
                Growth
              </div>
              <div className="color-white fontSize-12 fontWeight-400 noOfLines-undefined">
                  
                  </div>
                  <div className="color-white  noOfLines-undefined">
                  
                  </div>
              
              <div className="color-white fontSize-12 fontWeight-400 noOfLines-undefined">
              <Link to="/DiscussionReply">3 replies</Link>
                
              </div>
              <div className="color-white fontSize-12 fontWeight-400 noOfLines-undefined">
                  
                </div>
                <div className="color-white fontSize-12 fontWeight-400 noOfLines-undefined">
                  7H ago
                </div>
              
            </div>
          </div>
        </div>
        <div className="flex direction-column mr-mobile-0 mr-desktop-2 mr-tablet-2 mr-widescreen-2 mt-2 mb-2 ml-mobile-2 ml-desktop-0 ml-tablet-0">
        <div className="flex direction-column align-center">
        <div className="flex items-center space-x-4">
        <button className="p-2 border rounded-full hover:bg-white hover:text-black ">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4  hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                </svg>
              </button>
              <div className="color-white fontSize-12 fontWeight-400 noOfLines-undefined">
                  42
                  </div>
            <button className="p-2 border rounded-full hover:bg-gray-100 hover:text-black">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-current hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
             </button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Comment