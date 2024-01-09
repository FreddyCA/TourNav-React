import { initializeApp } from "firebase/app";

// importamos para firestore
import { getFirestore } from "firebase/firestore";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCB5OKZIahyfA_SSdLKJ6cKCP4x7krxbMM",
  authDomain: "tournav-dev2024.firebaseapp.com",
  projectId: "tournav-dev2024",
  storageBucket: "tournav-dev2024.appspot.com",
  messagingSenderId: "373601986119",
  appId: "1:373601986119:web:5ec39a345007f27d8af362",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// obtenemos la referencia a firestore
export const firebaseDB = getFirestore(app);

export const auth = getAuth(app);
