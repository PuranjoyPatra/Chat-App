import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";           

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfCHUBdiuCQv239TUptuORey2eXoLaKhU",
  authDomain: "chat-app-8b0a7.firebaseapp.com",
  databaseURL: "https://chat-app-8b0a7-default-rtdb.firebaseio.com",
  projectId: "chat-app-8b0a7",
  storageBucket: "chat-app-8b0a7.appspot.com",
  messagingSenderId: "105975247353",
  appId: "1:105975247353:web:8531932d75eadce3214d28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
