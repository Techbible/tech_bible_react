import { doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { Navbar } from "../layouts";

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
      //BUG: *
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
        <Navbar />
      </div>
      <div class="design-tools-page--573">
        <div class="auto-group-wzxd-h6M">
          <div class="auto-group-uwdt-UmK">
            <p class="design-tools-FQh">Design Tools</p>
            <div class="auto-group-5fs3-3LZ">
              <img
                alt="tools"
                class="adobexdccicon-1-Sdb"
                src={ToolsData.photo}
              />
              <div class="auto-group-qs2z-Fqw">
                <div class="auto-group-iytd-KzD">
                  <p class="adobe-xd-7fB">{ToolsData.Name}</p>
                  <img
                    alt="tools"
                    class="layer1-KmF"
                    src="/assets/layer1-wR7.png"
                  />
                </div>
                <p class="adobe-xd-is-an-interface-prototyping-and-design-tool-for-websites-or-mobile-applications-it-is-aimed-at-ux-ui-designers-YA9">
                  {ToolsData.description}
                  <br />
                </p>
                <div class="auto-group-bvds-q2m">
                  <div class="auto-group-9czh-FsB">{ToolsData.pricing}</div>
                  <p class="design-tool-Vuw">{ToolsData.category}</p>
                  <img
                    alt="tools"
                    class="layer1-LQm"
                    src="/assets/layer1-wEm.png"
                  />
                  <p class="item-120-8rR">{ToolsData.comments}</p>
                  <img
                    alt="tools"
                    class="layer1-vnH"
                    src="/assets/layer1-rUD.png"
                  />
                  <p class="item-20-KZX">{ToolsData.followers}</p>
                </div>
              </div>
            </div>
            <div class="auto-group-swmj-uXj">
              <p class="community-thoughts-WXX">Community Thoughts </p>
              <p class="ask-a-question-about-this-tool-XBj">
                Ask a question about this tool
              </p>
              <div class="auto-group-o5im-J7w">
                <img
                  alt="tools"
                  class="layer1-75P"
                  src="/assets/layer1-ams.png"
                />
                <div class="group-26-KhF">
                  <img
                    alt="tools"
                    class="ellipse-4-mZF"
                    src="/assets/ellipse-4-CqK.png"
                  />
                  <img
                    alt="tools"
                    class="item-32360-1-AbP"
                    src="/assets/-DEM.png"
                  />
                </div>
              </div>
            </div>
            <div class="group-42-Azh">
              <div class="auto-group-c4e9-v6h">
                <img
                  alt="tools"
                  class="screen-shot-2023-03-14-at-2022-5-iYM"
                  src="/assets/screen-shot-2023-03-14-at-2022-5-xXX.png"
                />
                <div class="auto-group-mnht-iAy">
                  <div class="auto-group-mxmt-zPP">
                    <p class="miro99-3sT">Miro99</p>
                    <p class="posted-in-r-design-tools-adobe-xd-2-hours-ago-uRo">
                      <span class="posted-in-r-design-tools-adobe-xd-2-hours-ago-uRo-sub-0">
                        -{" "}
                      </span>
                      <span class="posted-in-r-design-tools-adobe-xd-2-hours-ago-uRo-sub-1">
                        Posted in{" "}
                      </span>
                      <span class="posted-in-r-design-tools-adobe-xd-2-hours-ago-uRo-sub-2">
                        r/Design Tools - Adobe XD -
                      </span>
                      <span class="posted-in-r-design-tools-adobe-xd-2-hours-ago-uRo-sub-3">
                        {" "}
                        2 hours ago{" "}
                      </span>
                    </p>
                  </div>
                  <p class="what-is-the-use-of-adobe-xd-mXs">
                    What is the use of Adobe XD?
                  </p>
                </div>
              </div>
              <div class="auto-group-4fho-B5o">
                <p class="item-0-CWh">0</p>
                <img
                  alt="tools"
                  class="layer1-AM3"
                  src="/assets/layer1-C2R.png"
                />
                <p class="item-20-YcV">20</p>
                <p class="it-is-basically-an-ui-ux-designing-application-like-sketch-in-my-opinion-it-has-bunch-of-tools-like-pen-tool-selection-tool-etc-designing-in-xd-is-simple-its-based-on-the-adobe-conventions-if-youre-used-to-work-in-adobe-softwares-like-photoshop-illustrator-you-can-work-with-xd-very-easily-and-efficiently-just-like-in-illustrator-of-sketch-you-can-have-multiple-artboards-v7F">
                  It is Basically an UI/UX Designing application like Sketch in
                  my opinion, It has bunch of tools like pen tool , selection
                  tool etc. Designing in XD is simple. It’s based on the Adobe
                  conventions. If you’re used to work in Adobe Softwares like
                  Photoshop &amp; Illustrator you can work with XD very easily
                  and efficiently. Just like in Illustrator of Sketch you can
                  have multiple artboards.
                </p>
                <div class="group-41-NG5">
                  <img
                    alt="tools"
                    class="layer1-BjK"
                    src="/assets/layer1-dNd.png"
                  />
                  <div class="group-27-SSH">
                    <img
                      alt="tools"
                      class="ellipse-4-5k9"
                      src="/assets/ellipse-4-Qry.png"
                    />
                    <img
                      alt="tools"
                      class="item-32360-1-i2R"
                      src="/assets/-keZ.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="group-45-Q3f">
              <div class="auto-group-myxw-99f">
                <img
                  alt="tools"
                  class="screen-shot-2023-03-14-at-2022-5-8XP"
                  src="/assets/screen-shot-2023-03-14-at-2022-5-gW9.png"
                />
                <div class="auto-group-xgcm-j1P">
                  <div class="auto-group-rfdp-1Do">
                    <p class="miro99-UNH">Miro99</p>
                    <p class="posted-in-r-design-tools-adobe-xd-2-hours-ago-UFo">
                      <span class="posted-in-r-design-tools-adobe-xd-2-hours-ago-UFo-sub-0">
                        -{" "}
                      </span>
                      <span class="posted-in-r-design-tools-adobe-xd-2-hours-ago-UFo-sub-1">
                        Posted in{" "}
                      </span>
                      <span class="posted-in-r-design-tools-adobe-xd-2-hours-ago-UFo-sub-2">
                        r/Design Tools - Adobe XD -
                      </span>
                      <span class="posted-in-r-design-tools-adobe-xd-2-hours-ago-UFo-sub-3">
                        {" "}
                        2 hours ago{" "}
                      </span>
                    </p>
                  </div>
                  <p class="what-is-the-use-of-adobe-xd-fYZ">
                    What is the use of Adobe XD?
                  </p>
                </div>
              </div>
              <div class="auto-group-aysd-G2Z">
                <p class="item-0-QHB">0</p>
                <img
                  alt="tools"
                  class="layer1-xT7"
                  src="/assets/layer1-XMX.png"
                />
                <p class="item-20-wpq">20</p>
                <p class="it-is-basically-an-ui-ux-designing-application-like-sketch-in-my-opinion-it-has-bunch-of-tools-like-pen-tool-selection-tool-etc-designing-in-xd-is-simple-its-based-on-the-adobe-conventions-if-youre-used-to-work-in-adobe-softwares-like-photoshop-illustrator-you-can-work-with-xd-very-easily-and-efficiently-just-like-in-illustrator-of-sketch-you-can-have-multiple-artboards-sru">
                  It is Basically an UI/UX Designing application like Sketch in
                  my opinion, It has bunch of tools like pen tool , selection
                  tool etc. Designing in XD is simple. It’s based on the Adobe
                  conventions. If you’re used to work in Adobe Softwares like
                  Photoshop &amp; Illustrator you can work with XD very easily
                  and efficiently. Just like in Illustrator of Sketch you can
                  have multiple artboards.
                </p>
                <div class="group-41-L1j">
                  <img
                    alt="tools"
                    class="layer1-LR3"
                    src="/assets/layer1-66h.png"
                  />
                  <div class="group-27-Yn1">
                    <img
                      alt="tools"
                      class="ellipse-4-ycR"
                      src="/assets/ellipse-4-esX.png"
                    />
                    <img
                      alt="tools"
                      class="item-32360-1-EKP"
                      src="/assets/-VyX.png"
                    />
                  </div>
                </div>
              </div>
              <div class="auto-group-7puf-dcR">Add a comment</div>
            </div>
            <div class="group-46-XDw">
              <div class="auto-group-muru-6RT">
                <div class="auto-group-fldt-tcD">
                  <img
                    alt="tools"
                    class="vector-75-YRs"
                    src="/assets/vector-75.png"
                  />
                  <img
                    alt="tools"
                    class="screen-shot-2023-03-14-at-2022-5-Mu7"
                    src="/assets/screen-shot-2023-03-14-at-2022-5.png"
                  />
                  <img
                    alt="tools"
                    class="screen-shot-2023-03-14-at-2022-1-M1w"
                    src="/assets/screen-shot-2023-03-14-at-2022-1-zFf.png"
                  />
                </div>
                <div class="auto-group-nc4v-KN5">
                  <div class="auto-group-jadj-Nr9">
                    <p class="miro99-Q29">Miro99</p>
                    <p class="posted-in-r-design-tools-adobe-xd-2-hours-ago-EYu">
                      <span class="posted-in-r-design-tools-adobe-xd-2-hours-ago-EYu-sub-0">
                        -{" "}
                      </span>
                      <span class="posted-in-r-design-tools-adobe-xd-2-hours-ago-EYu-sub-1">
                        Posted in{" "}
                      </span>
                      <span class="posted-in-r-design-tools-adobe-xd-2-hours-ago-EYu-sub-2">
                        r/Design Tools - Adobe XD -
                      </span>
                      <span class="posted-in-r-design-tools-adobe-xd-2-hours-ago-EYu-sub-3">
                        {" "}
                        2 hours ago{" "}
                      </span>
                    </p>
                  </div>
                  <p class="what-is-the-use-of-adobe-xd-neH">
                    What is the use of Adobe XD?
                  </p>
                  <div class="auto-group-chn5-APw">
                    <p class="item-0-MjK">0</p>
                    <img
                      alt="tools"
                      class="layer1-KJm"
                      src="/assets/layer1-uoj.png"
                    />
                    <p class="item-20-YSR">20</p>
                    <p class="it-is-basically-an-ui-ux-designing-application-like-sketch-in-my-opinion-it-has-bunch-of-tools-like-pen-tool-selection-tool-etc-designing-in-xd-is-simple-its-based-on-the-adobe-conventions-if-youre-used-to-work-in-adobe-softwares-like-photoshop-illustrator-you-can-work-with-xd-very-easily-and-efficiently-just-like-in-illustrator-of-sketch-you-can-have-multiple-artboards-VFB">
                      It is Basically an UI/UX Designing application like Sketch
                      in my opinion, It has bunch of tools like pen tool ,
                      selection tool etc. Designing in XD is simple. It’s based
                      on the Adobe conventions. If you’re used to work in Adobe
                      Softwares like Photoshop &amp; Illustrator you can work
                      with XD very easily and efficiently. Just like in
                      Illustrator of Sketch you can have multiple artboards.
                    </p>
                    <div class="group-41-xwP">
                      <img
                        alt="tools"
                        class="layer1-P17"
                        src="/assets/layer1-jgZ.png"
                      />
                      <div class="group-27-2bo">
                        <img
                          alt="tools"
                          class="ellipse-4-s6d"
                          src="/assets/ellipse-4-hVo.png"
                        />
                        <img
                          alt="tools"
                          class="item-32360-1-Us7"
                          src="/assets/-Qww.png"
                        />
                      </div>
                    </div>
                  </div>
                  <p class="rita64-6Nh">Rita64</p>
                  <p class="reply-to-r-miro99-in-r-design-tools-adobe-xd-2-hours-ago-xA1">
                    <span class="reply-to-r-miro99-in-r-design-tools-adobe-xd-2-hours-ago-xA1-sub-0">
                      Reply to{" "}
                    </span>
                    <span class="reply-to-r-miro99-in-r-design-tools-adobe-xd-2-hours-ago-xA1-sub-1">
                      r/Miro99 in{" "}
                    </span>
                    <span class="reply-to-r-miro99-in-r-design-tools-adobe-xd-2-hours-ago-xA1-sub-2">
                      r/Design Tools - Adobe XD
                    </span>
                    <span class="reply-to-r-miro99-in-r-design-tools-adobe-xd-2-hours-ago-xA1-sub-3">
                      {" "}
                      -
                    </span>
                    <span class="reply-to-r-miro99-in-r-design-tools-adobe-xd-2-hours-ago-xA1-sub-4">
                      {" "}
                      2 hours ago{" "}
                    </span>
                  </p>
                </div>
              </div>
              <div class="auto-group-fwtw-nTo">
                <p class="you-are-100-right--z45">You are 100% right !</p>
                <img
                  alt="tools"
                  class="layer1-ywb"
                  src="/assets/layer1-1Rw.png"
                />
                <p class="item-20-x4m">20</p>
                <div class="group-42-BCR">
                  <img
                    alt="tools"
                    class="layer1-coX"
                    src="/assets/layer1-ZmP.png"
                  />
                  <div class="group-27-qwB">
                    <img
                      alt="tools"
                      class="ellipse-4-HHP"
                      src="/assets/ellipse-4-hYy.png"
                    />
                    <img
                      alt="tools"
                      class="item-32360-1-6Vj"
                      src="/assets/-cYM.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            alt="tools"
            class="midle-line-xgM"
            src="/assets/midle-line-eus.png"
          />
          <div class="auto-group-s9pj-B3K">
            <p class="similar-apps-to-r-adobe-xd-QRs">
              <span class="similar-apps-to-r-adobe-xd-QRs-sub-0">
                Similar Apps to{" "}
              </span>
              <span class="similar-apps-to-r-adobe-xd-QRs-sub-1">
                r/Adobe XD
              </span>
            </p>
            <div class="right-section-1VX">
              <div class="news-3SD">
                <img
                  alt="tools"
                  class="whatsapp-image-2023-03-20-at-0954-1-gk5"
                  src="/assets/whatsapp-image-2023-03-20-at-0954-1.png"
                />
                <div class="auto-group-sccu-eaR">
                  <img
                    alt="tools"
                    class="adobecreativecloudrainbowicon-1-eyj"
                    src="/assets/adobecreativecloudrainbowicon-1.png"
                  />
                  <p class="figma-rpu">Figma</p>
                </div>
                <div class="auto-group-qb4q-Fc9">
                  <img
                    alt="tools"
                    class="adobecreativecloudrainbowicon-2-3nu"
                    src="/assets/adobecreativecloudrainbowicon-2.png"
                  />
                  <p class="adobe-illustrator-3wK">Adobe Illustrator</p>
                </div>
                <img
                  alt="tools"
                  class="vector-53-fSu"
                  src="/assets/vector-53-2rq.png"
                />
              </div>
              <div class="news-letter-section-XG9">
                <div class="auto-group-8tvy-Mky">
                  <p class="news-letter-DHP">News Letter</p>
                  <p class="get-the-latest-saas-products-news-directly-to-your-inbox-Sfw">
                    Get the latest Saas products news directly to your inbox!
                  </p>
                </div>
                <div class="auto-group-ntsm-dkR">Your Email</div>
                <div class="auto-group-txsd-UeZ">Subscribe to news letter</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolDetails;
