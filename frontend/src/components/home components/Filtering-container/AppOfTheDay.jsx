import React from "react";

const AppOfTheDay = ({ tool }) => {
  return (
    <div className="appOfTheDay-container duration-500 ease-in-out transform hover:scale-105 my-4">
      {/********** App of the day **********/}
      <h2 className="medium text-[18px] mb-5 mb-lg-5  ">App of the day</h2>
      <div className="flex flex-col md:flex-row items-center mb-4">
        {tool ? (
          <img
            src={tool?.Icon}
            // alt="tool"
            className="h-[73px] w-[73px] md:h-[73px] md:w-[73px] rounded-[6px] mr-3 mb-0 md:mb-0 mb-3"
          />
        ) : (
          <div></div>
        )}
        <div>
          <h2 className="font-bold text-[15px] mb-2">{tool?.Name}</h2>
          <p className="text-sm text-[#FFFFFF] text-[12px] w-[274px] noOfLines-2">
            {tool?.Description}
          </p>
        </div>
      </div>
      {/**********End App of the day **********/}
    </div>
  );
};

export default AppOfTheDay;
