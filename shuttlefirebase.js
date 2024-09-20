// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAH8nzUIaD86ua-93hNcSVfN1UwnQG29YI",
  authDomain: "moovit-9dde8.firebaseapp.com",
  projectId: "moovit-9dde8",
  storageBucket: "https://console.firebase.google.com/u/0/project/moovit-9dde8/storage/moovit-9dde8.appspot.com/files",
  messagingSenderId: "140557591569",
  appId: "1:140557591569:web:fa5b71b6544ed2632dbdb0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };