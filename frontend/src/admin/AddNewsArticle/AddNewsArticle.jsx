import axios from "axios";
import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../config/mongo";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
function AddNewsArticle() {
  const { isAdmin } = useContext(AuthContext);
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [ImageURL, setImageURL] = useState("");
  const [URL, setURL] = useState("");
  const [Provider, setProvider] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAdmin) {
      navigate("/news");
    }
  }, []);
  
  const handleAddArticle = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}/addArticle`, {
        Title,
        Description,
        ImageURL,
        URL,
        Provider,
      });
      // Handle successful response
      console.log("Post shared successfully:", response.data);
      navigate("/news");
      // You can perform additional actions here, such as displaying a success message or redirecting to another page
    } catch (error) {
      // Handle error
      console.error("Error sharing post:", error);
      // You can display an error message or perform any necessary error handling
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <div className="w-full max-w-sm p-6 bg-gray-800 rounded shadow-md">
        <h2 className="text-2xl font-semibold text-white text-center mb-4">
          Share a New Article
        </h2>
        <form onSubmit={handleAddArticle}>
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
              name="title"
              className="w-full px-3 py-2 border rounded bg-gray-700 text-white focus:outline-none focus:border-blue-500"
              value={Title}
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
              name="description"
              rows="3"
              className="w-full px-3 py-2 border rounded bg-gray-700 text-white focus:outline-none focus:border-blue-500"
              value={Description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="url"
              className="block text-gray-300 text-sm font-bold mb-2"
            >
              URL
            </label>
            <input
              type="text"
              id="url"
              name="url"
              className="w-full px-3 py-2 border rounded bg-gray-700 text-white focus:outline-none focus:border-blue-500"
              value={URL}
              onChange={(e) => setURL(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="imageurl"
              className="block text-gray-300 text-sm font-bold mb-2"
            >
              Thumbnail URL
            </label>
            <input
              type="text"
              id="imageurl"
              name="imageurl"
              className="w-full px-3 py-2 border rounded bg-gray-700 text-white focus:outline-none focus:border-blue-500"
              value={ImageURL}
              onChange={(e) => setImageURL(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="Provider"
              className="block text-gray-300 text-sm font-bold mb-2"
            >
              The Provider
            </label>
            <input
              type="text"
              id="Provider"
              name="Provider"
              className="w-full px-3 py-2 border rounded bg-gray-700 text-white focus:outline-none focus:border-blue-500"
              value={Provider}
              onChange={(e) => setProvider(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
            >
              Share
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default AddNewsArticle;
