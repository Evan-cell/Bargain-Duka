// Import the required parts of the 'firebase' module
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyAPRoH6VamUSB0g7YZRxkZ7Sr-PVfw-wRI",
  authDomain: "bargain-duka.firebaseapp.com",
  projectId: "bargain-duka",
  storageBucket: "bargain-duka.appspot.com",
  messagingSenderId: "697788592233",
  appId: "1:697788592233:web:09bf5476219549c31d32f8"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Get Firestore instance from the initialized app
const db = getFirestore(app);

// Export the Firestore instance
export default db;
