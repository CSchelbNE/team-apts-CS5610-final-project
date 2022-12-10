import axios from "axios";
// const BASE_URL = 'http://localhost:2000';

const BASE_URL= "https://apts-server-backend.herokuapp.com/"
// const BASE_URL = process.env.APTS_API_BASE;
// const TUITS_API = "https://tuiter-node-server-app.azurewebsites.net/api/tuits"
// const API_BASE = process.env.REACT_APP_API_BASE;
// const TUITS_API = `${API_BASE}/tuits`;

const api = axios.create({withCredentials: true});

export const findAllUsers = async() => {
    const response = await axios.get(`${BASE_URL}users`)
    return response.data;
}

export const register = async(user) => {
    const response = await api.post(`${BASE_URL}register`, user)
    return response.data;
}

export const login = async(user) => {
    const response = await api.post(`${BASE_URL}login`, user)
    return response.data;
}

export const logout = async(user) => {
    const response = await axios.post(`${BASE_URL}logout`, user)
    return response.data;
}

export const findUser = async() => {
    const response = await axios.get(`${BASE_URL}api/profile`);
    return response.data;
}

export const findUserByUsername = async(username) => {
    const response = await axios.get(`${BASE_URL}api/profile/${username}`);
    return response.data;
}

export const updateUser = async(userUpdates) => {
    const response = await axios.put(`${BASE_URL}users/${userUpdates.username}`, {...userUpdates});
    return response.data;
}