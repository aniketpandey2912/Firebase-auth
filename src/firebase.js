import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBVd9IGVPEQ2Gq1mHkeF_gDv5VBHzmaD70",
  authDomain: "my-first-firebase-projec-15ed4.firebaseapp.com",
  projectId: "my-first-firebase-projec-15ed4",
  storageBucket: "my-first-firebase-projec-15ed4.appspot.com",
  messagingSenderId: "618600229159",
  appId: "1:618600229159:web:8458ee3a6085303750e102",
  measurementId: "G-9FTFV030XQ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth();
