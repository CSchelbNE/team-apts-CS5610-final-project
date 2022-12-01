import { createSlice } from "@reduxjs/toolkit";
import { findAllUsersThunk, loginThunk, logoutThunk, registerThunk } from "../services/users-thunks";

const usersReducer = createSlice({
    name: 'users',
    initialState: {
        loading: false,
        users:[],
        currentUser: null,
        error: null
    },
    reducers: {
        setError(state, action) {
            state.error = action.payload;
        }
    },
    extraReducers: {
        [findAllUsersThunk.fulfilled]: (state, action) => {
             state.users = action.payload;
        },
        [registerThunk.fulfilled]: (state, {payload}) => {
            state.currentUser = payload;
            state.error = null;
        },
        [registerThunk.rejected]: (state) => {
            state.error = "Unable to register, please check the information once!";
            state.currentUser = null;
        },
        [loginThunk.fulfilled]: (state, {payload}) => {
            state.currentUser = payload;
            state.error = null;
        },
        [loginThunk.rejected]: (state) => {
            state.error = "Unable to login, please check the username and password!";
            state.currentUser = null;
        },
        [logoutThunk.fulfilled]: (state, {payload}) => {
            state.currentUser = null;
            state.error = null;
        },
    }
})
export const {setError} = usersReducer.actions;
export default usersReducer.reducer