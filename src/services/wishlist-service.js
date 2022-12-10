import axios from "axios";
// const API_REVIEWS_PATH = "http://localhost:2000/wishlist/"
const BASE_API_PATH = "https://apts-server-backend.herokuapp.com/"
// const BASE_API_PATH = process.env.APTS_API_BASE;
const API_WISHLIST_PATH = `${BASE_API_PATH}wishlist/`;

export const postToWishlist = async ({username, album}) => {
    const result = await axios.post(API_WISHLIST_PATH+"add/"+username, album);
    return result.data;
}

export const createEmptyWishlist = async (username) => {
    const result = await axios.post(API_WISHLIST_PATH+"create/"+username);
    return result.data;
}

export const getWishlistByUsername = async (username) => {
    const result = await axios.get(API_WISHLIST_PATH+"get/"+username);
    return result.data;
}


export const deleteItemFromWishlist = async ({username, albumId}) => {
    const result = await axios.delete(API_WISHLIST_PATH+"delete?id="+albumId.toString()+"&username="+username.toString());
    return {...result.data, discogs_id: albumId};
}