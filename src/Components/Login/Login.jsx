import React, { useState } from 'react'
import { Alert, TextField } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { LoginUser } from '../../Features/user';

const Login = () => {

    const [email, setEmail] = useState('');
    const users = useSelector((state) => state.user);
    console.log(users)
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            dispatch(LoginUser(email));
        } else {
            alert("Both fields are Required")
        }
    }
    return (
        <>
            <div>
                <h1>Sign in</h1>
                <p>Welcome user, please sign in to continue</p>
                <div>
                    <form onSubmit={handleSubmit}>
                        <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email Address*' />
                        <div className='check'>
                            <input type='checkbox' />
                            <span>Remember me</span>
                        </div>
                        <button type='submit' className='btn'>Sign in</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login