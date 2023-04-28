import React from 'react'

function YouMightLikeItem({title,description}) {
  return (
    <article class="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-300 to-purple-300 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] mb-4 sm:mb-0 sm:mr-4 duration-300 ease-in-out transform hover:scale-105">
      <div class="rounded-[10px] bg-black p-4 !pt-20 sm:p-6">
        {/* <time datetime="2022-10-10" class="block text-xs text-white-500">10th Oct 2022</time> */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/2101px-Adobe_XD_CC_icon.svg.png"
          class="rounded-sm h-10 w-10"
          alt="tool"
        />

        <h3 class="mt-0.5 text-lg font-medium text-white">Tool Title</h3>
        <h class="text-grey-100 text-opacity-20">
          Browse 1000+ of the latest tech tools per task Updated daily
        </h>

        <div class="mt-4 flex flex-wrap gap-1">
          <span class="whitespace-nowrap rounded-2 bg-white px-3 py-0.5 text-xs text-black fw-700">
            Visit
          </span>
        </div>
      </div>
    </article>
  )
}

export default YouMightLikeItem
