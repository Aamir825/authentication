import {createSlice, nanoid} from '@reduxjs/toolkit'

let initialState = {id: null, email: "", isLoggedin: false};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        LoginUser: (state,action)=>{
                state.id = nanoid(),
                state.email = action.payload,
                state.isLoggedin = true
        },
        LogOut: (state)=>{
            state.id = null,
            state.email = "",
            state.isLoggedin = false
        }
    }
})

export const {LoginUser, LogOut} = userSlice.actions
export default userSlice.reducer