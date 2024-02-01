
import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
} from 'firebase/auth';


import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDhKXktJQUAx0SovMqJTk5uLmXMhsgDrgQ",
    authDomain: "clothing-store-b2e45.firebaseapp.com",
    projectId: "clothing-store-b2e45",
    storageBucket: "clothing-store-b2e45.appspot.com",
    messagingSenderId: "1005459085588",
    appId: "1:1005459085588:web:525a5fd9b72215ac0a0a01"
};


const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        const { user } = result;
        return user;
    } catch (error) {
        console.error('Error signing in with Google:', error.message);
        throw error;
    }
};


export const db = getFirestore();


export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {}
) => {
    if (!userAuth || !userAuth.uid) {
        console.error('Invalid userAuth object or missing UID');
        return null;
    }

    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    console.log(userSnapshot);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            });
        } catch (error) {
            console.error('Error creating the user document', error.message);
            return null;
        }
    }

    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}
