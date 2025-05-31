// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.apiKey,
  authDomain: import.meta.authDomain,
  projectId: import.meta.projectId,
  storageBucket: import.meta.storageBucket,
  messagingSenderId: import.meta.messagingSenderId,
  appId: import.meta.appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
