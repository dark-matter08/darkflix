// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCR2J4a63AqS727OaqQ_ScnUNLVXz32nKM",
  authDomain: "darkflix-db3a6.firebaseapp.com",
  projectId: "darkflix-db3a6",
  storageBucket: "darkflix-db3a6.appspot.com",
  messagingSenderId: "547991037123",
  appId: "1:547991037123:web:6523f09a79360d5498ee76",
  measurementId: "G-GQG7GLVGX1"
};

// Initialize Firebase
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const analytics = getAnalytics(app);
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }