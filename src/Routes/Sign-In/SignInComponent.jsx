import React from 'react'
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../Utils/Firebase/Firebase.utils'

export const SignInComponent = () => {

    const logGoogleUser = async () => {
        try {
            const user = await signInWithGooglePopup();
            console.log("Logged in user:", user);
    
            if (user) {
                const userDocRef = await createUserDocumentFromAuth(user);
                console.log("User document reference:", userDocRef);
            }
        } catch (error) {
            console.error("Error logging in with Google:", error.message);
        }
    };
    


    return (
        <div>
            <h1>
                SignIn
            </h1>
            <button onClick={logGoogleUser}>Sing In with googlePopup</button>
        </div>

    )
}
