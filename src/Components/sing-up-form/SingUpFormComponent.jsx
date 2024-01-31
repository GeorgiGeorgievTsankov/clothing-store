import React from 'react'
import { useState } from 'react';
import './SingUpFormCSS.css'
import { createAuthUserWithEmailAndPassword } from '../../Utils/Firebase/Firebase.utils';

const defaultFormFIeld = {
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
}



export const SingUpFormComponent = () => {

    const [formField, setFormField] = useState(defaultFormFIeld);
    const { userName, email, password, confirmPassword } = formField;

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormField({...formField, [name] : value});
    }


    return (
        <div className='sing-up-container'>
            <h1>Sign up whit your email and password </h1>
            <form onSubmit={() => { }} className="sign-up-form">
                <label>User Name:</label>
                <input type="text" value={userName} className="username" name="userName" required onChange={handleChange} />

                <label>Email:</label>
                <input type="email" value={email} className="email" name="email" required onChange={handleChange} />

                <label>Password:</label>
                <input type="password" value={password} className="password" name="password" required onChange={handleChange} />

                <label>Confirm password</label>
                <input type="password" value={confirmPassword} className="Confirm password" name="confirmPassword" required onChange={handleChange} />

                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
};
