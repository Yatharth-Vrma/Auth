// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDX7XSbw4PkOUvKG5YrrZV0a51j7Zpv250",
  authDomain: "authen-509e3.firebaseapp.com",
  projectId: "authen-509e3",
  storageBucket: "authen-509e3.firebasestorage.app",
  messagingSenderId: "156428555866",
  appId: "1:156428555866:web:2147cd18c9bc5f25432a63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;
