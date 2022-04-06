import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZBH_OcgNr67oEHYxe7Hv7m5CBFgD9Dgw",
  authDomain: "waddle-35ec3.firebaseapp.com",
  projectId: "waddle-35ec3",
  storageBucket: "waddle-35ec3.appspot.com",
  messagingSenderId: "591902467339",
  appId: "1:591902467339:web:497f97eb24daf212afae0e",
  measurementId: "G-78Q9Y82XJF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Get Firebase services
const firestore = getFirestore();
const auth = getAuth(app);
const storage = getStorage(app);

//export firebase services
export {firestore, auth, storage};