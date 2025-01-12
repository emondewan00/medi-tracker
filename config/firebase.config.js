// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAexijF4a_zrGonseSD-SKv2niCuVbsc2Q",
  authDomain: "my-app2022-f5de9.firebaseapp.com",
  projectId: "my-app2022-f5de9",
  storageBucket: "my-app2022-f5de9.firebasestorage.app",
  messagingSenderId: "1046298237281",
  appId: "1:1046298237281:web:9028aae2a2a2e517644d20",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
