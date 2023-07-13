import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import  'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5_FLdLBHNF79BvS9zjGlJMWAPcL5T2b4",
  authDomain: "olx-react-93f5a.firebaseapp.com",
  projectId: "olx-react-93f5a",
  storageBucket: "olx-react-93f5a.appspot.com",
  messagingSenderId: "227342265908",
  appId: "1:227342265908:web:631553d9a2987f8b26a461",
  measurementId: "G-67FHW0EXW9"
};


 export default firebase.initializeApp(firebaseConfig)