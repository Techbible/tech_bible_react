// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyD_7eS7POYYsX4wS6PKaXpQMKyFAuZWiDU",
  authDomain: "techbible.firebaseapp.com",
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

export {auth, provider};