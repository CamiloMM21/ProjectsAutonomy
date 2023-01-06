import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAtGj0zcbZiZBbeaz-G254e0nsd9g-rm10",
    authDomain: "commerce-max-f5637.firebaseapp.com",
    projectId: "commerce-max-f5637",
    storageBucket: "commerce-max-f5637.appspot.com",
    messagingSenderId: "291031635060",
    appId: "1:291031635060:web:c6ca1dd85332af0a85ed21"
  };

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth()
 export const storage = getStorage();
 export const db = getFirestore();
