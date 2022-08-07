// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithRediect, signInWithPopup, GoogleAuthProvider, signInWithRedirect, createUserWithEmailAndPassword , signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAW7e6IlMNGoc6VEe5DhdND8f3PHg_vWe0",
  authDomain: "crwn-clothing-db-a480b.firebaseapp.com",
  projectId: "crwn-clothing-db-a480b",
  storageBucket: "crwn-clothing-db-a480b.appspot.com",
  messagingSenderId: "716478159848",
  appId: "1:716478159848:web:385a85653133284bb9a25d",
  measurementId: "G-N6BYBHF0XN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRediect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();

// Take the data and store it in a firestore
export const createUserDocumentFromAuth = async (
  userAuth, 
  additionalInformation = {displayName: 'mike'}
  ) => {
  
  if(!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot)
  console.log(userSnapshot.exists())

  //if user data exists
  if(!userSnapshot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
    }
  
    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);

};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;
  return await signInAuthUserWithEmailAndPassword(auth, email, password);

};

export const signOutUser = async() => await signOut(auth);

export const onAuthStateChangedListener = (callback) => {onAuthStateChanged(auth, callback);}