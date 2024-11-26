import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDU3ufsxPKsNRQpt_PJkC_yOl5sLpOyC1A",
  authDomain: "expenses-c4643.firebaseapp.com",
  projectId: "expenses-c4643",
  storageBucket: "expenses-c4643.firebasestorage.app",
  messagingSenderId: "860878178159",
  appId: "1:860878178159:web:dd0996ba6834070b010a9a"
};

const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
export const db=getFirestore(app);
export const provider = new GoogleAuthProvider();



//firebase login
//fireasbe init 
//firebase deploy