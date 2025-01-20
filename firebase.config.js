import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import AsyncStorage from "@react-native-async-storage/async-storage";

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

// Initialize Firebase Authentication with persistence support
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const fireStore = getFirestore(app);
