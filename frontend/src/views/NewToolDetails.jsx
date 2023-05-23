import ToolInfo from "../components/ToolDetails/ToolInfo";
import Post from "../components/ToolDetails/Post";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState, useRef } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../config/firebase";
import { allToolsAtom } from "../recoil/tool";
import { useRecoilValue } from "recoil";
import "../assets/styles/home/global.css";
import axios from "axios";
import { BASE_URL } from "../config/mongo";
import { AuthContext } from "../context/AuthContext";
import NewsLetter from "../components/home components/NewsLetter";
import NewsLetterSubscribe from "../components/home components/NewsLetterSubscribe";

const NewToolDetails = () => {
  let { id } = useParams();

  const { currentUser } = useContext(AuthContext);

  const allTools = useRecoilValue(allToolsAtom);

  const [toolData, setToolData] = useState();

  const navigate = useNavigate();

  const [AddCommentClicked, setAddCommentClicked] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [isCommentsLoadalbe, setIsCommentsLoadalbe] = useState(false);
  const [postCommentClicked, setPostCommentClicked] = useState(false);
  //to refrech comments in every add
  const [refresh, setRefresh] = useState(false);
  const inputCommentRef = useRef(null);

  const addReply = async (text, parentId) => {
    console.log("addReply : " + text + " " + parentId);
    const response = await axios.post(
      `${BASE_URL}/addToolComment/${id}/${currentUser.uid}/${text}/${parentId}`
    );
    console.log("Reply added succesfuly");
  };

  const fetchComments = async () => {
    const response = await axios.get(`${BASE_URL}/mongo-toolComments/${id}`);
    const data = response.data;

    // Sort the comments by updatedAt field in descending order
    const sortedComments = data.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

    // Calculate the time difference in seconds, minutes, hours, days, or years for each comment and format it
    const commentsWithTimeAgo = sortedComments.map((comment) => {
      const createdAt = new Date(comment.createdAt);
      const currentDate = new Date();
      const timeDifferenceInSeconds = Math.floor(
        (currentDate - createdAt) / 1000
      );

      let formattedTimeAgo;
      if (timeDifferenceInSeconds < 1) {
        formattedTimeAgo = "Now";
      } else if (timeDifferenceInSeconds < 60) {
        formattedTimeAgo = `${timeDifferenceInSeconds}s ago`;
      } else if (timeDifferenceInSeconds < 3600) {
        const minutes = Math.floor(timeDifferenceInSeconds / 60);
        formattedTimeAgo = `${minutes}m ago`;
      } else if (timeDifferenceInSeconds < 86400) {
        const hours = Math.floor(timeDifferenceInSeconds / 3600);
        formattedTimeAgo = `${hours}h ago`;
      } else if (timeDifferenceInSeconds < 31536000) {
        const days = Math.floor(timeDifferenceInSeconds / 86400);
        formattedTimeAgo = `${days}d ago`;
      } else {
        const years = Math.floor(timeDifferenceInSeconds / 31536000);
        formattedTimeAgo = `${years}y ago`;
      }

      return {
        ...comment,
        timeAgo: formattedTimeAgo,
      };
    });

    setComments(commentsWithTimeAgo);
    console.log(commentsWithTimeAgo);
  };

  const getReplies = (commentId) => {
    return comments
      ?.filter((comment) => comment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
  };

  const handlePostComment = async () => {
    // alert(comment);
    try {
      if (comment.length > 0) {
        const response = await axios.post(
          `${BASE_URL}/addToolComment/${id}/${
            currentUser.uid
          }/${comment}/${"null"}`
        );

        setPostCommentClicked(true);

        console.log("Comment added succesfuly");
        setRefresh(!refresh);
        setComment("");
        setAddCommentClicked(false);
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
        <main className=" lg:w-[900px] ">
          {/* ToolItem Tooldetails */}
          <ToolInfo toolData={toolData} />
          {/* END ToolItem Tooldetails */}

          {/* TOOL COMMENT SECTION */}
          <button
            className="text-black text-[14px] hover:bg-black fontWeight-500 bg-white mb-4 rounded-[8px] p-2 "
            onClick={
              currentUser
                ? () => {
                    setAddCommentClicked(!AddCommentClicked);
                  }
                : () => {
                    navigate("/signup");
                  }
            }
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
                {/* <div className="text-[15px] sm-hidden">
                  Ask a question about this tool
                </div> */}
                <i className=" bi bi-chat-left-dots text-[18px]"></i>
              </div>
            </div>
            {comments.map((comment, index) => {
              return comment?.parentId === "null" ? (
                <Post
                  key={index}
                  comment={comment}
                  toolData={toolData}
                  replies={getReplies(comment._id)}
                  submitLabel="addReply"
                  handleSubmit={addReply}
                />
              ) : null;
            })}
          </div>
          {/* End of Community Thoughts  */}
        </main>

        <aside className="sidebarWithSeparator right max-w-[300px] ">
          <NewsLetterSubscribe/>
        </aside>
      </div>
    </div>
  );
};

export default NewToolDetails;
