import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query, 
  limit,
  getDocs,
  where,
} from "firebase/firestore";
import {Navbar} from "../layouts";

function LandingPage() {
  const [authUser, setAuthUser] = useState(null);
  const [tools, setTools] = useState([]);
  const [FollowIcon, setFollowIcon] = useState(false);

  const [userData, setUserData] = useState({
    pfp: "",
    username: "",
  });

  const navigate = useNavigate();

  //Pop up Wemcome Notification
  const notify = (message) =>
    toast(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  useEffect(() => {
    const listen = onAuthStateChanged(auth, async (user) => {
      //checking if the user exist or not
      if (user) {
        setAuthUser(user);

        const unsub = onSnapshot(doc(db, "Users", user.uid), (doc) => {
          // console.log(" data: ", doc.data());
          setUserData({
            pfp: doc.data().photo,
            username: doc.data().username,
          });
          // console.log(userData);
        });

        // notify(userData.username);
        localStorage.setItem("SignedUp", true);

        // console.log(user);
      } else {
        // navigate("/signin")
        setAuthUser(null);
      }

      //showing the Welcome Message, if it's the user's first sign up
      if (localStorage.getItem("SignedUp")) {
        <div></div>;
      } else {
        notify("Welcome to the community! 👋🏻");
      }

      const ToolsArray = [];

      const q = query(collection(db, "Tools"),where("Likes", ">=", 50), limit(3));
      //Just add the where statement later : , where('followers','==', 0)
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        ToolsArray.push(doc.data());
      });

      setTools(ToolsArray);
    });

    return listen();
  }, []);

  return (
    <div className="home-page-SPw">
      <Navbar />
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
      <div className="auto-group-7wa1-Yvh">
        <div className="auto-group-8r4h-YpD">
          <div className="header-Lk5">
            <div className="auto-group-rwxr-5r5">
              <p className="the-largest-saas-tools-directory-kSR">
                The Largest Saas Tools directory
              </p>
              <img
                alt="tech bible"
                className="share-link-button-EAZ"
                src="/assets/share-link-button.png"
              />
              <img
                alt="tech bible"
                className="cancel-buton-aNq"
                src="/assets/cancel-buton.png"
              />
            </div>
            <div className="sear-box-filter-p2H">
              <div className="search-bar-mbj">
                <img
                  alt="tech bible"
                  className="search-logo-kCm"
                  src="/assets/search-logo.png"
                />
                <input
                  type="text"
                  style={{ width: "61.9rem" }}
                  placeholder="Search"
                  className="search-VZf"
                />
              </div>
              <img
                alt="tech bible"
                className="filter-button-aUd"
                src="/assets/filter-button.png"
              />
            </div>
            <div className="sub-header-nah">
              <div className="auto-group-aplz-yv5">
                <img
                  alt="tech bible"
                  className="chatgptlogo--V9f"
                  src="/assets/chatgptlogo-.png"
                />
                <img
                  alt="tech bible"
                  className="canva-logo--rPX"
                  src="/assets/canva-logo-.png"
                />
                <img
                  alt="tech bible"
                  className="adobe-suites-logo-Hzd"
                  src="/assets/adobe-suites-logo.png"
                />
              </div>
              <p className="browse-1000-of-the-latest-tech-tools-per-task-updated-daily-WcV">
                Browse 1000+ of the latest tech tools per task Updated daily
              </p>
            </div>
          </div>
          <div className="section-2-VMw">
            <div className="app-of-the-day-uRf">
              <p className="app-of-the-day-MoT">App of the Day</p>
              <div className="auto-group-zmz5-BXb">
                <img
                  alt="tech bible"
                  className="chatgptlogo-1-bLR"
                  src="/assets/chatgptlogo-1.png"
                />
                <div className="auto-group-j2f7-cWR">
                  <p className="chat-gpt-CjX">Chat GPT</p>
                  <p className="browse-1000-of-the-latest-tech-tools-per-task-updated-daily-PZ7">
                    Browse 1000+ of the latest tech tools per task Updated daily
                  </p>
                </div>
              </div>
            </div>
            <div className="tools-MuF">
              <div className="auto-group-ydy1-DwT">
                <div className="auto-group-78ud-sFK">
                  <p className="you-might-also-like-hEM">YOU MIGHT ALSO LIKE</p>
                  <div className="group-1-UPX">
                    <img
                      alt="tech bible"
                      className="adobecreativecloudrainbowicon-1-MCR"
                      src="/assets/adobecreativecloudrainbowicon-1-s9P.png"
                    />
                    <p className="adobe-suites-757">Adobe Suites</p>
                    <p className="browse-1000-of-the-latest-tech-tools-per-task-updated-daily-7jK">
                      Browse 1000+ of the latest tech tools per task Updated
                      daily
                    </p>
                    <div className="visit-button-qYq">
                      <p className="visit-gpM">Visit</p>
                      <div className="rectangle-103-Ad3"></div>
                    </div>
                  </div>
                </div>
                <div className="group-2-ruB">
                  <img
                    alt="tech bible"
                    className="minecraft-2752120-2284937-1-t5B"
                    src="/assets/minecraft-2752120-2284937-1.png"
                  />
                  <p className="minecraft-TXb">Minecraft</p>
                  <p className="browse-1000-of-the-latest-tech-tools-per-task-updated-daily-5Yy">
                    Browse 1000+ of the latest tech tools per task Updated daily
                  </p>
                  <div className="visit-button-15F">
                    <p className="visit-SRT">Visit</p>
                    <div className="rectangle-104-mc9"></div>
                  </div>
                </div>
                <div className="group-3-4Ds">
                  <img
                    alt="tech bible"
                    className="python-logo-notext-1-6gM"
                    src="/assets/python-logo-notext-1.png"
                  />
                  <p className="python-Evy">Python</p>
                  <p className="browse-1000-of-the-latest-tech-tools-per-task-updated-daily-FbB">
                    Browse 1000+ of the latest tech tools per task Updated daily
                  </p>
                  <div className="visit-button-xtu">
                    <p className="visit-Azy">Visit</p>
                    <div className="rectangle-105-snu"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tools-section-ngu">
            {!tools ? (
              <h1 style={{color:"#fff"}}>Loading</h1>
            ) : (
              tools.map((tool) => (
                <div className="adobe-xd-group-EJ1" key={tool.id}>
                  <img
                    alt="tech bible"
                    className="adobe-xd-logo-GVb"
                    src={tool.Icon}
                  />
                  <div className="auto-group-1hwv-Rmo">
                    <Link to={`/ToolDetails/${tool.id}`}>
                      <p className="adobe-xd-67F">{tool?.Name}</p>
                    </Link>
                    <p className="browse-1000-of-the-latest-tech-tools-per-task-updated-daily-iPX description">
                      {tool?.Description}
                    </p>
                    <div className="auto-group-ebkb-hWM">
                      <img
                        alt="tech bible"
                        className="layer1-xx5"
                        src="/assets/layer1-xPw.png"
                      />
                      <p className="item-120-kd3">{tool?.Comments}</p>
                      <p className="premium-mY9">{tool?.Price}</p>
                      <p className="design-tool-oDw">{tool?.Category}</p>
                    </div>
                  </div>
                  <div className="like-save-button-RFK">
                    <div className="auto-group-l2sx-bp1">
                      <img
                        alt="tech bible"
                        className="like-eGV"
                        src={FollowIcon?"/assets/like.png":"/assets/liked.png"}
                        onClick={()=>setFollowIcon(!FollowIcon)}
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
                    <p className="followers">{tool.Likes}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        <img
          alt="tech bible"
          className="midle-line-98R"
          src="/assets/midle-line.png"
        />
        <div className="right-section-m9o">
          <div className="news-cw7">
            <p className="news-UiR">News</p>
            <p className="slack-boosts-ai-capabilities-with-new-chatgpt-app-Hfs">
              Slack boosts AI capabilities with new ChatGPT app
              <br />
            </p>
            <p className="how-many-jobs-are-available-in-technology-in-the-us-p3X">
              How many jobs are available in technology in the US?
            </p>
            <p className="government-backed-digital-money-to-represent-213b-in-payments-by-2030-j41">
              Government-backed digital money to represent $213B in payments by
              2030
            </p>
            <img
              alt="tech bible"
              className="vector-53-2BX"
              src="/assets/vector-53.png"
            />
          </div>
          <div className="community-TXj">
            <div className="auto-group-l2qm-X1o">
              <p className="community-1Sm">Community</p>
              <p className="trendy-posts-of-the-week-bfs">
                <span className="trendy-posts-of-the-week-bfs-sub-0">- </span>
                <span className="trendy-posts-of-the-week-bfs-sub-1">
                  Trendy posts of the week
                </span>
              </p>
            </div>
            <div className="auto-group-j9hf-ZAm">
              <div className="auto-group-2zjd-MsK">
                <img
                  alt="tech bible"
                  className="screen-shot-2023-03-14-at-2022-1-Lz9"
                  src="/assets/screen-shot-2023-03-14-at-2022-1.png"
                />
                <div className="auto-group-lnwz-WXF">
                  <p className="published-by-r-rita64-2-hours-ago-BNV">
                    <span className="published-by-r-rita64-2-hours-ago-BNV-sub-0">
                      Published by{" "}
                    </span>
                    <span className="published-by-r-rita64-2-hours-ago-BNV-sub-1">
                      r/Rita64 -
                    </span>
                    <span className="published-by-r-rita64-2-hours-ago-BNV-sub-2">
                      {" "}
                      2 hours ago{" "}
                    </span>
                  </p>
                  <p className="cheers--7xH">“Cheers !”</p>
                </div>
              </div>
              <div className="auto-group-xfyf-51w">
                <img
                  alt="tech bible"
                  className="screen-shot-2023-03-14-at-2021-1-EZ3"
                  src="/assets/screen-shot-2023-03-14-at-2021-1.png"
                />
                <div className="auto-group-qdjk-oEm">
                  <p className="published-by-r-imane31-20-hours-ago-CGu">
                    <span className="published-by-r-imane31-20-hours-ago-CGu-sub-0">
                      Published by{" "}
                    </span>
                    <span className="published-by-r-imane31-20-hours-ago-CGu-sub-1">
                      r/Imane31 -
                    </span>
                    <span className="published-by-r-imane31-20-hours-ago-CGu-sub-2">
                      {" "}
                      20 hours ago{" "}
                    </span>
                  </p>
                  <p className="item--oJd">...</p>
                </div>
              </div>
              <div className="auto-group-ri8v-cG5">
                <img
                  alt="tech bible"
                  className="screen-shot-2023-03-14-at-2022-2-bNu"
                  src="/assets/screen-shot-2023-03-14-at-2022-2-T4h.png"
                />
                <div className="auto-group-d9d7-PpZ">
                  <p className="published-by-r-miro99-20-hours-ago-DHo">
                    <span className="published-by-r-miro99-20-hours-ago-DHo-sub-0">
                      Published by{" "}
                    </span>
                    <span className="published-by-r-miro99-20-hours-ago-DHo-sub-1">
                      r/Miro99 -
                    </span>
                    <span className="published-by-r-miro99-20-hours-ago-DHo-sub-2">
                      {" "}
                      20 hours ago{" "}
                    </span>
                  </p>
                  <p className="how-do-you-improve-productiviy--SiH">
                    “How do you improve productiviy ?”
                  </p>
                </div>
              </div>
              <div className="auto-group-wqpt-ox9">Ask Questions</div>
            </div>
          </div>
          <div className="news-letter-section-7E5">
            <div className="auto-group-41q7-mJd">
              <p className="news-letter-om7">News Letter</p>
              <p className="get-the-latest-saas-products-news-directly-to-your-inbox-eWq">
                Get the latest Saas products news directly to your inbox!
              </p>
            </div>
            <input
              type={"text"}
              className="auto-group-uabp-q5X"
              placeholder="Your Email"
            />
            <div className="auto-group-kccm-TWD">Subscribe to news letter</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
