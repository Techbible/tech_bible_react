import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { db } from "../../../config/firebase";
import YouMightLikeItem from "./YouMightLikeItem";

const YouMightLikeApp = () => {
  const { currentUserData } = useContext(AuthContext);
  const [Tools, setTools] = useState();

  const LoadingMightLike = async () => {
    const ToolsRef = collection(db, "Tools");
    const tools = [];
    const q = query(
      ToolsRef,
      where("Category", "in", currentUserData?.interests),
      limit(3)
    );
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        tools.push(doc.data());
        setTools(tools);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      LoadingMightLike();
    }

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <div className="flex flex-col sm:flex-row" style={{ display: "flex" }}>
        {Tools?.map((tool) => (
         <a href={tool.URL} target="_blank" rel="noreferrer">
          <YouMightLikeItem
            id={tool.id}
            title={tool.Name}
            description={tool.Description}
            icon={tool.Icon}
            url={tool.URL}
            category={tool.category}
          />
          </a>
        ))}
      </div>
    </div>
  );
};

export default YouMightLikeApp;
