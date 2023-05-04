import React from 'react'
import { Link } from 'react-router-dom'
const Comment = () => {
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
  
                src="data:image/jpeg;base64,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"
  
                style={{ width: "60px", height: "60px" ,borderRadius: "50%" }}
                alt="Profile image"
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
              Grew my twitter account to 1000+ in less than a month
            </p>
          </div>
          <div className="flex direction-row flex-row-gap-6 mt-3 align-center">
            <div className="flex direction-row flex-row-gap-3">
              
              <Link to="/Profile">
              <div className="color-white fontSize-12 fontWeight-400 noOfLines-undefined">
                Anil Matcha
                
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