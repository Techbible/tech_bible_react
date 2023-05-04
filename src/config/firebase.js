// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
  apiKey: "AIzaSyD_7eS7POYYsX4wS6PKaXpQMKyFAuZWiDU",
  authDomain: "techbible.firebaseapp.com",
  databaseURL: "https://techbible-default-rtdb.firebaseio.com",
  projectId: "techbible",
  storageBucket: "techbible.appspot.com",
  messagingSenderId: "1037850422915",
  appId: "1:1037850422915:web:35f103d182d5df281d35b6",
  measurementId: "G-NLZLBJ4ND8" 
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

//export const storage = getStorage();

export const storage = getStorage(app);

export {auth, provider, db};