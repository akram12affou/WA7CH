import { initializeApp } from "firebase/app";
import {getFirestore } from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyDFjSp6TOBVV2R6dsgUpE6441AAnPWxyiA",
  authDomain: "chat-e22a2.firebaseapp.com",
  projectId: "chat-e22a2",
  storageBucket: "chat-e22a2.appspot.com",
  messagingSenderId: "180224622077",
  appId: "1:180224622077:web:06d39ed0f5d96e16cfad94",
  measurementId: "G-FWG04MGRWF"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
const auth = getAuth(app)
export default auth


