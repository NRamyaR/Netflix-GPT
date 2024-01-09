// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqECXqruUDRIYyWNpwPbtugyioSr3Z-60",
  authDomain: "netflix-gpt-88eb7.firebaseapp.com",
  projectId: "netflix-gpt-88eb7",
  storageBucket: "netflix-gpt-88eb7.appspot.com",
  messagingSenderId: "813886033583",
  appId: "1:813886033583:web:b867a4d8fc75643854ce5a",
  measurementId: "G-42HBN18PPC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
