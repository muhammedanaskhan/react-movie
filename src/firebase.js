// import firebase from 'firebase';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCcEp8urf9OTGGE8SDdHPJN904oSuQYlDM",
  authDomain: "react-movie-ae1df.firebaseapp.com",
  projectId: "react-movie-ae1df",
  storageBucket: "react-movie-ae1df.appspot.com",
  messagingSenderId: "774195753698",
  appId: "1:774195753698:web:0e316224090551b2f2a4bb"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebase.auth();

export {auth, db}
