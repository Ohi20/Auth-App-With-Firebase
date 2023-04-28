// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBtlnYry4wR48pWqtXqaYTT3s-yJL63zU",
  authDomain: "painter-auth.firebaseapp.com",
  projectId: "painter-auth",
  storageBucket: "painter-auth.appspot.com",
  messagingSenderId: "139473338985",
  appId: "1:139473338985:web:6c4e1fe9e26ec01aaed8f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth; 