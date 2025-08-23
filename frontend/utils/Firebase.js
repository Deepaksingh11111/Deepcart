import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "login-d1bb2.firebaseapp.com",
  projectId:  "login-d1bb2",
  storageBucket: "login-d1bb2.firebasestorage.app",
  messagingSenderId: "566897844253",
  appId: "1:566897844253:web:48c35929de7237d81d26f4",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()


export {auth , provider}

