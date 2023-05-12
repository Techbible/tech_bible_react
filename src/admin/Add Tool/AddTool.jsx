import React, { useEffect } from "react";
import "../../assets/styles/tools/addTool.css";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";

import { collection, doc, onSnapshot, setDoc } from "firebase/firestore";

import { auth, db, storage } from "../../config/firebase";

import { v4 as uuid } from "uuid";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

function AddTool() {
  const { currentUser } = useContext(AuthContext);
  const [UID, setUID] = useState(currentUser?.uid);
  const navigate = useNavigate();
  useEffect(() => {
    setUID(currentUser?.uid);
  }, [currentUser?.uid]);

  const [Name, setName] = useState("");
  const [Description, setDescription] = useState("");
  const [URL, setURL] = useState("");
  const [VideoURL, setVideoURL] = useState("");
  const [Pricing, setPricing] = useState("");
  const [Category, setCategory] = useState("");
  const [img, setImg] = useState(null);
  const [ImgURL, setImgURL] = useState();

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
        // console.log(2, user);
        setUID(user.uid);
        onSnapshot(doc(db, "Users", UID), (doc) => {
          // console.log(doc.data());
          setIsAdmin(doc.data().isAdmin);
        });
      }
    });
    return listen();
  }, []);

  const handleAddTool = async () => {
    if (img) {
      const storageRef = ref(storage, `Tools/${img.name + "_" + uuid()}`);

      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        (error) => {
          //TODO:Handle Error
          //TODO: Link the store folder with the Tools document
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await setDoc(doc(db, "Tools", uuid()), {
              id: uuid(),
              Name: Name,
              Description: Description,
              Price: Pricing,
              VideoURL: VideoURL,
              URL: URL,
              CategoryID: Category,
              Likes: 0,
              Comments: 0,
              Icon: downloadURL,
            });
          });
        }
      );
    } else {
      const randomId = uuid();
      await setDoc(doc(db, "Tools", randomId), {
        id: randomId,
        Name: Name,
        Description: Description,
        Price: Pricing,
        URL: URL,
        CategoryID: Category,
        Likes: 0,
        Comments: 0,
        Icon: ImgURL
          ? ImgURL
          : "https://cdn4.iconfinder.com/data/icons/social-media-flat-7/64/Social-media_Tiktok-512.png",
      });
      navigate("/tools");
    }
  };

  return (
    <div className="addtool-page mt-[4rem] ">
      <div className="addTools-wrapper">
        {isAdmin ? (
          <div className="form">
            <h1>Add a Tool</h1>
            <input type="file" onChange={(e) => setImg(e.target.files[0])} />
            <br />
            <br />
            <small>OR</small>
            <br />
            <input
              type="text"
              placeholder="Embed image URL"
              onChange={(e) => setImgURL(e.target.value)}
            />
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Tool Name (Canvas, Adobe XD..)"
            />
            <select
              className="combo-box"
              onChange={(e) => setPricing(e.target.value)}
            >
              <option selected disabled>
                Pricing
              </option>
              <option value="Freemium">Freemium</option>
              <option value="Free">Free</option>
              <option value="Paid">Paid</option>
            </select>

            <input
              type="text"
              onChange={(e) => setURL(e.target.value)}
              placeholder="embed URL : www.canvas.com"
            />
            <input
              type="text"
              onChange={(e) => setVideoURL(e.target.value)}
              placeholder="embed The Video URL : www.tiktok.com/..."
            />
            <select
              name="categories"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>Select a Category</option>
              {categories?.map((c, index) => (
                <option value={c.Category} key={index}>
                  {c.Category}
                </option>
              ))}
            </select>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Tool Description"
            ></textarea>
            <button onClick={() => handleAddTool()}>+ Add</button>
          </div>
        ) : (
          <div className="flex-container">
            <div className="content-container">
              <div className="form-container">
                <form>
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
