// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
  apiKey: "AIzaSyDZG-M-ccdR-mCEKizH21P3zmFKeBIm9hc",
  authDomain: "techbible-73edc.firebaseapp.com",
  projectId: "techbible-73edc",
  storageBucket: "techbible-73edc.appspot.com",
  messagingSenderId: "405426302385",
  appId: "1:405426302385:web:001a5d893a02aaafa76190",
  measurementId: "G-S3LX99D6L2"
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