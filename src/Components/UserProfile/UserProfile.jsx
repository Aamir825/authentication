import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LogOut } from '../../Features/user';

const UserProfile = () => {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    let userEmail = user.email;
    console.log("Logout", userEmail)
    return (
        <>
            <div>
                <h1>Welcome <span className='email'>{userEmail}</span></h1>
                <button onClick={() => dispatch(LogOut())}>Logout</button>
            </div>
        </>
    )
}

export default UserProfile