import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZBH_OcgNr67oEHYxe7Hv7m5CBFgD9Dgw",
  authDomain: "waddle-35ec3.firebaseapp.com",
  projectId: "waddle-35ec3",
  storageBucket: "waddle-35ec3.appspot.com",
  messagingSenderId: "591902467339",
  appId: "1:591902467339:web:497f97eb24daf212afae0e",
  measurementId: "G-78Q9Y82XJF"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { auth, storage, db};