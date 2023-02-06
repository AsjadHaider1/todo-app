
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD503SPiWOeSxIkYDDkoMGe3CjWUGZtFZw",
  authDomain: "todo-app-7a5f9.firebaseapp.com",
  projectId: "todo-app-7a5f9",
  storageBucket: "todo-app-7a5f9.appspot.com",
  messagingSenderId: "1015767317106",
  appId: "1:1015767317106:web:9deea29c55081956e2e0eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
