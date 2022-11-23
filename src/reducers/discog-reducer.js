import { createSlice } from "@reduxjs/toolkit";
import {getArtistsThunk} from "../services/discogs-thunk";

const initialState = {
    discogsQuery: [],
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
    }
});

export default discogsSlice.reducer;