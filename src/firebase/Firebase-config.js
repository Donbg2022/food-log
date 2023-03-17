import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCSNoMOvtojK8avoxikkJCkcSV7DLzjYp8",
  authDomain: "stretchg-4b206.firebaseapp.com",
  projectId: "stretchg-4b206",
  storageBucket: "stretchg-4b206.appspot.com",
  messagingSenderId: "85032107729",
  appId: "1:85032107729:web:0b5a0a1f951682074e8ff0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {firebaseConfig, app, db}