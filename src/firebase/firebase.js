import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyCpGHEMEtirpqMMCWgt2SR_r6M-IqQWZKc",
    authDomain: "drinkandeat-22253.firebaseapp.com",
    projectId: "drinkandeat-22253",
    storageBucket: "drinkandeat-22253.appspot.com",
    messagingSenderId: "411980722201",
    appId: "1:411980722201:web:b33f4048c5b3e52dcafa88",    
});

export const getFirebase = () => app;

export const getFirestore = () => firebase.firestore(app);