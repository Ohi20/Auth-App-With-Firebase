// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBe2E0OYIe5aRrx_ms86BPmNHDObABNEDo",
  authDomain: "painter-auth-assignment-10.firebaseapp.com",
  projectId: "painter-auth-assignment-10",
  storageBucket: "painter-auth-assignment-10.appspot.com",
  messagingSenderId: "103086054129",
  appId: "1:103086054129:web:a26d86226d21a8d7942750"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth; 