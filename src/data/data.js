import 'dotenv/config';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4RAv0p7ErSvhGSr1k7zBlyeXRDvbqIPo",
  authDomain: "backend-nodejs-23bad.firebaseapp.com",
  projectId: "backend-nodejs-23bad",
  storageBucket: "backend-nodejs-23bad.firebasestorage.app",
  messagingSenderId: "24459820329",
  appId: "1:24459820329:web:27ae16c39fea3aee948b38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };