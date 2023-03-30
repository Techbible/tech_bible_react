//TODO : STRUCTURING THE PROFILE, AND SPLICING IT INTO TINY COMPONENTS

//Imports
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import {Bio} from "../components";
import { Link, useNavigate } from "react-router-dom";
import { collection, doc, onSnapshot, updateDoc } from "firebase/firestore";
import Modal from "react-modal";

const Profile = () => {
  const [authUser, setAuthUser] = useState(null);
  const [addBio, setAddBio] = useState(false);
  const [addInterests, setAddInterests] = useState(true);
  const [updateBio, setUpdateBio] = useState(false);
  const [updateInterests, setUpdateInterests] = useState(false);

  const [interests, setIntersts] = useState(null);
  const [bio, setBio] = useState("");
  const [categories, setCategories] = useState();
  const [checkedInterest, setCheckedInterest] = useState([]);

  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    uid: "",
    photo: "",
    username: "",
    bio: "",
    list: [],
    interests: [],
  }); 

  const Test = () =>{
    alert('haha')
  }

  const handleInterestCheck = (event) => {
    const { value, checked } = event.target;

    let interests = checkedInterest;
    if (checked) {
      interests = checkedInterest;
      interests.push(value);
      setCheckedInterest(interests);
      console.log(checkedInterest); 

    } else {
     interests = interests.filter(interest => interest !== value);
     setCheckedInterest(interests);
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
      backgroundColor: "#000",
      color: "#fff",
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
  const handleInterestsChange = async (id) => {
    try {
      const UserRef = doc(db, "Users", id);
      await updateDoc(UserRef, {interests : checkedInterest});
      setAddInterests(false);
      setUpdateInterests(false);
    } catch (error) {
      console.log(error);
    }
  };
  //************************END Inserting Changes*********************************

  //Verifying Sign in and loading users infos on load
  useEffect(() => {
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

    return listen();
  }, []);

  //To add/Update a Bio
  const UpdatingBio = async (id) => {
    try {
      const UserRef = doc(db, "Users", id);
      await updateDoc(UserRef, { bio: bio });
      setAddBio(false);
      setUpdateBio(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
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
            <p className="submit-your-tool-Rbb">Submit your tool</p>
            <p className="resources-cvy">Resources</p>
            <p className="community-q33">Community</p>
            <img
              alt="pic"
              className="layer1-3uo"
              src="./assets/layer1-xyT.png"
            />
            <img
              alt="pic"
              className="white-youtube-icon-png-28-1-Cw7"
              src="./assets/white-youtube-icon-png-28-1.png"
            />
            <img
              alt="pic"
              className="pngfind-1-uU9"
              src="./assets/pngfind-1.png"
            />
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
              <br />
              {userData.interests}
            </p>
            <div className="auto-group-nshf-mtH">
              <div className="auto-group-jzmb-aqj">About</div>
              <div className="auto-group-sgto-To3">My List</div>
              <div className="auto-group-3yw7-PaD">Share</div>
            </div>
          </div>
          <div className="auto-group-cmjk-Jah">Folder</div>
        </div>
        <p className="welcome-Roj">WELCOME,</p>
        <p className="about-Djb">About</p>
        <p className="recently-browsed-dYR">Recently browsed</p>
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
                            onClick={() => UpdatingBio(userData.uid)}
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
                          onClick={() => UpdatingBio(userData.uid)}
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
                  <div>
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
                      userData.interests.map((i) => (
                        <span className="Interest">{i}</span>
                      ))
                    )}

                    {updateInterests ? (
                      <div></div>
                    ) : (
                      <span
                        onClick={() => setUpdateInterests(true)}
                        className="profile-btn-outlined"
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
                        className="profile-btn-outlined"
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
        <div className="auto-group-xkhf-yZf">
          <div className="rectangle-87-Gof"></div>
          <div className="auto-group-dhc1-B9w">
            <p className="bibletech-iQm">BibleTech</p>
            <p className="browse-1000-of-the-latest-tech-tools-per-task-updated-daily-2gM">
              Browse 1000+ of the latest tech tools per task Updated daily
            </p>
          </div>
        </div>
        <div className="auto-group-3qfs-Jtm">
          <img
            alt="pic"
            className="ec-ac1c-4a9c-a816-a1fb1882abbe-1-CjF"
            src="./assets/ec-ac1c-4a9c-a816-a1fb1882abbe-1.png"
          />
          <div className="auto-group-rxhs-AZb">
            <p className="flutter-flow-G6q">Flutter Flow</p>
            <p className="build-native-android-and-ios-apps-without-code-yG9">
              Build native Android and IOS apps without code
            </p>
            <div className="auto-group-u4dj-4YV">
              <img
                alt="pic"
                className="layer1-P4y"
                src="./assets/layer1-gzH.png"
              />
              <p className="item-120-UMK">120</p>
              <p className="free-n77">Free</p>
              <p className="no-code-tool-JLM">No Code tool</p>
            </div>
          </div>
          <div className="auto-group-titd-QuB">
            <img
              alt="pic"
              className="layer1-WBX"
              src="./assets/layer1-z5b.png"
            />
            <p className="item-20-ogR">20</p>
          </div>
          <div className="group-25-5P3">
            <img
              alt="pic"
              className="ellipse-4-xxd"
              src="./assets/ellipse-4-izZ.png"
            />
            <img
              alt="pic"
              className="item-32360-1-4Vs"
              src="./assets/-8tD.png"
            />
          </div>
        </div>
        <div className="auto-group-v261-ktV">
          <img
            alt="pic"
            className="webflowlogoicon169218-1-rwX"
            src="./assets/webflowlogoicon169218-1.png"
          />
          <div className="auto-group-zu1w-nKP">
            <div className="auto-group-2eh3-t7X">
              <div className="auto-group-mb3s-C8D">
                <p className="webflow-Weh">WebFlow</p>
                <p className="build-websites-without-code-p9b">
                  Build websites without code
                </p>
              </div>
              <div className="auto-group-dhg9-Ks3">
                <img
                  alt="pic"
                  className="layer1-eeR"
                  src="./assets/layer1-QJh.png"
                />
                <p className="item-120-WwX">120</p>
                <p className="free-2ey">Free</p>
                <p className="no-code-tool-YdK">No Code tool</p>
              </div>
            </div>
            <div className="auto-group-wvnh-45s">
              <img
                alt="pic"
                className="group-30-N6Z"
                src="./assets/group-30.png"
              />
              <p className="item-20-Gxd">20</p>
            </div>
            <div className="group-26-Q3F">
              <img
                alt="pic"
                className="ellipse-4-JPX"
                src="./assets/ellipse-4-YPF.png"
              />
              <img
                alt="pic"
                className="item-32360-1-QhT"
                src="./assets/-xwo.png"
              />
            </div>
          </div>
        </div>
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
                  /> &nbsp;
                  {categorie.Category}
                </span>
              </div>
            ))}
          </div>
          <span className="profile-btn-outlined"
          onClick={handleInterestsChange}
          >Submit</span>
        </Modal>
      </div>
    </div>
  );
};

export default Profile;
 