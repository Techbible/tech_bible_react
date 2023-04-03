import React from "react";
import { Navbar } from "../../layouts";
import "../../assets/styles/addTool.css";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";


function AddTool() {
    const [Name, setName] = useState("");
    const [Description, setDescription] = useState("");
    const [Price, setPrice] = useState("");
    const [img, setImg] = useState(null);

    const [categories, setCategories] = useState();




        //getting the categories
        const dbRef = collection(db, "Categories");
        onSnapshot(dbRef, (docsSnap) => {
          const CategoriesArray = [];
          docsSnap.forEach((doc) => {
            // console.log(doc.data());
            CategoriesArray.push(doc.data());
          });
          console.log(CategoriesArray);
          setCategories(CategoriesArray);
        });

  return (
    <div className="home-page-SPw">
      <Navbar />

      <div className="addTools-wrapper">
        <div className="form">
          <h1>Add a Tool</h1>
          <input type="file" />
          <input type="text" placeholder="Tool Name (Canvas, Adobe XD..)" />
          <input type="text" placeholder="Pricing" />
          <select name="categories">
          <option>Select a Category</option>
          {categories?.map((c)=>(<option value={c.id}>{c.Category}</option>))}
     
         </select>
          <textarea placeholder="Tool's Description"></textarea>
          <button>+ Add</button>
        </div>
      </div>
    </div>
  );
}

export default AddTool;
