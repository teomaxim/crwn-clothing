import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

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

export const CreateUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const collectionRef = firestore.collection('users');

    const snapSHot = await userRef.get();
    const collectionSnapshot = await collectionRef.get();
    console.log({collections: collectionSnapshot.docs.map(doc => doc.data())});

    if(!snapSHot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }
    
    return userRef
}

firebase.initializeApp(firebaseConfig);

export const addCollectionAndItems = async (collectionKey, objectsToAdd ) => {
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    await batch.commit();
}

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    })

    console.log(transformedCollection);
    return transformedCollection.reduce( (accumulator, collection ) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    } , {})
}

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