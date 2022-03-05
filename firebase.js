import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDjTGcJ4H13u2Pyr2ACFZFJceEC6pcf0hI",
  authDomain: "e-nextjs-27943.firebaseapp.com",
  projectId: "e-nextjs-27943",
  storageBucket: "e-nextjs-27943.appspot.com",
  messagingSenderId: "292303044116",
  appId: "1:292303044116:web:03b6efea8c135bc349b101",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = app.firestore();
export default db;
