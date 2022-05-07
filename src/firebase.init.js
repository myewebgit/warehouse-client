// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNO5FYqKZyk5vDBTM1XgcW1CGtf1ciwtk",
  authDomain: "react-store-cddaf.firebaseapp.com",
  projectId: "react-store-cddaf",
  storageBucket: "react-store-cddaf.appspot.com",
  messagingSenderId: "887767623742",
  appId: "1:887767623742:web:92afaebb8372ec626a496f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;