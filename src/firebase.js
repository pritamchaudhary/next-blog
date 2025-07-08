// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "next-blog-a0857.firebaseapp.com",
  projectId: "next-blog-a0857",
  storageBucket: "next-blog-a0857.firebasestorage.app",
  messagingSenderId: "748391738383",
  appId: "1:748391738383:web:a697002e4bae0ff19c477a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);