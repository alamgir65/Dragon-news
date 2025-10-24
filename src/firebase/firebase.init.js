// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZiioE3z0mxgtZkuvEN64Aa3UYJwFSAbA",
  authDomain: "dragon-news-6370b.firebaseapp.com",
  projectId: "dragon-news-6370b",
  storageBucket: "dragon-news-6370b.firebasestorage.app",
  messagingSenderId: "68485185053",
  appId: "1:68485185053:web:285ee316191f89f6c710f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);