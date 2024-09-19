import React, { useState } from 'react'
import { Alert, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { LoginUser } from '../../Features/user';

const Login = () => {

    const [email, setEmail] = useState('');
    const [warning, setWarning] = useState(false);
    const users = useSelector((state) => state.user);
    console.log(users)
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            dispatch(LoginUser(email));
            setWarning(false)
        } else {
            setWarning(true)
        }
    }
    return (
        <>
            <div>
                <Typography variant='h3' fontWeight= "700">Sign in</Typography>
                <Typography variant='subtitle1' sx={{margin: "10px 0", fontSize: "14px"}}>Welcome user, please sign in to continue</Typography>
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
                {warning ?
                (<Alert variant="outlined" severity="warning" sx={{marginTop: "10px"}}>
                    Email field is required
                </Alert>) : ""}
            </div>
        </>
    )
}

export default Login