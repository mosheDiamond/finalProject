// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBvZgOyROQEUORiEn-kzc_CXEk9yM4vhwQ",
  authDomain: "ort-final-project-5f934.firebaseapp.com",
  projectId: "ort-final-project-5f934",
  storageBucket: "ort-final-project-5f934.appspot.com",
  messagingSenderId: "670376623038",
  appId: "1:670376623038:web:e03861968916da744657ef",
  measurementId: "G-6BTLQB8J6Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);