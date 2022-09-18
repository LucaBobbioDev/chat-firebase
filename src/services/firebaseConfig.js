// Importação padrão para uso do firebase
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBBbpNOIGc_kWhPtw5wIp3pAy1E_Y9-V9M",
  authDomain: "chat-firebase-99757.firebaseapp.com",
  projectId: "chat-firebase-99757",
  storageBucket: "chat-firebase-99757.appspot.com",
  messagingSenderId: "454934477921",
  appId: "1:454934477921:web:93db3e18ecd6f16d7ffe20",
  measurementId: "G-B6ZJTLXJPG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const databaseApp = getFirestore(app);