import React from "react";
import { Navbar } from "../layouts";
import { useState, useEffect } from "react";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import "../assets/styles/Tools.scss";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
function Tools() {
  const [tools, setTools] = useState();
  const [FollowIcon, setFollowIcon] = useState(false);

  useEffect(() => {
    //getting all the tools
    const dbRef = collection(db, "Tools");
    onSnapshot(dbRef, (docsSnap) => {
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
    <div className="home-page-SPw">
      <Navbar />
      <div className="tools-wrapper">
        <div className="tools-section-ngu">
          <section id="focus" className="focus-section dark-mode">
            <div className="container-lg py-5">
              <div className="container px-0">
                <div className="row"></div>
              </div>
              <div className="row row-cols-1 row-cols-md-3 g-4">
                {tools?.map((tool) => (
                  <div className="col">
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
                            <span class="material-symbols-outlined">
                              delete
                            </span>
                          </span>
                        </div>
                      </div>

                      <div className="card-body">
                        <h3 className="card-title">{tool.Name}</h3>
                        <div className="text-left my-2">
                          <div className="sub-cat text-truncate">
                            <span className="badge rounded-pill bg-category text-uppercase">
                              {tool.Price}
                            </span>{" "}
                          </div>
                        </div>
                        <p
                          className="card-text description"
                          id="tool-description"
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
                              to={`/ToolDetails/${tool.id}`}
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
