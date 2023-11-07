import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB823bF8rK7VT4f1Tu31X7mLvvOhPnhWBU",
  authDomain: "tla-databases-workshop.firebaseapp.com",
  projectId: "tla-databases-workshop",
  storageBucket: "tla-databases-workshop.appspot.com",
  messagingSenderId: "1094869792400",
  appId: "1:1094869792400:web:20b075d6a3348c02c20a15"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
