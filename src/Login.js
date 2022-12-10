import React, { useRef } from 'react';
import './App.css';
const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        emailRef.current.value = '';
        passwordRef.current.value = '';
        const output = `
        Your Email : ${email}
        Your Password: ${password}
        `;
        alert(output);
    }
    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div>
                    <p>Email*</p>
                    <input ref={emailRef} type="email" placeholder='Enter Your Email' />
                </div>
                <div>
                    <p>Password*</p>
                    <input ref={passwordRef} type="Password" placeholder='Enter Your Password' />
                </div>
                <input className='submit-btn' type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login; 