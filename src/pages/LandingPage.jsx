import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { doc, onSnapshot } from "firebase/firestore";
import Navbar from "../layouts/Navbar";

function LandingPage() {
  const [authUser, setAuthUser] = useState(null);

  const [userData, setUserData] = useState({
    pfp: "",
    username: "",
  });

  const navigate = useNavigate();

  const notify = () =>
    toast(`Welcome to the community ${userData.username}! 👋🏻`, {
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
    const listen = onAuthStateChanged(auth, (user) => {
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
        
          notify();

        // console.log(user);
      } else {
        // navigate("/signin")
        setAuthUser(null);
      }
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
            <div className="adobe-xd-group-EJ1">
              <img
                alt="tech bible"
                className="adobe-xd-logo-GVb"
                src="/assets/adobe-xd-logo.png"
              />
              <div className="auto-group-1hwv-Rmo">
                <p className="adobe-xd-67F">Adobe XD</p>
                <p className="browse-1000-of-the-latest-tech-tools-per-task-updated-daily-iPX">
                  Browse 1000+ of the latest tech tools per task Updated daily
                </p>
                <div className="auto-group-ebkb-hWM">
                  <img
                    alt="tech bible"
                    className="layer1-xx5"
                    src="/assets/layer1-xPw.png"
                  />
                  <p className="item-120-kd3">120</p>
                  <p className="premium-mY9">Premium</p>
                  <p className="design-tool-oDw">Design tool</p>
                </div>
              </div>
              <div className="like-save-button-RFK">
                <div className="auto-group-l2sx-bp1">
                  <img
                    alt="tech bible"
                    className="like-eGV"
                    src="/assets/like.png"
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
                <p className="item-20-8so">20</p>
              </div>
            </div>
            <div className="figma-group-YwX">
              <img
                alt="tech bible"
                className="pngwing-1-LcV"
                src="/assets/pngwing-1.png"
              />
              <div className="auto-group-za9j-Pam">
                <div className="auto-group-jbnm-zKf">
                  <p className="figma-3oj">Figma</p>
                  <p className="browse-1000-of-the-latest-tech-tools-per-task-updated-daily-4Tw">
                    Browse 1000+ of the latest tech tools per task Updated daily
                  </p>
                  <div className="auto-group-7khf-qt1">
                    <img
                      alt="tech bible"
                      className="layer1-igu"
                      src="/assets/layer1-QDB.png"
                    />
                    <p className="item-120-7DF">120</p>
                    <p className="free-7sT">Free</p>
                    <p className="design-tool-9ZF">Design tool</p>
                  </div>
                </div>
                <div className="like-save-button-aPf">
                  <div className="auto-group-u7j5-NqK">
                    <img
                      alt="tech bible"
                      className="like-2us"
                      src="/assets/like-ERK.png"
                    />
                    <p className="item-30-57T">30</p>
                  </div>
                  <div className="group-25-sZ7">
                    <img
                      alt="tech bible"
                      className="ellipse-4-LSh"
                      src="/assets/ellipse-4.png"
                    />
                    <img
                      alt="tech bible"
                      className="item-32360-1-Msb"
                      src="/assets/-15o.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="behance-group-j7T">
              <img
                alt="tech bible"
                className="behance-logo-vector-1-hyP"
                src="/assets/behance-logo-vector-1.png"
              />
              <div className="auto-group-wozf-5yw">
                <p className="behance-kKP">Behance</p>
                <p className="browse-1000-of-the-latest-tech-tools-per-task-updated-daily-B9o">
                  Browse 1000+ of the latest tech tools per task Updated daily
                </p>
                <div className="auto-group-xi4m-A1j">
                  <img
                    alt="tech bible"
                    className="layer1-qdf"
                    src="/assets/layer1-bmP.png"
                  />
                  <p className="item-120-q1P">120</p>
                  <p className="free-3t9">Free</p>
                  <p className="portfolio-tool-uQZ">Portfolio tool</p>
                </div>
              </div>
              <div className="group-51-KUH">
                <div className="auto-group-tcjh-wEm">
                  <img
                    alt="tech bible"
                    className="layer1-1VX"
                    src="/assets/layer1-bAd.png"
                  />
                  <p className="item-186-qzM">186</p>
                </div>
                <div className="group-28-FYH">
                  <img
                    alt="tech bible"
                    className="ellipse-4-jCZ"
                    src="/assets/ellipse-4-adj.png"
                  />
                  <img
                    alt="tech bible"
                    className="item-32360-1-xLD"
                    src="/assets/-Pad.png"
                  />
                </div>
              </div>
            </div>
            <div className="canva-group-Zau">
              <img
                alt="tech bible"
                className="canva-logo-1-cZB"
                src="/assets/canva-logo-1.png"
              />
              <div className="auto-group-tevr-cSh">
                <p className="canva-sNd">Canva</p>
                <p className="browse-1000-of-the-latest-tech-tools-per-task-updated-daily-uq7">
                  Browse 1000+ of the latest tech tools per task Updated daily
                </p>
                <div className="auto-group-1ob3-JcM">
                  <img
                    alt="tech bible"
                    className="layer1-zEH"
                    src="/assets/layer1-WVj.png"
                  />
                  <p className="item-120-QJ1">120</p>
                  <p className="free-Riu">Free</p>
                  <p className="design-tool-geq">Design tool</p>
                </div>
              </div>
              <div className="group-52-Kho">
                <div className="auto-group-8rn5-MPb">
                  <img
                    alt="tech bible"
                    className="layer1-oWV"
                    src="/assets/layer1.png"
                  />
                  <p className="item-20-3vd">20</p>
                </div>
                <div className="group-29-sPs">
                  <img
                    alt="tech bible"
                    className="ellipse-4-w8q"
                    src="/assets/ellipse-4-Ka5.png"
                  />
                  <img
                    alt="tech bible"
                    className="item-32360-1-Zg1"
                    src="/assets/-Geh.png"
                  />
                </div>
              </div>
            </div>
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
