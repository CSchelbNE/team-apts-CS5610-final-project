import { createAsyncThunk } from "@reduxjs/toolkit";
import { findAllUsers, register, login, logout, updateUser, findUser, findUserByUsername } from "./users-service.js";
export const findAllUsersThunk = createAsyncThunk(
    'findAllUsers', async() => await findAllUsers()
)

export const registerThunk = createAsyncThunk(
    'register', async (user) => await register(user)
)

export const loginThunk = createAsyncThunk(
    'login', async (user) => await login(user)
)

export const logoutThunk = createAsyncThunk(
    'logout', async (user) => await logout()
)

export const updateUserThunk = createAsyncThunk(
    'users/updateUser', async (username, userUpdates) => await updateUser(username, userUpdates)
)

export const findUserThunk = createAsyncThunk(
    'users/findUser', async () => await findUser()
)

export const findUserByUsernameThunk = createAsyncThunk(
    'users/findUserByUsername', async (username) => await findUserByUsername(username)
)