// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjW6cMb3URUdS95tfeqUDNjtP0BzzzbcI",
  authDomain: "genius-car-services-6cc82.firebaseapp.com",
  projectId: "genius-car-services-6cc82",
  storageBucket: "genius-car-services-6cc82.appspot.com",
  messagingSenderId: "553671741685",
  appId: "1:553671741685:web:72be92d85dc7dacd7fb5bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export default auth;