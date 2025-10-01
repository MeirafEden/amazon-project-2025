
// Import the functions you need
import firebase from "firebase/compat/app";
    //  auth
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGLtcAomrG5eibZ6xNK9Hni9VlNpQIaLY",
  authDomain: "clone-9163e.firebaseapp.com",
  projectId: "clone-9163e",
  storageBucket: "clone-9163e.appspot.com", // 👈 fixed this too (was .app)
  messagingSenderId: "496941879961",
  appId: "1:496941879961:web:2e459cffcad607aeb2de08",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Export auth & db
export const auth = getAuth(app);
export const db = app.firestore();



