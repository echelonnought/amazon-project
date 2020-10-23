import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDeuNXwTrqytrf9rEuJRlpFns8wkm4BLsU",
    authDomain: "build-31dfa.firebaseapp.com",
    databaseURL: "https://build-31dfa.firebaseio.com",
    projectId: "build-31dfa",
    storageBucket: "build-31dfa.appspot.com",
    messagingSenderId: "619244268837",
    appId: "1:619244268837:web:1f79af1a49ac88a5ebbecc",
    measurementId: "G-3L6F88NYWN"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };