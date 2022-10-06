// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUaRgZLJkdpkoKhkORDR4KCvpDlHQH0yM",
  authDomain: "sur-alimenticio.firebaseapp.com",
  projectId: "sur-alimenticio",
  storageBucket: "sur-alimenticio.appspot.com",
  messagingSenderId: "1059133571108",
  appId: "1:1059133571108:web:06b7504217333eb37c18b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

