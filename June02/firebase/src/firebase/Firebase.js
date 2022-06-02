import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDDnujwgAjylHJCj__Bt0yR-OZVZdB6y9o",
  authDomain: "ciccc-june02.firebaseapp.com",
  projectId: "ciccc-june02",
  storageBucket: "ciccc-june02.appspot.com",
  messagingSenderId: "503295490283",
  appId: "1:503295490283:web:3b5177797c63b6c17126ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);