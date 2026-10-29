// Firebase SDK Import
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";

import {
    getAuth
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

// Firebase Firestore (NEW)
import {
    getFirestore
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

// Firebase Configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfIyLZ68cOq6lh-zksIfZ2Vk6UHuzPo3A",
  authDomain: "mottainai-connect.firebaseapp.com",
  projectId: "mottainai-connect",
  storageBucket: "mottainai-connect.firebasestorage.app",
  messagingSenderId: "671874775851",
  appId: "1:671874775851:web:2c93d7e34f0c8ca316636e",
  measurementId: "G-9NB2WVLWPP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication
const auth = getAuth(app);

// Initialize Cloud Firestore
const db = getFirestore(app);

// Export Firebase Services
export { auth, db };
