// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl5pCxWIHpdLfSrBvexmXDQeCfbC7bbfw",
  authDomain: "fir-with-native-b3a22.firebaseapp.com",
  projectId: "fir-with-native-b3a22",
  storageBucket: "fir-with-native-b3a22.firebasestorage.app",
  messagingSenderId: "108403863739",
  appId: "1:108403863739:web:85db622fec027d2038f99e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
