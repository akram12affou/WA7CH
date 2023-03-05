import { initializeApp } from "firebase/app";
import {getFirestore } from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyBf7ZpEYAX8-UWnS8ylvgDqlcyrnDNAtEg",
  authDomain: "social-media-p-github.firebaseapp.com",
  projectId: "social-media-p-github",
  storageBucket: "social-media-p-github.appspot.com",
  messagingSenderId: "798803408927",
  appId: "1:798803408927:web:6feb4010d01e154582fd2a",
  measurementId: "G-XRT1286PMJ"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)