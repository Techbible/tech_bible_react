import React from 'react'
import { Link } from 'react-router-dom'

const AdminSpace = () => {
  return (
    <div>
     <div className="bg-black min-h-screen flex items-center justify-center">
  <div className="container mx-auto py-10">
    <div className="flex flex-wrap justify-center lg:justify-start gap-6">
      <div className="flex items-center justify-center p-8 bg-gray-800 rounded-lg w-full lg:w-1/3">
        <Link to="/news" className="text-white hover:text-gray-200">
          <img src="https://rutecprojekt.de/assets/images/2/News_AdobeStock_116225048_neu-de28855b.jpg" alt="News" className="w-32 h-32" />
          <h1 className="text-2xl font-semibold ml-8">News</h1>
        </Link>
      </div>
      <div className="flex items-center justify-center p-8 bg-gray-800 rounded-lg w-full lg:w-1/3">
        <Link to="/tools" className="text-white hover:text-gray-200">
          <img src="https://www.smallbizdaily.com/wp-content/uploads/2019/04/shutterstock_149263820-min.jpg" alt="Tools" className="w-32 h-32" />
          <h1 className="text-2xl font-semibold ml-8">Tools</h1>
        </Link>
      </div>
      <div className="flex items-center justify-center p-8 bg-gray-800 rounded-lg w-full lg:w-1/3">
        <Link to="/users" className="text-white hover:text-gray-200">
          <img src="https://zahiraccounting.com/en-my/wp-content/uploads/2015/10/zahir-accounting-software-have-more-than-60.000-users.png" alt="Users" className="w-32 h-32" />
          <h1 className="text-2xl font-semibold ml-8">Users</h1>
        </Link>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default AdminSpace
