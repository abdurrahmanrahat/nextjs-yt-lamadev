// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmYuXmQEBpxGXM2yfr1lCQROhwxUSMQBo",
  authDomain: "nextjs-practice-ft.firebaseapp.com",
  projectId: "nextjs-practice-ft",
  storageBucket: "nextjs-practice-ft.appspot.com",
  messagingSenderId: "42331116984",
  appId: "1:42331116984:web:370fe87128e60a49f92b4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;