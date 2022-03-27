import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDF-zv_Yvr6os3j-axOo_QvbPvTW8Ok8DQ",
    authDomain: "super-pizza-29526.firebaseapp.com",
    projectId: "super-pizza-29526",
    storageBucket: "super-pizza-29526.appspot.com",
    messagingSenderId: "18536742289",
    appId: "1:18536742289:web:be1c096177601eab0f6e30"

};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };

