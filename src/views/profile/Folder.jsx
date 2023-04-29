import React from 'react'


function Folder({index,image, isRowsView,item}) {
  return (
   <div>
{
    isRowsView?
    (
    <div class="folder-item max-w-sm bg-dark lg:max-w-full lg:flex">
        <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
         style={{backgroundImage: `url(${item.photo})`, title:"Woman holding a mug"}}>
        </div>
        <div class="w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-dark rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div class="mb-8">
            <div class="text-gray-900 text-white font-bold text-xl mb-2">{item.name}</div>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{item.category}</span>
            </div>
          </div>
      </div>
    )
    :
    (
        <div class="folder-item max-w-sm bg-dark text-center rounded overflow-hidden shadow-lg">
        <img class="w-62 h-48" src={item.photo} alt="Sunset in the mountains" />
        <div class="px-6 py-4 bg-dark">
          <div class="font-bold text-white text-xl mb-2">{item.name}</div>
        </div>
        <div class="px-6 pt-4 pb-2 bg-dark">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{item.category}</span>
        </div>
      </div>
     )
}

  </div>
  )
}

export default Folder
