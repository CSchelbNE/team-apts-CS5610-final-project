import axios from "axios";
const API_REVIEWS_PATH = "http://localhost:2000/wishlist/"

export const postToWishlist = async ({username, album}) => {
    const result = await axios.post(API_REVIEWS_PATH+"add/"+username, album);
    return result.data;
}

export const createEmptyWishlist = async (username) => {
    const result = await axios.post(API_REVIEWS_PATH+"create/"+username);
    return result.data;
}

export const getWishlistByUsername = async (username) => {
    const result = await axios.get(API_REVIEWS_PATH+"get/"+username);
    return result.data;
}


export const deleteItemFromWishlist = async ({username, albumId}) => {
    const result = await axios.delete(API_REVIEWS_PATH+"delete?id="+albumId.toString()+"&username="+username.toString());
    return {...result.data, discogs_id: albumId};
}