import React from 'react'


function Folder({isRowsView,item}) {
  return (
   <div>
{
    isRowsView?
    (
    <div class="folder-item max-w-sm bg-dark lg:max-w-full lg:flex">
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
