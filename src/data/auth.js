import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDOTFFiCTjJwk5djb7Z0_l-3hNJpwzY7Dg",
  authDomain: "slice-heaven.firebaseapp.com",
  projectId: "slice-heaven",
  storageBucket: "slice-heaven.appspot.com",
  messagingSenderId: "327736604331",
  appId: "1:327736604331:web:bf2b09f9095e3cd99929ee"
};


const app = initializeApp(firebaseConfig);

//export auth firebase func
export const auth = getAuth(app);

//export db
export const db = getFirestore(app);