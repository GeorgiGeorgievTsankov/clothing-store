import React from 'react'
import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from '../../Utils/Firebase/Firebase.utils';
import { FormInputComponent } from '../FormInput/FormInputComponent';
import { ButtonComponent } from '../Button/ButtonComponent';

const defaultFormFIeld = {
    email: '',
    password: '',
}



export const LogInComponent = () => {

    const [formField, setFormField] = useState(defaultFormFIeld);
    const { email, password } = formField;



    const resetForm = () => {
        setFormField(defaultFormFIeld);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("komppppp");
        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password)
            console.log(response);
            resetForm();

        } catch (error) {


        }
    };

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
            <ButtonComponent buttonType='button-container' type="submit" onClick = {handleSubmit}>Log in</ButtonComponent>
        </div>
    )
};