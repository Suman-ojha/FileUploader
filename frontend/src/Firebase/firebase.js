// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOR7XSZoVVvxuSn-H22h578-PL3oBmGT8",
  authDomain: "fileuploaderauth.firebaseapp.com",
  projectId: "fileuploaderauth",
  storageBucket: "fileuploaderauth.appspot.com",
  messagingSenderId: "499996455598",
  appId: "1:499996455598:web:ff10479b7bcbc163faf33f",
  measurementId: "G-VWLCSB8BWT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);