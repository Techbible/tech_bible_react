import React from 'react'
import { Link } from 'react-router-dom'


const DiscussionReply = () => {
  return (
   <div className="mt-desktop-10 mt-mobile-8 mt-tablet-8 mt-widescreen-10 layoutContainer ">
  
    <main className="layoutMain">
       <div className='flex direction-column'> 
       <div className='flex direction-row'>
        
              <button className="p-2 border flex direction-column items-center hover:bg-white hover:text-black w-20 h-25">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                </svg>
                3
              </button>
              
                <div className="bg-black text-white p-4 my-2">
               <p className="text-xl font-bold">How do you measure the success of a product launch ?</p>
                <div className="flex direction-row">
                <Link to="/profile" className="text-sm ml-2">Merve Tarayıcı</Link>
                 <p className="text-sm ml-2">4h ago</p>
                 <p className="text-sm ml-2">3 replies</p>
               </div>
                <p className="text-sm mt-2">
                   Launching a product is an exciting milestone, but how do you know if it's successful? What metrics should you be tracking, and how do you measure the impact of your launch on your business goals?
                </p>
        </div>


       </div>
       
       </div>
    </main>
    <aside className="">

   
      
    </aside>
    </div>
  )
}

export default DiscussionReply