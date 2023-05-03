import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import "../assets/styles/tools/Tools.scss";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";

import { db } from "../config/firebase";

function Tools() {
  const [tools, setTools] = useState();
  const [FollowIcon, setFollowIcon] = useState(false);
  const [IsAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const { currentUser, isAdmin } = useContext(AuthContext);


  useEffect(() => {
    //Re-Checking if the user is admin or not
    if(!isAdmin){
      alert('access denied!')
      navigate('/')
    }
    notify('Welcome to the Admin Space')

    //getting all the tools
    const ToolRef = collection(db, "Tools");
    onSnapshot(ToolRef, (docsSnap) => {
      const ToolsArray = [];
      docsSnap.forEach((doc) => {
        // console.log(doc.data());
        ToolsArray.push(doc.data());
      });
      // console.log(ToolsArray);
      setTools(ToolsArray);
    });
  }, []);



  const notify = (message) =>
    toast.success(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  const ErrorNotify = (message) =>
    toast.success(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

//delete alert
  const deleteTool = (id) => {
    if(window.confirm('Are you sure that you want to delete this item?')) {
    deleteDoc(doc(db, "Tools", id))
      .then(() => {
        notify("The Tool has been deleted on successfully");
      })
      .catch(() => {
        alert("Something went wrong");
      });
    }
  };

  return (
    <div className="tools-container">
      <div className="tools-wrapper">
        <div className="tools-section-ngu">
        <h2 className="mt-10">The total number of tools is : {tools?.length}</h2>

          <section id="focus" className="focus-section dark-mode">
            <div className="container-lg py-5 px-5">
              <div className="row sm:row-cols-1 lg:row-cols-md-3  md:row-cols-md-2 g-4 mt-5">
                {tools?.map((tool) => (
                  <div className="col" key={tool.id}>
                    <div className="card shadow-sm h-100">
                      <div className="card-image">
                        <img
                          src={tool.Icon}
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="image-overlay">
                          <span
                            className="delete-btn"
                            onClick={() => deleteTool(tool.id)}
                          >
                            <span className="material-symbols-outlined">
                              delete
                            </span>
                          </span>
                        </div>
                      </div>

                      <div className="card-body">
                        <Link to="/"><h3 className="card-title">{tool.Name}</h3></Link>
                        <div className="text-left my-2">
                          <div className="sub-cat text-truncate">
                            <span className="badge rounded-pill bg-category text-uppercase">
                              {tool.Price}
                            </span>{" "}
                          </div>
                        </div>
                        <p
                          className="card-text description"
                        >
                          {tool.Description}
                        </p>
                      </div>
                      <div className="card-footer py-3">
                        <div className="card-footer__info">
                          <span>01/04/2021</span>
                          <span className="read-more">
                            <Link
                              className="text-uppercase read-more-2"
                              to={`/newtooldetails/${tool.id}`}
                            >
                              Read more{" "}
                            </Link>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default Tools;
