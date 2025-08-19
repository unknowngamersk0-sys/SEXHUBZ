// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCGD8TScSsCMG4cltE1l2rJ8T6-F4QiiSo",
  authDomain: "sexhubz.firebaseapp.com",
  projectId: "sexhubz",
  storageBucket: "sexhubz.firebasestorage.app",
  messagingSenderId: "433161069600",
  appId: "1:433161069600:web:40100365e228c63891c845",
  measurementId: "G-2V3R8XG6DE"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
