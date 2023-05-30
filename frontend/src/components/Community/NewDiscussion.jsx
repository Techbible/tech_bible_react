import React, {useContext, useEffect, useState} from "react";
import { CategoriesData } from "../../dataJson/CategoriesData";
import axios from "axios";
import { BASE_URL } from "../../config/mongo";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
function NewDiscussion() {
  const { currentUser} = useContext(AuthContext);

  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");
  const [category,setCategory] = useState("");
  const [userId,setUserID] = useState("");

  useEffect(()=>{
setUserID(currentUser?.uid)
  },[currentUser])

  const navigate = useNavigate();
  const handleCreateDiscussion = async (e) => {
    e.preventDefault();
  
    if (!title || !description || !category || !userId) {
      console.error('Missing required fields');
      console.log(title,description,category,userId);
      return;
    }
  
    try {
      console.log(title,description,category,userId);

      const response = await axios.post(`${BASE_URL}/create-discussion`, {
        userId,
        title,
        description,
        category,
      });
      // Handle successful response
      console.log('Discussion Created successfully:', response.data);
      navigate('/community');
      // You can perform additional actions here, such as displaying a success message or redirecting to another page
    } catch (error) {
      // Handle error
      console.error('Error creating discussion:', error);
    }
  };
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <div className="w-full max-w-sm p-6 bg-gray-800 rounded shadow-md">
        <h2 className="text-2xl font-semibold text-white text-center mb-4">
          Create New Discussion
        </h2>
        <form onSubmit={handleCreateDiscussion}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-300 text-sm font-bold mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="Title"
              className="w-full px-3 py-2 border rounded bg-gray-700 text-white focus:outline-none focus:border-blue-500"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-300 text-sm font-bold mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              name="Description"
              rows="3"
              className="w-full px-3 py-2 border rounded bg-gray-700 text-white focus:outline-none focus:border-blue-500"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="Category"
              className="block text-gray-300 text-sm font-bold mb-2"
            >
              Category
            </label>
            <select name="Category" value={category} onChange={(e)=>setCategory(e.target.value)}>
            <option disabled selected>- Select a Category -</option>
                {CategoriesData?.map((group) => (
                  <option value={group.groupName}>{group.groupName}</option>
                ))}
            </select>
          </div>


          <div className="flex justify-center mt-10">
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewDiscussion;
