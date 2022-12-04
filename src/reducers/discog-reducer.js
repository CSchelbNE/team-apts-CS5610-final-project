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
        [getArtistsThunk.pending]:
            (state) => {
                state.loading = true
                state.discogsQuery = []
            },
        [getArtistsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                const json = JSON.parse(JSON.stringify(payload.data));
                state.discogsQuery = json;
            },
        [getArtistsThunk.rejected]:
            (state) => {
                state.loading = false
            },
        [getAlbumsThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false;
                const json = JSON.parse(JSON.stringify(payload.data));
                console.log(json)
                state.discogsAlbumQuery = json;
            }
    }
});

export default discogsSlice.reducer;