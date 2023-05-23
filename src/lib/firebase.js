import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBsUN0yL1lP2x-U25lS_vCIvU-_uDSFLpg",
  authDomain: "alumni-demo-45fa0.firebaseapp.com",
  projectId: "alumni-demo-45fa0",
  storageBucket: "alumni-demo-45fa0.appspot.com",
  messagingSenderId: "546547297389",
  appId: "1:546547297389:web:2db60ae647d9fe86fe6364",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
