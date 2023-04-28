import { doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../config/firebase";

const ToolDetails = () => {
  const { id } = useParams();

  const [ToolsData, setToolsData] = useState({
    Name: "",
    photo: null,
    description: "",
    followers: null,
    pricing: null,
    category: null,
    comments: null,
  });

  useEffect(() => {
    console.log(id);
    const ToolRef = doc(db, "Tools", id);
    onSnapshot(ToolRef, (doc) => {
      console.log(" data: ", doc.data());
      setToolsData({
        Name: doc.data().Name,
        photo: doc.data().Icon,
        description: doc.data().Description,
        followers: doc.data().Likes,
        pricing: doc.data().Price,
        category: [],
        comments: doc.data().Comments,
      });
      console.log(ToolsData);
    });
  }, []);

  return (
    <div>
      <div className="home-page-SPw">
        {/* <Navbar /> */}
      </div>
      <div className="design-tools-page--573">
        <div className="auto-group-wzxd-h6M">
          <div className="auto-group-uwdt-UmK">
            <p className="design-tools-FQh">Design Tools</p>
            <div className="auto-group-5fs3-3LZ">
              <img
                alt="tools"
                className="adobexdccicon-1-Sdb"
                src={ToolsData.photo}
              />
              <div className="auto-group-qs2z-Fqw">
                <div className="auto-group-iytd-KzD">
                  <p className="adobe-xd-7fB">{ToolsData.Name}</p>
                  <img
                    alt="tools"
                    className="layer1-KmF"
                    src={`${process.env.PUBLIC_URL}/assets/layer1-wR7.png`}
                  />
                </div>
                <p className="adobe-xd-is-an-interface-prototyping-and-design-tool-for-websites-or-mobile-applications-it-is-aimed-at-ux-ui-designers-YA9">
                  {ToolsData.description}
                  <br />
                </p>
                <div className="auto-group-bvds-q2m">
                  <div className="auto-group-9czh-FsB">{ToolsData.pricing}</div>
                  <p className="design-tool-Vuw">{ToolsData.category}</p>
                  <img
                    alt="tools"
                    className="layer1-LQm"
                    src={`${process.env.PUBLIC_URL}/assets/layer1-wEm.png`}
                  />
                  <p className="item-120-8rR">{ToolsData.comments}</p>
                  <img
                    alt="tools"
                    className="layer1-vnH"
                    src={`${process.env.PUBLIC_URL}/assets/layer1-rUD.png`}
                  />
                  <p className="item-20-KZX">{ToolsData.followers}</p>
                </div>
              </div>
            </div>
            <div className="auto-group-swmj-uXj">
              <p className="community-thoughts-WXX">Community Thoughts </p>
              <p className="ask-a-question-about-this-tool-XBj">
                Ask a question about this tool
              </p>
              <div className="auto-group-o5im-J7w">
                <img
                  alt="tools"
                  className="layer1-75P"
                  src={`${process.env.PUBLIC_URL}/assets/layer1-ams.png`}
                />
                <div className="group-26-KhF">
                  <img
                    alt="tools"
                    className="ellipse-4-mZF"
                    src={`${process.env.PUBLIC_URL}/assets/ellipse-4-CqK.png`}
                  />
                  <img
                    alt="tools"
                    className="item-32360-1-AbP"
                    src={`${process.env.PUBLIC_URL}/assets/-DEM.png`}
                  />
                </div>
              </div>
            </div>
            <div className="group-42-Azh">
              <div className="auto-group-c4e9-v6h">
                <img
                  alt="tools"
                  className="screen-shot-2023-03-14-at-2022-5-iYM"
                  src={`${process.env.PUBLIC_URL}/assets/screen-shot-2023-03-14-at-2022-5-xXX.png`}
                />
                <div className="auto-group-mnht-iAy">
                  <div className="auto-group-mxmt-zPP">
                    <p className="miro99-3sT">Miro99</p>
                    <p className="posted-in-r-design-tools-adobe-xd-2-hours-ago-uRo">
                      <span className="posted-in-r-design-tools-adobe-xd-2-hours-ago-uRo-sub-0">
                        -{" "}
                      </span>
                      <span className="posted-in-r-design-tools-adobe-xd-2-hours-ago-uRo-sub-1">
                        Posted in{" "}
                      </span>
                      <span className="posted-in-r-design-tools-adobe-xd-2-hours-ago-uRo-sub-2">
                        r/Design Tools - Adobe XD -
                      </span>
                      <span className="posted-in-r-design-tools-adobe-xd-2-hours-ago-uRo-sub-3">
                        {" "}
                        2 hours ago{" "}
                      </span>
                    </p>
                  </div>
                  <p className="what-is-the-use-of-adobe-xd-mXs">
                    What is the use of Adobe XD?
                  </p>
                </div>
              </div>
              <div className="auto-group-4fho-B5o">
                <p className="item-0-CWh">0</p>
                <img
                  alt="tools"
                  className="layer1-AM3"
                  src={`${process.env.PUBLIC_URL}/assets/layer1-C2R.png`}
                />
                <p className="item-20-YcV">20</p>
                <p className="it-is-basically-an-ui-ux-designing-application-like-sketch-in-my-opinion-it-has-bunch-of-tools-like-pen-tool-selection-tool-etc-designing-in-xd-is-simple-its-based-on-the-adobe-conventions-if-youre-used-to-work-in-adobe-softwares-like-photoshop-illustrator-you-can-work-with-xd-very-easily-and-efficiently-just-like-in-illustrator-of-sketch-you-can-have-multiple-artboards-v7F">
                  It is Basically an UI/UX Designing application like Sketch in
                  my opinion, It has bunch of tools like pen tool , selection
                  tool etc. Designing in XD is simple. It’s based on the Adobe
                  conventions. If you’re used to work in Adobe Softwares like
                  Photoshop &amp; Illustrator you can work with XD very easily
                  and efficiently. Just like in Illustrator of Sketch you can
                  have multiple artboards.
                </p>
                <div className="group-41-NG5">
                  <img
                    alt="tools"
                    className="layer1-BjK"
                    src={`${process.env.PUBLIC_URL}/assets/layer1-dNd.png`}
                  />
                  <div className="group-27-SSH">
                    <img
                      alt="tools"
                      className="ellipse-4-5k9"
                      src={`${process.env.PUBLIC_URL}/assets/ellipse-4-Qry.png`}
                    />
                    <img
                      alt="tools"
                      className="item-32360-1-i2R"
                      src={`${process.env.PUBLIC_URL}/assets/-keZ.png`}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="group-45-Q3f">
              <div className="auto-group-myxw-99f">
                <img
                  alt="tools"
                  className="screen-shot-2023-03-14-at-2022-5-8XP"
                  src={`${process.env.PUBLIC_URL}/assets/screen-shot-2023-03-14-at-2022-5-gW9.png`}
                />
                <div className="auto-group-xgcm-j1P">
                  <div className="auto-group-rfdp-1Do">
                    <p className="miro99-UNH">Miro99</p>
                    <p className="posted-in-r-design-tools-adobe-xd-2-hours-ago-UFo">
                      <span className="posted-in-r-design-tools-adobe-xd-2-hours-ago-UFo-sub-0">
                        -{" "}
                      </span>
                      <span className="posted-in-r-design-tools-adobe-xd-2-hours-ago-UFo-sub-1">
                        Posted in{" "}
                      </span>
                      <span className="posted-in-r-design-tools-adobe-xd-2-hours-ago-UFo-sub-2">
                        r/Design Tools - Adobe XD -
                      </span>
                      <span className="posted-in-r-design-tools-adobe-xd-2-hours-ago-UFo-sub-3">
                        {" "}
                        2 hours ago{" "}
                      </span>
                    </p>
                  </div>
                  <p className="what-is-the-use-of-adobe-xd-fYZ">
                    What is the use of Adobe XD?
                  </p>
                </div>
              </div>
              <div className="auto-group-aysd-G2Z">
                <p className="item-0-QHB">0</p>
                <img
                  alt="tools"
                  className="layer1-xT7"
                  src={`${process.env.PUBLIC_URL}/assets/layer1-XMX.png`}
                />
                <p className="item-20-wpq">20</p>
                <p className="it-is-basically-an-ui-ux-designing-application-like-sketch-in-my-opinion-it-has-bunch-of-tools-like-pen-tool-selection-tool-etc-designing-in-xd-is-simple-its-based-on-the-adobe-conventions-if-youre-used-to-work-in-adobe-softwares-like-photoshop-illustrator-you-can-work-with-xd-very-easily-and-efficiently-just-like-in-illustrator-of-sketch-you-can-have-multiple-artboards-sru">
                  It is Basically an UI/UX Designing application like Sketch in
                  my opinion, It has bunch of tools like pen tool , selection
                  tool etc. Designing in XD is simple. It’s based on the Adobe
                  conventions. If you’re used to work in Adobe Softwares like
                  Photoshop &amp; Illustrator you can work with XD very easily
                  and efficiently. Just like in Illustrator of Sketch you can
                  have multiple artboards.
                </p>
                <div className="group-41-L1j">
                  <img
                    alt="tools"
                    className="layer1-LR3"
                    src={`${process.env.PUBLIC_URL}/assets/layer1-66h.png`}
                  />
                  <div className="group-27-Yn1">
                    <img
                      alt="tools"
                      className="ellipse-4-ycR"
                      src={`${process.env.PUBLIC_URL}/assets/ellipse-4-esX.png`}
                    />
                    <img
                      alt="tools"
                      className="item-32360-1-EKP"
                      src={`${process.env.PUBLIC_URL}/assets/-VyX.png`}
                    />
                  </div>
                </div>
              </div>
              <div className="auto-group-7puf-dcR">Add a comment</div>
            </div>
            <div className="group-46-XDw">
              <div className="auto-group-muru-6RT">
                <div className="auto-group-fldt-tcD">
                  <img
                    alt="tools"
                    className="vector-75-YRs"
                    src={`${process.env.PUBLIC_URL}/assets/vector-75.png`}
                  />
                  <img
                    alt="tools"
                    className="screen-shot-2023-03-14-at-2022-5-Mu7"
                    src={`${process.env.PUBLIC_URL}/assets/screen-shot-2023-03-14-at-2022-5.png`}
                  />
                  <img
                    alt="tools"
                    className="screen-shot-2023-03-14-at-2022-1-M1w"
                    src={`${process.env.PUBLIC_URL}/assets/screen-shot-2023-03-14-at-2022-1-zFf.png`}
                  />
                </div>
                <div className="auto-group-nc4v-KN5">
                  <div className="auto-group-jadj-Nr9">
                    <p className="miro99-Q29">Miro99</p>
                    <p className="posted-in-r-design-tools-adobe-xd-2-hours-ago-EYu">
                      <span className="posted-in-r-design-tools-adobe-xd-2-hours-ago-EYu-sub-0">
                        -{" "}
                      </span>
                      <span className="posted-in-r-design-tools-adobe-xd-2-hours-ago-EYu-sub-1">
                        Posted in{" "}
                      </span>
                      <span className="posted-in-r-design-tools-adobe-xd-2-hours-ago-EYu-sub-2">
                        r/Design Tools - Adobe XD -
                      </span>
                      <span className="posted-in-r-design-tools-adobe-xd-2-hours-ago-EYu-sub-3">
                        {" "}
                        2 hours ago{" "}
                      </span>
                    </p>
                  </div>
                  <p className="what-is-the-use-of-adobe-xd-neH">
                    What is the use of Adobe XD?
                  </p>
                  <div className="auto-group-chn5-APw">
                    <p className="item-0-MjK">0</p>
                    <img
                      alt="tools"
                      className="layer1-KJm"
                      src={`${process.env.PUBLIC_URL}/assets/layer1-uoj.png`}
                    />
                    <p className="item-20-YSR">20</p>
                    <p className="it-is-basically-an-ui-ux-designing-application-like-sketch-in-my-opinion-it-has-bunch-of-tools-like-pen-tool-selection-tool-etc-designing-in-xd-is-simple-its-based-on-the-adobe-conventions-if-youre-used-to-work-in-adobe-softwares-like-photoshop-illustrator-you-can-work-with-xd-very-easily-and-efficiently-just-like-in-illustrator-of-sketch-you-can-have-multiple-artboards-VFB">
                      It is Basically an UI/UX Designing application like Sketch
                      in my opinion, It has bunch of tools like pen tool ,
                      selection tool etc. Designing in XD is simple. It’s based
                      on the Adobe conventions. If you’re used to work in Adobe
                      Softwares like Photoshop &amp; Illustrator you can work
                      with XD very easily and efficiently. Just like in
                      Illustrator of Sketch you can have multiple artboards.
                    </p>
                    <div className="group-41-xwP">
                      <img
                        alt="tools"
                        className="layer1-P17"
                        src={`${process.env.PUBLIC_URL}/assets/layer1-jgZ.png`}
                      />
                      <div className="group-27-2bo">
                        <img
                          alt="tools"
                          className="ellipse-4-s6d"
                          src={`${process.env.PUBLIC_URL}/assets/ellipse-4-hVo.png`}
                        />
                        <img
                          alt="tools"
                          className="item-32360-1-Us7"
                          src={`${process.env.PUBLIC_URL}/assets/-Qww.png`}
                        />
                      </div>
                    </div>
                  </div>
                  <p className="rita64-6Nh">Rita64</p>
                  <p className="reply-to-r-miro99-in-r-design-tools-adobe-xd-2-hours-ago-xA1">
                    <span className="reply-to-r-miro99-in-r-design-tools-adobe-xd-2-hours-ago-xA1-sub-0">
                      Reply to{" "}
                    </span>
                    <span className="reply-to-r-miro99-in-r-design-tools-adobe-xd-2-hours-ago-xA1-sub-1">
                      r/Miro99 in{" "}
                    </span>
                    <span className="reply-to-r-miro99-in-r-design-tools-adobe-xd-2-hours-ago-xA1-sub-2">
                      r/Design Tools - Adobe XD
                    </span>
                    <span className="reply-to-r-miro99-in-r-design-tools-adobe-xd-2-hours-ago-xA1-sub-3">
                      {" "}
                      -
                    </span>
                    <span className="reply-to-r-miro99-in-r-design-tools-adobe-xd-2-hours-ago-xA1-sub-4">
                      {" "}
                      2 hours ago{" "}
                    </span>
                  </p>
                </div>
              </div>
              <div className="auto-group-fwtw-nTo">
                <p className="you-are-100-right--z45">You are 100% right !</p>
                <img
                  alt="tools"
                  className="layer1-ywb"
                  src={`${process.env.PUBLIC_URL}/assets/layer1-1Rw.png`}
                />
                <p className="item-20-x4m">20</p>
                <div className="group-42-BCR">
                  <img
                    alt="tools"
                    className="layer1-coX"
                    src={`${process.env.PUBLIC_URL}/assets/layer1-ZmP.png`}
                  />
                  <div className="group-27-qwB">
                    <img
                      alt="tools"
                      className="ellipse-4-HHP"
                      src={`${process.env.PUBLIC_URL}/assets/ellipse-4-hYy.png`}
                    />
                    <img
                      alt="tools"
                      className="item-32360-1-6Vj"
                      src={`${process.env.PUBLIC_URL}/assets/-cYM.png`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            alt="tools"
            className="midle-line-xgM"
            src={`${process.env.PUBLIC_URL}/assets/midle-line-eus.png`}
          />
          <div className="auto-group-s9pj-B3K">
            <p className="similar-apps-to-r-adobe-xd-QRs">
              <span className="similar-apps-to-r-adobe-xd-QRs-sub-0">
                Similar Apps to{" "}
              </span>
              <span className="similar-apps-to-r-adobe-xd-QRs-sub-1">
                r/Adobe XD
              </span>
            </p>
            <div className="right-section-1VX">
              <div className="news-3SD">
                <img
                  alt="tools"
                  className="whatsapp-image-2023-03-20-at-0954-1-gk5"
                  src={`${process.env.PUBLIC_URL}/assets/whatsapp-image-2023-03-20-at-0954-1.png`}
                />
                <div className="auto-group-sccu-eaR">
                  <img
                    alt="tools"
                    className="adobecreativecloudrainbowicon-1-eyj"
                    src={`${process.env.PUBLIC_URL}/assets/adobecreativecloudrainbowicon-1.png`}
                  />
                  <p className="figma-rpu">Figma</p>
                </div>
                <div className="auto-group-qb4q-Fc9">
                  <img
                    alt="tools"
                    className="adobecreativecloudrainbowicon-2-3nu"
                    src={`${process.env.PUBLIC_URL}/assets/adobecreativecloudrainbowicon-2.png`}
                  />
                  <p className="adobe-illustrator-3wK">Adobe Illustrator</p>
                </div>
                <img
                  alt="tools"
                  className="vector-53-fSu"
                  src={`${process.env.PUBLIC_URL}/assets/vector-53-2rq.png`}
                />
              </div>
              <div className="news-letter-section-XG9">
                <div className="auto-group-8tvy-Mky">
                  <p className="news-letter-DHP">News Letter</p>
                  <p className="get-the-latest-saas-products-news-directly-to-your-inbox-Sfw">
                    Get the latest Saas products news directly to your inbox!
                  </p>
                </div>
                <div className="auto-group-ntsm-dkR">Your Email</div>
                <div className="auto-group-txsd-UeZ">Subscribe to news letter</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolDetails;
