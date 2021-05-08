import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBgaK-rDaTkP9Oi3EJo_GtHwD02H1BjrlA",
  authDomain: "finance-dashboard-4f891.firebaseapp.com",
  projectId: "finance-dashboard-4f891",
  storageBucket: "finance-dashboard-4f891.appspot.com",
  messagingSenderId: "666531137243",
  appId: "1:666531137243:web:65f9bfc20ef67dae4eeefe",
  measurementId: "G-H4CYM72ENW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
