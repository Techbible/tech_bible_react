import React, { useEffect } from "react";
import { Navbar } from "../../layouts";
import "../../assets/styles/addTool.css";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";
import { collection, doc, onSnapshot } from "firebase/firestore";
import { auth, db } from "../../firebase";

import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

function AddTool() {
  const { currentUser } = useContext(AuthContext);
  const [UID, setUID] = useState(currentUser?.uid);

  useEffect(() => {
    setUID(currentUser?.uid);
  }, [currentUser?.uid]);

  const [Name, setName] = useState("");
  const [Description, setDescription] = useState("");
  const [Price, setPrice] = useState("");
  const [img, setImg] = useState(null);

  const [categories, setCategories] = useState();
  const [isAdmin, setIsAdmin] = useState();

  //getting the categories
  const dbRef = collection(db, "Categories");
  onSnapshot(dbRef, (docsSnap) => {
    const CategoriesArray = [];
    docsSnap.forEach((doc) => {
      // console.log(doc.data());
      CategoriesArray.push(doc.data());
    });
    // console.log(CategoriesArray);
    setCategories(CategoriesArray);
  });

  useEffect(() => {
    console.log(1, UID);
    const listen = onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log(2, user);
        setUID(user.uid);
        onSnapshot(doc(db, "Users", UID), (doc) => {
          console.log(doc.data());
          setIsAdmin(doc.data().isAdmin);
        });
      }
    });
    console.log(isAdmin);
    return listen();
  }, []);

  return (
    <div className="home-page-SPw">
      <Navbar />

      <div className="addTools-wrapper">
        {isAdmin ? (
          <div className="form">
            <h1>Add a Tool</h1>
            <input type="file" />
            <input type="text" placeholder="Tool Name (Canvas, Adobe XD..)" />
            <input type="text" placeholder="Pricing" />
            <select name="categories">
              <option>Select a Category</option>
              {categories?.map((c) => (
                <option value={c.id}>{c.Category}</option>
              ))}
            </select>
            <textarea placeholder="Tool Description"></textarea>
            <button>+ Add</button>
          </div>
        ) : (
          <div className="flex-container">
            <div className="content-container">
              <div className="form-container">
                <form action="/action_page.php">
                  <h1>Reach out</h1>
                  <br />
                  <br />
                  <span className="subtitle">USERNAME:</span>
                  <br />
                  <input type="text" name="username" />
                  <br />
                  <span className="subtitle">EMAIL:</span>
                  <br />
                  <input type="email" name="email" />
                  <br />
                  <span className="subtitle">Message:</span>
                  <br />
                  <input type="text" name="message" />
                  <br />
                  <span className="subtitle">About:</span>
                  <br />
                  <select className="categories">
                    <option disabled defaultChecked>
                      I would like to
                    </option>
                    <option value="">Suggest a new category</option>
                    <option value="">Suggest a new product</option>
                    <option value="">Hire to consult</option>
                    <option value="">Ask a Question</option>
                  </select>
                  <br />
                  <br />
                  <input type="submit" value="SUBMIT" className="submit-btn" />
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AddTool;
