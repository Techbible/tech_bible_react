import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { db } from "../../../config/firebase";
import YouMightLikeItem from "./YouMightLikeItem";
import { useRecoilValue } from "recoil";
import { allToolsAtom } from "../../../recoil/tool";

const YouMightLikeApp = () => {
  const { currentUserData } = useContext(AuthContext);
  const [Tools, setTools] = useState();

  // Handle Screen Sizing
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Attach the event listener on component mount
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // The empty dependency array ensures the effect runs only once on mount
  const allTools = useRecoilValue(allToolsAtom);
  useEffect(() => {
    console.log("level 0");
    if (
      Array.isArray(allTools) &&
      currentUserData &&
      currentUserData.interests
    ) {
      console.log("Current User Interests:", currentUserData.interests);

      const filteredTools = allTools.filter((tool) =>
        currentUserData?.interests.some(
          (interest) => tool.Category.toLowerCase() === interest.toLowerCase()
        )
      );

      console.log("Filtered Tools:", filteredTools);

      // Update the state with the filtered tools
      setTools(filteredTools.slice(0, 3));
    }
  }, [allTools, currentUserData]);
  //to firebase
  // const LoadingMightLike = async () => {
  //   const ToolsRef = collection(db, "Tools");
  //   const tools = [];
  //   const q = query(
  //     ToolsRef,
  //     where("Category", "in", currentUserData?.interests),
  //     limit(3)
  //   );
  //   try {
  //     const querySnapshot = await getDocs(q);
  //     querySnapshot.forEach((doc) => {
  //       tools.push(doc.data());
  //       setTools(tools);
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   let isMounted = true;
  //   if (isMounted) {
  //     LoadingMightLike();
  //   }

  //   return () => {
  //     isMounted = false;
  //   };
  // }, []);

  return (
    <div>
      <div className="flex flex-col sm:flex-row" style={{ display: "flex" }}>
        {Tools?.map((tool, index) => (
          <a key={index} href={tool.URL} target="_blank" rel="noreferrer">
            {index === 2 ? (
              screenWidth > 710 ? (
                <YouMightLikeItem
                  id={tool._id}
                  title={tool?.Name}
                  description={tool.Description}
                  icon={tool.Icon}
                  url={tool.URL}
                  category={tool.category}
                />
              ) : (
                <div></div>
              )
            ) : (
              <div>
                <YouMightLikeItem
                  id={tool._id}
                  title={tool?.Name}
                  description={tool.Description}
                  icon={tool.Icon}
                  url={tool.URL}
                  category={tool.category}
                />
              </div>
            )}
          </a>
        ))}
      </div>
    </div>
  );
};

export default YouMightLikeApp;
