import app from "firebase/app";
import "firebase/auth";
import firebase from "firebase";
import firebaseConfig from "./config";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage, db };
class Firebase {
  constructor() {
    if (!app.apps.length) {
      app.initializeApp(firebaseConfig);
    }
    this.auth = app.auth();
  }
  //registra un usuario
  async register(name, email, password) {
    const newuser = await this.auth.createUserWithEmailAndPassword(
      email,
      password
    );
    return await newuser.user.updateProfile({
      displayName: name,
    });
  }
  //iniciar sesion
  async login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  //cerrar sesion
  async logout() {
    await this.auth.signOut();
  }
}
const firebaseE = new Firebase();
export default firebaseE;
