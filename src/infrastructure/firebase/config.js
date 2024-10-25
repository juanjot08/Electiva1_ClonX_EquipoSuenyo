import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAWWJGx_8pBhuCu1pErAxrqCehnedDN-kE",
  authDomain: "clon-x-electiva.firebaseapp.com",
  projectId: "clon-x-electiva",
  storageBucket: "clon-x-electiva.appspot.com",
  messagingSenderId: "738411504092",
  appId: "1:738411504092:web:5c509f9b261be9a16f2f19",
  measurementId: "G-YS0698ZRN6"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
