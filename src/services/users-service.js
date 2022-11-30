import axios from "axios";
const BASE_URL = 'http://localhost:2000';
// const TUITS_API = "https://tuiter-node-server-app.azurewebsites.net/api/tuits"
// const API_BASE = process.env.REACT_APP_API_BASE;
// const TUITS_API = `${API_BASE}/tuits`;

export const createUser = async() => {

}

export const findAllUsers = async() => {
    const response = await axios.get(`${BASE_URL}/users`)
    return response.data;
}

export const register = async(user) => {
    const response = await axios.post(`${BASE_URL}/register`, user)
    return response.data;
}

export const login = async(user) => {
    const response = await axios.post(`${BASE_URL}/login`, user)
    return response.data;
}

export const deleteUser = async(uid) => {
    
}
export const updateUser = async(uid, userUpdates) => {
    
}