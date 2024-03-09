// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAX8h3rYC1LlsZQ3aLZSyezlVb9HiJkc5Q",
  authDomain: "e-commerce-7cf82.firebaseapp.com",
  projectId: "e-commerce-7cf82",
  storageBucket: "e-commerce-7cf82.appspot.com",
  messagingSenderId: "397894566128",
  appId: "1:397894566128:web:1d7bdde27cc6881515c235"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
