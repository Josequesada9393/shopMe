import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch
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

const GoogleProvider = new GoogleAuthProvider();

GoogleProvider.setCustomParameters({
  prompt: "select_account"
})



export const auth = getAuth();
//Google Providers
export const signInWithGooglePopup = () => signInWithPopup(auth, GoogleProvider);
export const signInWithGoogleRedirect =  () =>  signInWithRedirect(auth, GoogleProvider)

//EmailPassword Provider

//FIREBASE DATABASE, FIRESTORE

export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);

}

export const createUserDocumentFromAuth = async (
  userAuth,
  extraInfo = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email, emailVerified } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        emailVerified,
        ...extraInfo
      })
    } catch (error) {
      console.log('error creating the user', error)
    }
  }
  return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
 return await createUserWithEmailAndPassword(auth, email, password);
}
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
 return await signInWithEmailAndPassword(auth, email, password);
}

// sign out method

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
 onAuthStateChanged(auth, callback)
