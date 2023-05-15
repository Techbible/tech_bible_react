import ToolInfo from "../components/ToolDetails/ToolInfo";
import Post from "../components/ToolDetails/Post";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState, useRef } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../config/firebase";
import { allToolsAtom } from "../recoil/tool";
import { useRecoilValue } from "recoil";
import "../assets/styles/home/global.css";
import axios from "axios";
import { BASE_URL } from "../config/mongo";
import { AuthContext } from "../context/AuthContext";

const NewToolDetails = () => {
  let { id } = useParams();

  const { currentUser } = useContext(AuthContext);

  const allTools = useRecoilValue(allToolsAtom);

  const [toolData, setToolData] = useState();

  const [AddCommentClicked, setAddCommentClicked] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [isCommentsLoadalbe, setIsCommentsLoadalbe] = useState(false);
  const [postCommentClicked, setPostCommentClicked] = useState(false);
  //to refrech comments in every add
  const [refresh, setRefresh] = useState(false);
  const inputCommentRef = useRef(null);

  const fetchComments = async () => {
    const response = await axios.get(`${BASE_URL}/mongo-toolComments/${id}`);

    const data = response.data;
    setComments(data);

    console.log(comments);
  };
  const handlePostComment = async () => {
    // alert(comment);
    try {
      if (comment.length > 0) {
        const response = await axios.post(
          `${BASE_URL}/addToolComment/${id}/${currentUser.uid}/${comment}`
        );

        setPostCommentClicked(true);

        console.log("Comment added succesfuly");
        inputCommentRef.current.value = "";
        setRefresh(!refresh);
      } else {
        alert("the Comment should be longer");
      }
    } catch (error) {
      console.log("error" + error);
    }
  };

  useEffect(() => {
    setIsCommentsLoadalbe(false);
    fetchComments();
    setIsCommentsLoadalbe(true);
  }, [refresh]);

  //this is firebase
  // useEffect(() => {
  //   console.log(id);
  //   const ToolRef = doc(db, "Tools", id);
  //   onSnapshot(ToolRef, (doc) => {
  //     setToolData(doc.data());
  //   });
  // }, []);

  //this is JS LOGIC
  useEffect(() => {
    const foundTool = allTools?.find((tool) => tool._id === id);
    setToolData(foundTool);
    console.log(toolData);
  }, []);

  if (!isCommentsLoadalbe) {
    return (
      <div className="loader-wrapper">
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-desktop-30 mt-mobile-8 mt-tablet-8 mt-widescreen-20 layoutContainer mt-[6rem]">
      <div className="home-container mt-desktop-30 mt-mobile-8 mt-tablet-8 mt-widescreen-20 layoutContainer">
        <main className="layoutMain">
          {/* ToolItem Tooldetails */}
          <ToolInfo toolData={toolData} />
          {/* END ToolItem Tooldetails */}

          {/* TOOL COMMENT SECTION */}
          <button
            className="text-black text-[14px] hover:bg-black fontWeight-500 bg-white mb-4 rounded-[8px] p-2 "
            onClick={() => {
              setAddCommentClicked(!AddCommentClicked);
            }}
          >
            Add your comment
          </button>

          {AddCommentClicked ? (
            <div class="mb-6">
              <div class=" px-4 mb-4 bg-[#0D0C12] rounded-lg rounded-t-lg border border-gray-200">
                <label for="comment" class="sr-only">
                  Your comment
                </label>
                <textarea
                  ref={inputCommentRef}
                  id="comment"
                  rows="6"
                  class="px-0 w-full text-sm text-gray-900 rounded-[8px] px-3 py-3 border-0 focus:ring-0 focus:outline-none dark:text-white bg-[#27242E] "
                  placeholder="Write a comment..."
                  value={comment}
                  onChange={(e) => {
                    setComment(e.target.value);
                  }}
                ></textarea>
              </div>
              <button
                onClick={handlePostComment}
                class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-[#604FE7] rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
              >
                Post comment
              </button>
            </div>
          ) : (
            <div></div>
          )}

          {/* END TOOL COMMENT SECTION */}

          {/* Community Thoughts  */}
          <div className="community-toughts-container">
            <div className="flex flex-row gap-4 justify-content-between max-w-[632px] mt-5 mb-[2rem]">
              <div className="text-[20px] fontWeight-500 ">
                Community Thoughts
              </div>
              <div className="flex flex-row gap-2">
                <div className="text-[15px] sm-hidden">
                  Ask a question about this tool
                </div>
                <i className=" bi bi-chat-left-dots text-[18px]"></i>
              </div>
            </div>
            {comments.map((comment) => (
              <Post
                key={comment._id}
                commentText={comment.text}
                commentUser={comment.userId}
                toolName={toolData.Name}
                toolCategory={toolData?.Category}
              />
            ))}
          </div>
          {/* End of Community Thoughts  */}
        </main>

        <aside className="sidebarWithSeparator right">
          <div className="news-letter-container flex flex-column gap-3 bt-white bt-white">
            <div className="text-[16px] fontWeight-700">News Letter</div>
            <div className="text-[12px] fontWeight-500 ">
              Get the latest Saas products news directly to your inbox!
            </div>
            <input
              type="text"
              className="text-black lg:w-[278px] lg:h-[36px] md:w-[300px] md:h-[36px] rounded-[6px] px-[10px] py-[5px] "
              placeholder="Your Email"
            />
            <button
              type="text"
              className="text-white fontWeight-500 lg:w-[278px] lg:h-[36px] md:w-[300px] md:h-[36px] rounded-[6px] px-[10px] py-[5px] bg-[#7869E6] transition duration-250 hover:bg-[#604fe7] active:bg-[#4635ca] "
            >
              Subscribe to news letter
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default NewToolDetails;
