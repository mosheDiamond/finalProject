import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
