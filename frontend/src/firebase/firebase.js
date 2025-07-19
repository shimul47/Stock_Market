// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "stockmarket-57d10.firebaseapp.com",
  projectId: "stockmarket-57d10",
  storageBucket: "stockmarket-57d10.firebasestorage.app",
  messagingSenderId: "450786319132",
  appId: "1:450786319132:web:2ddd02c06b34b95c8338d9",
  measurementId: "G-0NP3CLG703",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
