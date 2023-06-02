import { createContext, useEffect, useState } from "react";
import { auth, db } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import axios from "axios";
import { BASE_URL } from "../config/mongo";
import Cookies from "js-cookie";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [currentUserData, setCurrentUserData] = useState({});
  const [dataChanged, setDataChanged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => {
      unsub();
    };
  }, []);

  const GetUserCredentials = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/check-user/${currentUser?.uid}`
      );
      console.log(response.data);
      setCurrentUserData(response.data);
      setIsAdmin(response.data.isAdmin);

      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  useEffect(() => {
    // const listen = onAuthStateChanged(auth, async (user) => {
    //   if (user) {
    //     const userData = await onSnapshot(doc(db, "Users", user.uid), (doc) => {
    //       setCurrentUserData(doc.data());
    //       setIsAdmin(doc.data().isAdmin);
    //     });
    //   }
    // });
    // console.log(isAdmin);
    // return listen();

    GetUserCredentials();
    return () => {
      setDataChanged(!dataChanged);
    };
  }, [currentUser]);

  const updateUserData = () => {
    GetUserCredentials();
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isAdmin,
        currentUserData,
        setDataChanged,
        updateUserData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
