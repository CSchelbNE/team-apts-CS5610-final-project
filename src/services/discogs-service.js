import axios from "axios";
const API_BASE_SEARCH_PATH = "http://localhost:2000/api/search/"
const API_ALBUM_PATH = "http://localhost:2000/api/search/album/"
const API_LISTINGS_PATH = "http://localhost:2000/listings/"
const api = axios.create({withCredentials: true});

export const getAlbums = async (album) => {
    if (!album) return {discogQuery: [], loading: false};
    return await axios.get(API_ALBUM_PATH+album);
}

export const createAlbumListing = async (listing) => {
    return await api.post(API_LISTINGS_PATH+"create", listing);
}

export const getAllListingsById = async (discogId) => {
    return await api.post(API_LISTINGS_PATH+"find-all/"+discogId.toString());
}


