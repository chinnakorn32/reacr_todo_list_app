import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9yvnNWY-9J1CckBMM2WnzYg1kQFOFm50",
  authDomain: "add-task-dd3a2.firebaseapp.com",
  databaseURL: "https://add-task-dd3a2.firebaseio.com",
  projectId: "add-task-dd3a2",
  storageBucket: "add-task-dd3a2.appspot.com",
  messagingSenderId: "1073889432475",
  appId: "1:1073889432475:web:1ba99f804e028fcaee473e",
  measurementId: "G-9SD0NRJ71N",
};
// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
const auth = getAuth(app);

export { database, auth };