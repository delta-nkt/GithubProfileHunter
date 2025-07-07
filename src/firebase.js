// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHu3IVT_bQpmpbT4MsJIoHGiabFTEx0M4",
  authDomain: "githubprofilehunter.firebaseapp.com",
  databaseURL: "https://githubprofilehunter-default-rtdb.firebaseio.com",
  projectId: "githubprofilehunter",
  storageBucket: "githubprofilehunter.firebasestorage.app",
  messagingSenderId: "91451047841",
  appId: "1:91451047841:web:0d063279f99cfd0a0015e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { app, auth, database }; 