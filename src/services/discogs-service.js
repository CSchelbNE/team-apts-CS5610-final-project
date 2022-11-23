import axios from "axios";
const API_BASE_SEARCH_PATH = "http://localhost:2000/api/search/"
const API_ARTIST_PATH = "http://localhost:2000/api/search/artist/"

export const getArtist = async (artist) => {
    if (artist === "") return {discogsQuery: [], loading: false};
    return await axios.get(API_ARTIST_PATH+artist);
}



