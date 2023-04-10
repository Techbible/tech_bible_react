import { createContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";

export const AuthContext = createContext();


export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);
 
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      // console.log(user);
    });

    return () => {
      unsub();
    };
  }, []);


  useEffect(() => {
    const listen = onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log(2, user);
        const userData = await onSnapshot(doc(db, "Users", user.uid), (doc) => {
          console.log("from auth context",doc.data());
          setIsAdmin(doc.data().isAdmin);
        });
      }
    });
    console.log(isAdmin);
    return listen();
  }, []);


  return (
    <AuthContext.Provider value={{ currentUser, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};
