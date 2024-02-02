
import React from 'react'
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../Utils/Firebase/Firebase.utils'
import { SingUpFormComponent } from '../../Components/sing-up-form/SingUpFormComponent';
import './SingInCss.css'
import { LogInComponent } from '../../Components/LogIn/LogInComponent';
import { ButtonComponent } from '../../Components/Button/ButtonComponent';

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
        <div className='sing-in-container'>
            <div className="log-in-container">
                <LogInComponent />
                <ButtonComponent onClick={logGoogleUser} buttonType='google'>Log in with Google</ButtonComponent>
            </div>
            <div className="sing-up">
                <SingUpFormComponent />
            </div>


        </div>

    )
}
