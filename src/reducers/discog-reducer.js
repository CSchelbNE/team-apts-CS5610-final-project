import { createSlice } from "@reduxjs/toolkit";
import {getAlbumsThunk, getArtistsThunk} from "../services/discogs-thunk";

const initialState = {
    discogsQuery: [],
    discogsAlbumQuery: [],
    loading: false
}


const discogsSlice = createSlice({
    name: "discogs",
    initialState,
    extraReducers: {
        [getAlbumsThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false;
                const json = JSON.parse(JSON.stringify(payload.data));
                state.discogsAlbumQuery = json;
            }
    }
});

export default discogsSlice.reducer;