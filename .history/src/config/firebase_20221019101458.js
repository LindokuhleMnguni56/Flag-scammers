// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import {getFirestore} from '@firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCp9nI3Mp5Rhnho9by_XpDqYEOEkDC9OuE",
  authDomain: "flag-scammers.firebaseapp.com",
  projectId: "flag-scammers",
  storageBucket: "flag-scammers.appspot.com",
  messagingSenderId: "787776039060",
  appId: "1:787776039060:web:268d0ba3ec53206d0aec81",
  measurementId: "G-CFNPEXB3G0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db =
const auth = getAuth(app);
export {auth};