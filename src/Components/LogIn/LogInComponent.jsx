import React from 'react'
import { useState, useContext} from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from '../../Utils/Firebase/Firebase.utils';
import { FormInputComponent } from '../FormInput/FormInputComponent';
import { ButtonComponent } from '../Button/ButtonComponent';
import { UserContext } from '../../Contexts/UserContext';



const defaultFormFIeld = {
    email: '',
    password: '',
}



export const LogInComponent = () => {

    const [formField, setFormField] = useState(defaultFormFIeld);
    const { email, password } = formField;
 
    const { setCurrentUser } = useContext(UserContext);  

    const resetForm = () => {
        setFormField(defaultFormFIeld);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const {user} = await signInAuthUserWithEmailAndPassword(email, password)
            setCurrentUser(user)
            resetForm();

        } catch (error) {  
            if (error.code === "auth/wrong-password") {
                alert('Incorect password for email');
            } else if (error.code === "auth/user-not-found") {
                alert('User not found');
            }
        };
    }

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormField({ ...formField, [name]: value });

    }

    return (
        <div className='log-in-container'>
            <h2>Already have an account?</h2>
            <h1>Sign in whit your email and password </h1>
            <form onSubmit={handleSubmit} className="log-in-form">
                <FormInputComponent
                    label='Email'
                    type="email"
                    value={email}
                    className="email"
                    name="email"
                    required
                    onChange={handleChange}
                />
                <FormInputComponent
                    label='Password'
                    type="password"
                    value={password}
                    className="password"
                    name="password"
                    required
                    onChange={handleChange}
                />
            </form>
            <ButtonComponent buttonType='button-container' type="submit" onClick={handleSubmit}>Log in</ButtonComponent>
        </div>
    )
};
