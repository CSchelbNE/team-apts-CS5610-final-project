import axios from "axios";
const API_REVIEWS_PATH = "http://localhost:2000/review/"
const api = axios.create({withCredentials: true});


export const createReview = async (review) => {
    return await api.post(API_REVIEWS_PATH+"create", review);
}

export const getAllReviewsByUsername = async (username) => {
    return await api.get(API_REVIEWS_PATH+"get-all/"+username.toString());
}

export const getAllReviewsByAlbumId = async (albumId) => {
    return await api.get(API_REVIEWS_PATH+"album/get-all/"+albumId.toString());
}
