// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMN8ER6LCVmhuu1duIXaoX1GrRAzGPTkw",
  authDomain: "blood-donor-seeker-system.firebaseapp.com",
  projectId: "blood-donor-seeker-system",
  storageBucket: "blood-donor-seeker-system.firebasestorage.app",
  messagingSenderId: "973190527434",
  appId: "1:973190527434:web:4845b42b0552f423ec7733",
  measurementId: "G-KEZYMB1GV7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);