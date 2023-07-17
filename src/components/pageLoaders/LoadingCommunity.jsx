import React from "react";


const LoadingCommunity = () => {
  return (
    <div className="flex flex-col lg:flex-row mt-16">
      <main className="layoutMain xl:mt-15 lg:mt-15 ml:mt-15 sm:mt-12 flex-grow">
        <div className="flex flex-column align-items-center mb-16">
          <div className="cssload-container">
            <ul className="cssload-flex-container">
              <li>
                <span className="cssload-loading cssload-one"></span>
                <span className="cssload-loading cssload-two"></span>
                <span className="cssload-loading-center"></span>
              </li>
            </ul>
          </div>
        </div>
        {/* Rest of the code */}
      </main>
      <div className="sidebarWithSeparator ml-4 flex-grow-0">
        <div className="h-full flex flex-row">
          <div className="h-full border-l-2 border-white mr-5"></div>
          <div className="flex-grow mt-16 mr-4">
            {/* Rest of the code */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingCommunity;
