// import firebase from "firebase";
// import firebaseConfig from "./config";

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

// export { auth, provider, storage, db };
import app from "firebase/app";
import firebaseConfig from "./config";
class Firebase {
  constructor() {
    if (!app.apps.length) {
      app.initializeApp(firebaseConfig);
    }
  }
}
const firebase = new Firebase();
export default firebase;
