import React from "react";

const AppOfTheDay = () => {
  return (
    <div className="appOfTheDay-container">
      {/********** App of the day **********/}
      <h2 className="fw-bold mb-5 mb-lg-5">App of the day</h2>
      <div class="flex flex-col md:flex-row items-center mb-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/2101px-Adobe_XD_CC_icon.svg.png"
          alt="Your Image"
          class="h-14 w-14 md:h-16 md:w-16 mr-3 mb-0 md:mb-0"
        />
        <div>
          <h2 class="font-bold text-lg md:text-xl">Your Title Here</h2>
          <p class="text-sm text-gray-600 md:text-base">
            Browse 1000+ of the latest tech tools per task Updated daily
          </p>
        </div>
      </div>
      {/**********End App of the day **********/}
    </div>
  );
};

export default AppOfTheDay;
