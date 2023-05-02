import React from "react";

function YouMightLikeItem({ title, description, icon, category, }) {
  return (
    <article class="flex hover:animate-background rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-500 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] mb-4 sm:mb-0 sm:mr-4 duration-300 ease-in-out transform hover:scale-105">
      <div class="rounded-[10px] bg-black p-4 !pt-20 sm:p-6">
        <img
          src={icon}
          class="rounded-sm h-10 w-10 mb-5"
          alt="tool"
        />

        <h3 class="mt-0.5 font-medium text-white text-[15px] ">{title}</h3>
        <h class="text-grey-100 text-opacity-20 text-[12px] noOfLines-2">
          {description}
        </h>

        <div class="mt-4 flex-wrap gap-1">
          <span class="whitespace-nowrap rounded-2 bg-white px-3 py-0.5 text-xs text-black fw-700">
            Visit
          </span>
        </div>
      </div>
    </article>
  );
}

export default YouMightLikeItem;
