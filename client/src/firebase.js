// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-state-e1f7b.firebaseapp.com",
  projectId: "mern-state-e1f7b",
  storageBucket: "mern-state-e1f7b.firebasestorage.app",
  messagingSenderId: "328679112001",
  appId: "1:328679112001:web:32a9dd7bf7ebca9c1a35c0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);