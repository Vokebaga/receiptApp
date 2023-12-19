
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDvjRlmuzyG6AZOn7dchRNFG5sGd68TQPU",
    authDomain: "pk2web-b65c2.firebaseapp.com",
    projectId: "pk2web-b65c2",
    storageBucket: "pk2web-b65c2.appspot.com",
    messagingSenderId: "262413478881",
    appId: "1:262413478881:web:4d1173f80b82ecec0d00a0",
    measurementId: "G-F6FVYLR0Q9"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const firestore = getFirestore();