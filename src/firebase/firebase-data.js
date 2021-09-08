import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'


const app = firebase.initializeApp({
    apiKey: "AIzaSyBcOHz4cT0NR3WUb9Z5OU-HgDi382tmObE",
    authDomain: "ecommerce-pola.firebaseapp.com",
    projectId: "ecommerce-pola",
    storageBucket: "ecommerce-pola.appspot.com",
    messagingSenderId: "1095239136639",
    appId: "1:1095239136639:web:d9e819b1e7b9e76799164a"
})


export const getFirebase = () => app;

export const getFirestore = () => firebase.firestore(app);

export const getFireauth = () => firebase.auth()

