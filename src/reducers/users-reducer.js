import { createSlice } from "@reduxjs/toolkit";
import {
    findAllUsersThunk,
    findUserThunk,
    loginThunk,
    logoutThunk,
    registerThunk,
    updateUserThunk,
    findUserByUsernameThunk
} from "../services/users-thunks";

const usersReducer = createSlice({
    name: 'users',
    initialState: {
        loading: false,
        users:[],
        profileUser: null,
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
        [findUserThunk.fulfilled]: (state, {payload}) => {
            state.profileUser = payload;
        },
        [findUserByUsernameThunk.fulfilled]: (state, {payload}) => {
            state.profileUser = payload;
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
        [updateUserThunk.fulfilled]: (state, {payload}) => {
            const userNdx = state.users.findIndex((u) => u.username === payload.username);
            console.log(payload);
            state.users[userNdx] = {
                ...state.users[userNdx],
                ...payload
            };
            state.currentUser = state.users[userNdx];
            state.error = null;
        },
    }
})
export const {setError} = usersReducer.actions;
export default usersReducer.reducer