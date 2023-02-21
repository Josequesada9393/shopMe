import { initializeApp } from 'firebase/app'

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth'

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'

//FIREBASE AUTHENTICATION
//firebase apiKey does not need to be secret
const firebaseConfig = {
  apiKey: "AIzaSyDQebUdIyzAkngkL2wICgES-bvMKjwcQcQ",
  authDomain: "shopme-7a96b.firebaseapp.com",
  projectId: "shopme-7a96b",
  storageBucket: "shopme-7a96b.appspot.com",
  messagingSenderId: "675761977176",
  appId: "1:675761977176:web:f7bcdcd21e8d416f89572d"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

//FIREBASE DATABASE, FIRESTORE

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)
  console.log('usedocref', userDocRef);
  
  const userSnapshot = await getDoc(userDocRef);
  console.log('userSnapShot', userSnapshot.exists())
}