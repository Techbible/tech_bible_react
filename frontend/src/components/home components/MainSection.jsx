import React from "react";
import ToolSearch from "./ToolSearch";
import { Link } from "react-router-dom";

function MainSection() {
  return (
    <main className="layoutMain mb-5">
      <div className="flex direction-column">
        <div className="styles_container__0sZXQ flex direction-column mb-12 p-5">
          <button type="button" className="styles_reset__opz7w styles_icon__10p3X">
            <svg width="12" height="12" viewBox="0 0 12 12">
              <path
                d="M6 4.586l4.24-4.24a1 1 0 1 1 1.416 1.413L7.413 6l4.24 4.24a1 1 0 1 1-1.413 1.416L6 7.413l-4.24 4.24A1 1 0 1 1 .344 10.24L4.587 6 .347 1.76A1 1 0 1 1 1.757.343L6 4.587z"
                fillRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="color-white fontSize-24 fontWeight-600 noOfLines-undefined bg-purple-400 p-8">
            Welcome to Tech Bible! 👋
          </div>
          <div className="flex direction-row">
            <div className="color-lighter-grey fontSize-16 fontWeight-400 noOfLines-undefined">
              The place to launch and discover new tech Tools.
            </div>  
          </div>
        </div>
        <div>
          <div data-test="homepage-section-0">
            <div>
              <ToolSearch />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainSection;
