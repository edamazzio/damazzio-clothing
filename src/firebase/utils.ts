import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const config = {
    apiKey: "AIzaSyBP8lI8X0_E6EebED7RR6EiMqS2mUMDg3A",
    authDomain: "dzz-clth-db.firebaseapp.com",
    projectId: "dzz-clth-db",
    storageBucket: "dzz-clth-db.appspot.com",
    messagingSenderId: "439310596493",
    appId: "1:439310596493:web:94a9cde486cf80e58ee5c4",
    measurementId: "G-RL53WF1N17"
};

initializeApp(config);

export const auth = getAuth();
export const firestore = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => signInWithPopup(auth, provider);

export const createUserProfileDocument = async (user: User, additionalData={}) => {
    if (!user) return;

    const docRef = doc(firestore, "users", user.uid);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
        const {displayName, email} = user;
        const createdAt = new Date();
        setDoc(docRef, {
            displayName,
            email,
            createdAt,
            ...additionalData
        }).catch(e => {
            alert(e);
            console.error(e);
        });
    }
    return docRef;
}