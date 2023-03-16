// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDx_K5od78QkEW5N90qP9VXDV7JN5kehV4",
  authDomain: "coderhousereact-bb330.firebaseapp.com",
  projectId: "coderhousereact-bb330",
  storageBucket: "coderhousereact-bb330.appspot.com",
  messagingSenderId: "574269101357",
  appId: "1:574269101357:web:9d6230958711adf77aefa4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)