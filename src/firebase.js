import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDGH-bBglqIHGXJha5TCLbACgm7QViYYuI",
    authDomain: "chat-app-2dab8.firebaseapp.com",
    projectId: "chat-app-2dab8",
    storageBucket: "chat-app-2dab8.appspot.com",
    messagingSenderId: "125216310586",
    appId: "1:125216310586:web:b8cbc929e44d746c6e7c03"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore(app);
