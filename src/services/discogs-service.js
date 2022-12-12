import axios from "axios";
// const BASE_API_PATH = "https://apts-server-backend.herokuapp.com/"
// const API_ALBUM_PATH = "http://localhost:2000/api/search/album/"
// const API_LISTINGS_PATH = "http://localhost:2000/listings/"
const BASE_API_PATH = process.env.REACT_APP_APTS_API_BASE;
const API_ALBUM_PATH = `${BASE_API_PATH}api/search/album/`;
const API_SINGLE_ALBUM_PATH = `${BASE_API_PATH}api/search-one/album/`;
const API_LISTINGS_PATH = `${BASE_API_PATH}listings/`;

const api = axios.create({withCredentials: true});

export const getAlbums = async (album) => {
    console.log(BASE_API_PATH)
    if (!album) return {discogQuery: [], loading: false};
    const result = await axios.get(API_ALBUM_PATH+album);
    return result.data;
}

export const getAlbumById = async ({album, id}) => {
    console.log(API_SINGLE_ALBUM_PATH+album+"?id="+id.toString());
    const result = await axios.get(API_SINGLE_ALBUM_PATH+album+"?id="+id.toString());
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

export const getSingleListingById = async (id) => {
    const result = await api.get(API_LISTINGS_PATH+id.toString());
    return result.data;
}

export const getDiscogsDetailsById = async (id) => {
    const result = await axios.get()
}


