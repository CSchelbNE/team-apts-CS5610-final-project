import { createSlice } from "@reduxjs/toolkit";
import {
    findAllListingsThunk,
    getAlbumsThunk,
    getSingleListingByIdThunk
} from "../services/discogs-thunk";
import {getSingleListingById} from "../services/discogs-service";

const initialState = {
    discogsAlbumQuery: [],
    details: null,
    listings: [],
    loading: false
}


const discogsSlice = createSlice({
    name: "discogs",
    initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
    extraReducers: {
        [getAlbumsThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false;
                const json = JSON.parse(JSON.stringify(payload));
                state.discogsAlbumQuery = json;
                console.log(state.discogsAlbumQuery);
            },
        [findAllListingsThunk.fulfilled]:
            (state, {payload}) => {
                state.listings = payload;
            },
        [getSingleListingByIdThunk.fulfilled]:
            (state, {payload}) => {
            console.log(payload);
                state.details = payload;
            }
    }
});

export default discogsSlice.reducer;