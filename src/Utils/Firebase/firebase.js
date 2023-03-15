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
  writeBatch,
  query,
  getDocs
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

//we add collection of data from local input to our firestore database
export const addCollectionAndDocuments = async (collectionKey,
  objectsToAdd,
field = 'title') => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  objectsToAdd.forEach((object) => {
    //we do not need to call db because cllection already tells which db it is in
    const docRef = doc(collectionRef, object[field].toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log('done')
}

//function to get the categories and documents
//creating this instead of using native firebase methods to facilitate modifications in change google
//updates its methods for firebase
export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map(docSnapshot => docSnapshot.data())


}

//we create a user to our database from AUTH
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
//user created with email and password
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
 return await createUserWithEmailAndPassword(auth, email, password);
}
//use signed in with email and password
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
 return await signInWithEmailAndPassword(auth, email, password);
}

// sign out method

export const signOutUser = async () => await signOut(auth);

//state changed listener to have a wider control of the current user across website
export const onAuthStateChangedListener = (callback) =>
 onAuthStateChanged(auth, callback)
