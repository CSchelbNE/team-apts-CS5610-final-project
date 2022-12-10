import axios from "axios";
// const BASE_API_PATH = process.env.APTS_API_BASE;
const BASE_API_PATH = "https://apts-server-backend.herokuapp.com/"
const API_REVIEWS_PATH = `${BASE_API_PATH}/review/`;
// const API_REVIEWS_PATH = "http://localhost:2000/review/"
const api = axios.create({withCredentials: true});


// Expects a fully formed review document object
export const createReview = async (review) => {
    const result = await api.post(API_REVIEWS_PATH+"create", review);
    return result.data;
}

// Expects currentUser.username
export const getAllReviewsByUsername = async (username) => {
    const result = await api.get(API_REVIEWS_PATH+"get-all/"+username.toString());
    return result.data;
}

// Expects the discogs_id field
export const getAllReviewsByAlbumId = async (albumId) => {
    const result = await api.get(API_REVIEWS_PATH+"album/get-all/"+albumId.toString());
    return result.data;
}
