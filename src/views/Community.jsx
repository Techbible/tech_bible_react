
import React, { useState } from 'react';
import "../assets/styles/community/community.css";
import "../assets/styles/home/global.css";
import NewsHomePage from "../components/News Scraper/NewsHomePage";
import Comment from '../components/Community/Comment';
import Toolitem from "../components/Tools/Toolitem";

import YouMustLikeApp from "../components/Filtering-container/YouMightLikeApp";
import YouMightLikeApp from "../components/Filtering-container/YouMightLikeApp";
import AppOfTheDay from "../components/Filtering-container/AppOfTheDay";
import { FilteringContext } from "../context/FilteringContext";
import Topic from '../components/Community/Topic';



function Community() {
    
  
    return (
        <div className="mt-desktop-10 mt-mobile-8 mt-tablet-8 mt-widescreen-10 layoutContainer">
        <main className="layoutMain">
          <div class="flex direction-column">
            <div class="flex flex-col mb-12 p-5 styles_container__0sZXQ">
             
            </div>

            <div>
              
              <div data-test="homepage-section-0">
                <div>
                  <div>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <aside className="sidebarWithSeparator right">
                <Topic/>
         
        </aside>
      </div>

    );
}

export default Community