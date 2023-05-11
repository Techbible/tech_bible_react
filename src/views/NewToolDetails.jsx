import ToolInfo from "../components/ToolDetails/ToolInfo";
import Post from "../components/ToolDetails/Post";
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../config/firebase";
import { allToolsAtom } from "../recoil/tool";
import { useRecoilValue } from "recoil";



const NewToolDetails = () => {
  let { id } = useParams();

  const allTools = useRecoilValue(allToolsAtom);


  const [ToolData, setToolData] = useState();


//this is firebase
  // useEffect(() => {
  //   console.log(id);
  //   const ToolRef = doc(db, "Tools", id);
  //   onSnapshot(ToolRef, (doc) => {
  //     setToolData(doc.data());
  //   });
  // }, []);

//this is JS LOGIC
useEffect(()=>{
   // Use the find() method to search for a tool by ID
   const foundTool = allTools.find((tool) => tool._id === id);
   setToolData(foundTool);
},[])


  return (
    <div className="mt-desktop-30 mt-mobile-8 mt-tablet-8 mt-widescreen-20 layoutContainer mt-[6rem]">
      <div className="home-container mt-desktop-30 mt-mobile-8 mt-tablet-8 mt-widescreen-20 layoutContainer">
        <main className="layoutMain">
          {/* ToolItem Tooldetails */}
          <ToolInfo toolData={ToolData} />
          {/* END ToolItem Tooldetails */}

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
            <Post />
            <Post />
            <Post />
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
