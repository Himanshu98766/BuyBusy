// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB712vyO-VvZwsrdvvYB2zhvY4xU5Db2Uc",
  authDomain: "buybusy-948a0.firebaseapp.com",
  projectId: "buybusy-948a0",
  storageBucket: "buybusy-948a0.appspot.com",
  messagingSenderId: "992185861368",
  appId: "1:992185861368:web:a5b09abd667625f0abe70d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);