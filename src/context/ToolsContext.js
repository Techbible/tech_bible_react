// import { createContext, useEffect, useState } from "react";
// import { auth, db } from "../config/firebase";
// import { onAuthStateChanged } from "firebase/auth";
// import { collection, doc, getDocs, onSnapshot } from "firebase/firestore";
// import { query } from "express";

// export const ToolsContext = createContext();




// export const ToolsContextProvider = ({ children }) => {
//   const [toolsdata, setTools] = useState({});
 
//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (user) => {
//       setTools(user);
//       // console.log(user);
//     });

//     return () => {
//       unsub();
//     };
//   }, []);

//   useEffect(() => {
//     const fetchData = async () => {
//       const ToolsArray = [];
//       const q = query(collection(db, "Tools"));
//       const querySnapshot = await getDocs(q);
//       querySnapshot.forEach((doc) => {
//         ToolsArray.push(doc.data());
//       });
//       setTools(ToolsArray);

//       return ()=>{fetchData();} 
//     };},[]);


//   return (
//     <ToolsContext.Provider value={{ toolsdata }}>
//       {children}
//     </ToolsContext.Provider>
//   );

// }
