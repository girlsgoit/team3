// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWw26ZoHorOZhOwbGWyQ-qsDbYY55ilag",
  authDomain: "inkandpages-38c53.firebaseapp.com",
  projectId: "inkandpages-38c53",
  storageBucket: "inkandpages-38c53.appspot.com",
  messagingSenderId: "38701366981",
  appId: "1:38701366981:web:0c3da2645fdd97ec39baac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {
    db
 }