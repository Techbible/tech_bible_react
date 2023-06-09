import React, { useContext, useEffect, useState } from "react";
import { CategoriesData } from "../../dataJson/CategoriesData";
// import axios from "axios";
import { BASE_URL } from "../../config/mongo";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
function NewDiscussion() {
  const { currentUser } = useContext(AuthContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Cybersecurity");
  const [userId, setUserID] = useState("");
  //const axios = require("axios");

  // async function checkMoralImplications(inputText) {
  //   const apiKey = "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";
  //   const apiUrl =
  //     "https://api.openai.com/v1/engines/davinci-codex/completions";

  //   try {
  //     const response = await axios.post(
  //       apiUrl,
  //       {
  //         prompt: `Is the following text morally acceptable? "${inputText}"`,
  //         max_tokens: 1,
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${apiKey}`,
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     const completion = response.data.choices[0].text.trim();
  //     return completion === "Yes";
  //   } catch (error) {
  //     console.error("Error:", error);
  //     return null;
  //   }
  // }

  useEffect(() => {
    setUserID(currentUser?.uid);
  }, [currentUser]);
  const createDiscussion = async () => {
    const parentId = null;
    const response = await axios.post(`${BASE_URL}/create-discussion`, {
      userId,
      title,
      description,
      category,
      parentId,
    });
    window.location.reload();
    // Handle successful response
    console.log("Discussion Created successfully:", response.data);
    navigate("/community");
  };
  const navigate = useNavigate();
  const handleCreateDiscussion = async (e) => {
    e.preventDefault();

    if (!title || !description || !category || !userId) {
      console.error("Missing required fields");
      console.log(title, description, category, userId);
      return;
    }

    try {
      console.log(title, description, category, userId);

      // const inputText = { description };
      // checkMoralImplications(inputText).then((result) => {
      //   if (result === null) {
      //     alert("The result is null.");
      //   } else if (result) {
      //     console.log("The text is morally acceptable.");
      createDiscussion();
      //   } else {
      //     alert("The text is morally unacceptable.");
      //   }
      // });

      // You can perform additional actions here, such as displaying a success message or redirecting to another page
    } catch (error) {
      // Handle error
      console.error("Error creating discussion:", error);
    }
  };

  return (
    <div className="w-full max-w-sm p-6 bg-[#1C1C1C] rounded shadow-md w-[90%] mt-4 ">
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
            className="w-full px-3 py-2 border rounded bg-white text-black focus:outline-none focus:border-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Description..."
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
            className="w-full px-3 py-2 border rounded bg-white text-black focus:outline-none focus:border-blue-500"
            placeholder="Write a title"
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
          <select
            className="bg-white text-black rounded-md"
            name="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option disabled selected>
              - Select a Category -
            </option>
            {CategoriesData?.map((group) => (
              <option value={group.groupName}>{group.groupName}</option>
            ))}
          </select>
        </div>

        <div className="flex justify-center mt-10">
          <button
            type="submit"
            className="bg-[#EF4722] hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewDiscussion;
