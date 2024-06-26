import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';


import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs,
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

export const addCollectionsAndDocuments = async (collectionKey, objectsToAdd, field) => {
    const collectionRef = collection(db, collectionKey)
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    });

    await batch.commit();
    console.log('done');
}

// export const getCategoriesAndDocuments = async () => {
//     const collectionRef = collection(db, 'categories');
//     const q = query(collectionRef)

//     const querySnapshot = await getDocs(q);

//     const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
//         const { title, items } = docSnapshot.date();
//         acc[title.toLowerCase()] = items;
//         return acc;
//      }, {})

//      return categoryMap;
// }

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const querySnapshot = await getDocs(collectionRef);

    const categoryMap = {};

    querySnapshot.forEach(docSnapshot => {
        const { title, items } = docSnapshot.data();
        categoryMap[title.toLowerCase()] = items;
    });

    return categoryMap;
}


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

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
}

export const singOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)