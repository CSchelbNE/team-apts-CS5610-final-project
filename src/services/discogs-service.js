import axios from "axios";
const API_BASE_SEARCH_PATH = "http://localhost:2000/api/search/"
const API_ALBUM_PATH = "http://localhost:2000/api/search/album/"
const API_LISTINGS_PATH = "http://localhost:2000/listings/"
const api = axios.create({withCredentials: true});

export const getAlbums = async (album) => {
    if (!album) return {discogQuery: [], loading: false};
    const result = await axios.get(API_ALBUM_PATH+album);
    return result.data;
}

export const createAlbumListing = async (listing) => {
    const result = await api.post(API_LISTINGS_PATH+"create", listing);
    return result.data;
}

export const findAllListingsById = async (discogId) => {
    const result = await api.get(API_LISTINGS_PATH+"find-all/"+discogId.toString());
    return result.data;
}


