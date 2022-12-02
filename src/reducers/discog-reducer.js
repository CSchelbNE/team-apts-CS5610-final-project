import {createSlice} from "@reduxjs/toolkit";
import {getAlbumsThunk, getArtistsThunk} from "../services/discogs-thunk";

const initialState = {
    discogsQuery: [],
    loading: false,
    albumOrArtist: ""
}


const discogsSlice = createSlice({
    name: "discogs",
    initialState,
    extraReducers: {
        [getAlbumsThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false;
                state.discogsQuery = JSON.parse(JSON.stringify(payload.data));

            },
        [getArtistsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.discogsQuery = JSON.parse(JSON.stringify(payload.data));
            },
        [getArtistsThunk.rejected]:
            (state) => {
                state.loading = false
            },
    }
});

export default discogsSlice.reducer;