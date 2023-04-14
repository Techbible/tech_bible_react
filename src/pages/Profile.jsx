//TODO : STRUCTURING THE PROFILE, AND SPLICING IT INTO TINY COMPONENTS

//Imports
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState, useRef, useReducer } from "react";
import { auth, db } from "../firebase";
import { Bio } from "../components";
import { Link, useNavigate } from "react-router-dom";
import {
  collection,
  doc,
  getDocs,
  limit,
  onSnapshot,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import Modal from "react-modal";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "../assets/styles/profile.css";

import { LikeMethods } from "../Methods";






const Profile = () => {

/*****************************Importing Ready Methods START******************************* */
  // referencing our methods
  const LikeMethodsRef = useRef(null);



  const { currentUser } = useContext(AuthContext);

  const [authUser, setAuthUser] = useState(null);
  const [addBio, setAddBio] = useState(false);
  const [addInterests, setAddInterests] = useState(true);
  const [updateBio, setUpdateBio] = useState(false);
  const [updateInterests, setUpdateInterests] = useState(false);

  const [LikedTools, setLikedTools] = useState([]);
  const [interests, setIntersts] = useState(null);
  const [bio, setBio] = useState("");
  const [categories, setCategories] = useState();
  const [checkedInterests, setcheckedInterests] = useState([]);

  const [reducerValue,forceRender] = useReducer(x => x+1,0);

  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    uid: "",
    photo: "",
    username: "",
    bio: "",
    list: [],
    interests: [],
  });

  //Handling Interests with Checkbox
  const handleInterestCheck = (event) => {
    const { value, checked } = event.target;

    let interests = checkedInterests;
    if (checked) {
      interests = checkedInterests;
      interests.push(value);
      setcheckedInterests(interests);
      console.log(checkedInterests);
    } else {
      interests = interests.filter((interest) => interest !== value);
      setcheckedInterests(interests);
    }
  };
  //_______________________________Modal Configs_____________________________________________
  //Modal Styles
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "rgba(0,0,0,0.8)",
      color: "#fff",
      borderRadius: "40px",
    },
  };

  Modal.setAppElement("#root");
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }
  function closeModal() {
    setIsOpen(false);
  }
  //*************************END Modal Configs*********************************

  //_______________________________Inserting Changes_____________________________________________
  const handleInterestsChange = async () => {
    //BUG : *
    try {
      const UserRef = doc(db, "Users", userData.uid);
      const data = { interests: checkedInterests };
      await updateDoc(UserRef, data)
        .then((UserRef) => {
          console.log(
            "A New Document Field has been added to an existing document"
          );
        })
        .catch((error) => {
          console.log(error);
        });
      setAddInterests(false);
      setUpdateInterests(false);
      closeModal();
    } catch (error) {
      console.log(error);
    }
  };
  //************************END Inserting Changes*********************************

  //loading the liked tools by the currentUser
  const LoadLikedTools = async () => {
    const ToolsRef = collection(db, "Tools");
    const LikedOnes = [];
    const q = query(
      ToolsRef,
      where("LikedBy", "array-contains", currentUser?.uid),
      limit(10)
    );
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        LikedOnes.push(doc.data());
        setLikedTools(LikedOnes);
        console.log(LikedTools);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    LoadLikedTools()
  },[reducerValue]);

  //Verifying Sign in and loading users infos on load
  useEffect(() => {
    LoadLikedTools();
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);

        const unsub = onSnapshot(doc(db, "Users", user.uid), (doc) => {
          setUserData({
            uid: doc.data().uid,
            photo: doc.data().photo,
            username: doc.data().username,
            bio: doc.data().bio,
            interests: doc.data().interests,
            list: doc.data().list,
          });
        });
        userData.interests.length > 0
          ? setAddInterests(false)
          : setAddInterests(false);
      } else {
        navigate("/signin");
        setAuthUser(null);
      }
    });

    //getting the available categories
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

    return listen();
  }, []);

  //To add/Update a Bio
  const UpdatingBio = async () => {
    try {
      const UserRef = doc(db, "Users", userData.uid);
      await updateDoc(UserRef, { bio: bio });
      setAddBio(false);
      setUpdateBio(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUnlike = (toolID)=>{
    LikeMethodsRef.current.Unlike(toolID)
    forceRender();
  }

  return (
    <div>
    <LikeMethods ref={LikeMethodsRef}/>
      <div className="profile-about-NVb">
        <div className="auto-group-q16m-m1w">
          <Link to="/">
            <div className="tech-bible-logo-wad">
              <p className="tech-bible-Kr5">
                Tech
                <br />
                Bible
              </p>
            </div>
          </Link>
          <div className="auto-group-nrn5-Tau">
            <div className="auto-group-jkx1-qLZ">
              <p className="all-tools-cVj">All tools</p>
            </div>
            <Link to="/addTool">
              <p className="submit-your-tool-Rbb">Submit your tool</p>
            </Link>
            <p className="resources-cvy">Resources</p>
            <p className="community-q33">Community</p>
            <a
              href="https://www.tiktok.com/discover/TechBible?lang=en"
              target="_blank"
              rel="noreferrer"
            >
              <img
                alt="pic"
                className="layer1-3uo"
                src="./assets/layer1-xyT.png"
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCkyxFbFun3bjehZAdkVQgZw"
              title="Youtube"
              target="_blank"
              rel="noreferrer"
            >
              <img
                alt="pic"
                className="white-youtube-icon-png-28-1-Cw7"
                src="./assets/white-youtube-icon-png-28-1.png"
              />
            </a>
            <a
              href="https://www.instagram.com/my.techbible/"
              title="instagram"
              target="_blank"
              rel="noreferrer"
            >
              <img
                alt="pic"
                className="pngfind-1-uU9"
                src="./assets/pngfind-1.png"
              />
            </a>
            <div>
              {authUser ? (
                <div className="user-info-container">
                  <Link to="/profile">
                    <div className="user-info">
                      <div
                        className="user"
                        style={{ backgroundImage: `url(${userData.photo})` }}
                      ></div>
                      <div className="username">{userData.username}</div>
                    </div>
                  </Link>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="auto-group-7qjo-JyT">
          <div className="auto-group-x7xy-7AD">
            <div
              className="user"
              style={{
                backgroundImage: `url(${userData.photo})`,
                width: "86px",
                height: "86px",
              }}
            ></div>
          </div>
          <div className="auto-group-fpf7-J1j">
            <div className="auto-group-e94r-ibF">
              <p className="miro99-XYh">{userData.username}</p>
              <div className="auto-group-r9tj-kRT">Edit</div>
            </div>
            <p className="sheesh-digital-marketing-and-graphic-design-adobe-suites-1kh">
              {userData.bio}
            </p>
            <div className="auto-group-nshf-mtH">
              <Link to='/list'><div className="auto-group-sgto-To3">My List</div></Link>
            </div>
          </div>
        </div>
        <p className="about-Djb">About</p>
        <p className="recently-browsed-dYR">Liked Tools</p>
        <div className="auto-group-zyow-V4q">
          <div className="auto-group-jo33-GE1">
            <div className="auto-group-lzzw-bGH">
              <p className="bio-JAh">Bio</p>

              <span className="sheesh-QDj">
                {userData.bio ? (
                  <div>
                    {updateBio ? (
                      <div>
                        <input
                          className="profile-input"
                          placeholder={userData.bio}
                          onChange={(e) => setBio(e.target.value)}
                          type="text"
                        />
                        <div>
                          <span
                            onClick={() => setUpdateBio(false)}
                            className="profile-cancel"
                          >
                            Cancel
                          </span>
                          <span
                            onClick={() => UpdatingBio()}
                            className="profile-btn-outlined"
                          >
                            Update
                          </span>
                        </div>
                      </div>
                    ) : (
                      userData.bio
                    )}

                    {updateBio ? (
                      <div></div>
                    ) : (
                      <span
                        onClick={() => setUpdateBio(true)}
                        className="profile-btn-outlined"
                      >
                        Edit
                      </span>
                    )}
                  </div>
                ) : (
                  <div className="bio">
                    {addBio ? (
                      <input
                        className="profile-input"
                        placeholder="You can add your bio here"
                        onChange={(e) => setBio(e.target.value)}
                        type="text"
                      />
                    ) : (
                      <span style={{ color: "red" }}>
                        you don't have a bio yet
                      </span>
                    )}

                    {addBio ? (
                      <div>
                        <span
                          onClick={() => setAddBio(false)}
                          className="profile-cancel"
                        >
                          Cancel
                        </span>
                        <span
                          onClick={() => UpdatingBio()}
                          className="profile-btn-outlined"
                        >
                          Submit
                        </span>
                      </div>
                    ) : (
                      <span
                        onClick={() => setAddBio(true)}
                        className="profile-btn-outlined"
                      >
                        + Add
                      </span>
                    )}
                  </div>
                )}
              </span>
            </div>

            <div
              className="auto-group-rpbb-gww"
              style={{ position: "relative" }}
            >
              <p className="interests-bp1">Interests</p>
              <br />
              <p className="digital-marketing-and-graphic-design-adobe-suites-KV7">
                {userData.interests.length > 0 ? (
                  <div className="interests-wrapper-V">
                    {updateInterests ? (
                      <div>
                        <input
                          className="profile-input"
                          placeholder={userData.interests}
                          onChange={(e) => setIntersts(e.target.value)}
                          type="text"
                        />
                        <div id="interests-action-btns">
                          <span
                            onClick={() => setUpdateInterests(false)}
                            className="profile-cancel"
                          >
                            Cancel
                          </span>
                          <span
                            onClick={() => handleInterestsChange(userData.uid)}
                            className="profile-btn-outlined"
                          >
                            Update
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="Intrests-container">
                        {userData.interests.map((i, index) => (
                          <span className="Interest" key={index}>
                            {i}
                          </span>
                        ))}
                      </div>
                    )}

                    {updateInterests ? (
                      <div></div>
                    ) : (
                      <span
                        onClick={openModal}
                        className="profile-btn-outlined-2"
                      >
                        Edit
                      </span>
                    )}
                  </div>
                ) : (
                  <div>
                    {addInterests ? (
                      <input
                        className="profile-input"
                        placeholder="Marketing, SEO ..."
                        onChange={(e) => setIntersts(e.target.value)}
                        type="text"
                      />
                    ) : (
                      <span style={{ color: "red" }}>
                        you don't have any interests yet
                      </span>
                    )}

                    {addInterests ? (
                      <div>
                        <span
                          onClick={() => setAddInterests(false)}
                          className="profile-cancel"
                        >
                          Cancel
                        </span>
                        <span
                          onClick={() => handleInterestsChange(userData.uid)}
                          className="profile-btn-outlined"
                        >
                          Submit
                        </span>
                      </div>
                    ) : (
                      <span
                        // onClick={() => setAddInterests(true)}
                        onClick={openModal}
                        className="profile-btn-outlined-2"
                      >
                        + Add
                      </span>
                    )}
                  </div>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="liked-tools-container">
        {LikedTools ? (
          LikedTools.map((LikedTool) => (
            <div className="tool-container">
              <img className="tool-logo" src={LikedTool.Icon} alt="" />
              <div className="tool-data">
              <Link to={`/ToolDetails/${LikedTool.id}`}> <div className="tool-title">{LikedTool.Name}</div></Link>
                <div className="tool-description">{LikedTool.Description}</div>
                <div className="tool-comments">
                <img
                alt="tech bible"
                className="layer1-xx5"
                src="/assets/layer1-xPw.png"
              />
                {LikedTool.Comments}
                </div>
              </div>
              <div className="tool-icons">
               <img
                  alt="tech bible"
                  className="like-eGV"
                  src="/assets/liked.png"
                  title="unfollow"
                  onClick={()=>handleUnlike(LikedTool.id)}

                        />
                        <div className="save-3ZX">
                          <img
                            alt="tech bible"
                            className="ellipse-4-v7X"
                            src="/assets/ellipse-4-ray.png"
                          />
                          <img
                            alt="tech bible"
                            className="item-32360-1-iJH"
                            src="/assets/-aLV.png"
                          />
                        </div>
              </div>
            </div>
          ))
        ) : (
          <div>you didn't like any tools yet</div>
        )}
      </div>

      <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
            Please choose your interests :{" "}
          </h2>
          <span id="close-button" onClick={closeModal}>
            X
          </span>
          <div className="flex inner-modal">
            {categories?.map((categorie) => (
              <div className="flex interests-wrapper">
                <span className="Interest">
                  <input
                    type={"checkbox"}
                    value={`${categorie.Category}`}
                    onChange={(e) => handleInterestCheck(e)}
                    checked={checkedInterests.includes(`${categorie.Category}`) ? true : null}/>
                  &nbsp;
                  {categorie.Category}
                </span>
              </div>
            ))}
          </div>
          <span
            className="profile-btn-outlined-3"
            onClick={handleInterestsChange}
          >
            Save
          </span>
        </Modal>
      </div>
    </div>
  );
};

export default Profile;
