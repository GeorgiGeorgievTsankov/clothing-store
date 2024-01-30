import React from 'react'
import './SingUpFormCSS.css'

export const SingUpFormComponent = () => {
  return (
    <div className='sing-up-container'>
        <h1>Sign up whit your email and password </h1>
        <form className="sign-up-form">
        <label for="username">User Name:</label>
        <input type="text" className="username" name="username" required/>

        <label for="email">Email:</label>
        <input type="email" className="email" name="email" required/>

        <label for="password">Password:</label>
        <input type="password" className="password" name="password" required/>

        <label for="re-password">Re-enter Password:</label>
        <input type="password" className="re-password" name="re-password" required/>

        <button type="submit">Sign Up</button>
        </form> 
    </div>
  )
};
