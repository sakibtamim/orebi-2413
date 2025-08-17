// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1t8LS1xFvsqTAyyBBL-USoQVVi2YyuUM",
  authDomain: "orebi-user-auth.firebaseapp.com",
  projectId: "orebi-user-auth",
  storageBucket: "orebi-user-auth.firebasestorage.app",
  messagingSenderId: "519713867603",
  appId: "1:519713867603:web:089714b0b547c93fba03a6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;
