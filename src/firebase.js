// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyCT5IOU8eDfCk5LxqUONtYd6-Hg_0vlfHw",
  authDomain: "movieland-4817.firebaseapp.com",
  projectId: "movieland-4817",
  storageBucket: "movieland-4817.firebasestorage.app",
  messagingSenderId: "222008493810",
  appId: "1:222008493810:web:fae6b94128a68227cc326b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Auth to use in your components
export const auth = getAuth(app);
