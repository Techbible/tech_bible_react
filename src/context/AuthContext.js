import { createContext, useEffect, useState } from "react";
import { auth, db, provider } from "../config/firebase";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";

export const AuthContext = createContext();



export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [currentUserData, setCurrentUserData] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);
 

  const googleSignIn = () => {
    signInWithPopup(auth, provider);
    // signInWithRedirect(auth, provider)
  };

  const logOut = () => {
      signOut(auth)
  }




  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => {
      unsub();
    };
  }, []);



  useEffect(() => {
    const listen = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userData = await onSnapshot(doc(db, "Users", user.uid), (doc) => {
          setCurrentUserData(doc.data());
          setIsAdmin(doc.data().isAdmin);
        });
      }
    });
    console.log(isAdmin);
    return listen();
  }, []);


  

  


  return (
    <AuthContext.Provider value={{ currentUser, isAdmin, currentUserData }}>
      {children}
    </AuthContext.Provider>
  );
};
