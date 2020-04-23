import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyBmqv-dXuDMQIpz0fr7F92dc3ScQIiQQao",
    authDomain: "crwn-db-9dd38.firebaseapp.com",
    databaseURL: "https://crwn-db-9dd38.firebaseio.com",
    projectId: "crwn-db-9dd38",
    storageBucket: "crwn-db-9dd38.appspot.com",
    messagingSenderId: "932998084086",
    appId: "1:932998084086:web:4200c3b967e40e1004c3d7",
    measurementId: "G-CR7PGHDK6D"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
})

export const SignInWithGoogle = () => auth.signInWithPopup(provider);
export const SignInWithFacebook = () => auth.signInWithPopup(facebookProvider);

export default firebase;