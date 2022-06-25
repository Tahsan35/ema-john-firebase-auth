// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDDw2Fla-V9RhGQv-_5xb_4wb4d5wvHr74",
    authDomain: "ema-john-simple-9f9f9.firebaseapp.com",
    projectId: "ema-john-simple-9f9f9",
    storageBucket: "ema-john-simple-9f9f9.appspot.com",
    messagingSenderId: "853497136852",
    appId: "1:853497136852:web:4b22b8a44680672f289d41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;