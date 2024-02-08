
import React from 'react'
import { useState, useContext } from 'react';
import './SingUpFormCSS.css'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../Utils/Firebase/Firebase.utils';
import { FormInputComponent } from '../FormInput/FormInputComponent';
import { ButtonComponent } from '../Button/ButtonComponent';
import { UserContext } from '../../Contexts/UserContext';

const defaultFormFIeld = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}



export const SingUpFormComponent = () => {

    const [formField, setFormField] = useState(defaultFormFIeld);
    const { displayName, email, password, confirmPassword } = formField;

    const {setCurrentUser} = useContext(UserContext);

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormField({ ...formField, [name]: value });

    }

    const resetForm = () => {
        setFormField(defaultFormFIeld);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("raboti");

        if (password !== confirmPassword) {
            console.error('Passwords do not match.');
            return;
        }

        try {

            const { user } = await createAuthUserWithEmailAndPassword(email, password);

            setCurrentUser(user);

            await createUserDocumentFromAuth(user, { displayName })

            resetForm();

        } catch (error) {
            console.error('Error during user registration:', error.message);

        }
    };


    return (
        <div className='sing-up-container'>
            <h2>Don't have an account?</h2>
            <h1>Sign up whit your email and password </h1>
            <form onSubmit={handleSubmit} className="sign-up-form">
                <FormInputComponent
                    label='Name'
                    type="text"
                    value={displayName}
                    className="displayName"
                    name="displayName"
                    required
                    onChange={handleChange}
                />
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
                <FormInputComponent
                    label='Confirm password'
                    type="password"
                    value={confirmPassword}
                    className="Confirm password"
                    name="confirmPassword"
                    required
                    onChange={handleChange}
                />
                           
            </form>
            <ButtonComponent buttonType='button-container'onClick = {handleSubmit} type="submit">Sing in</ButtonComponent>
        </div>
    )
};
