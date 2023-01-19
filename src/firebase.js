import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

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

// email-password auth
export const auth = getAuth();

// google auth
const googleAuthProvider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
  signInWithPopup(auth, googleAuthProvider)
    .then((res) => {
      console.log("res:", res); // we can set user info to local storage to show user info in the app.
    })
    .catch((err) => {
      console.log("error:", err);
    });
};
