// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "mohammad-rajha-portofolio.firebaseapp.com",
  projectId: "mohammad-rajha-portofolio",
  storageBucket: "mohammad-rajha-portofolio.appspot.com",
  messagingSenderId: "995249447780",
  appId: "1:995249447780:web:ed4877f477696840a31071",
  measurementId: "G-FRQ2XWXX1P",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
