import axios from "axios";
const BASE_API_PATH = process.env.REACT_APP_APTS_API_BASE;

const API_CART_PATH = `${BASE_API_PATH}cart/`;
const api = axios.create({withCredentials: true});

export const createEmptyShoppingCart = async (userId) => {
    const result = await api.post(API_CART_PATH, userId);
    return result.data;
}
