// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDFF3u2iKOtTtPlu-IU6EvFhn6n4KcHkis",
    authDomain: "finstagaram-40620.firebaseapp.com",
    projectId: "finstagaram-40620",
    storageBucket: "finstagaram-40620.firebasestorage.app",
    messagingSenderId: "609336943799",
    appId: "1:609336943799:web:5db724b09c0b45ba07d932",
    measurementId: "G-6H0E0RSHHB"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
