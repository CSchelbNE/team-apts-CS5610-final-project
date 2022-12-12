import {createSlice} from "@reduxjs/toolkit";
import {
    findAllListingsThunk,
    getAlbumByIdThunk,
    getAlbumsThunk,
    getSingleListingByIdThunk
} from "../services/discogs-thunk";

const initialState = {
    discogsAlbumQuery: [],
    details: null,
    notFound: null,
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
            },
        [findAllListingsThunk.fulfilled]:
            (state, {payload}) => {
                if (payload.length !==0 || state.listings.length !==0){
                    console.log("HERE");
                    state.notFound = null;
                }
                state.listings = payload;
            },
        [getSingleListingByIdThunk.fulfilled]:
            (state, {payload}) => {
            console.log(payload);
                state.details = payload;
            },
        [getAlbumByIdThunk.fulfilled]:
            (state, {payload}) => {
                state.notFound = {
                    "discogs_id": payload.id,
                    "record_name": payload.title.split("-")[1].trim(),
                    "record_artist": payload.title.split("-")[0].trim(),
                    "record_genre": !payload.genre ? [] : payload.genre,
                    "record_year": !payload.year ? "N/A" : payload.year,
                    "record_image": !payload.thumb ? "N/A" : payload.thumb,
                };
            }
    }
});

export default discogsSlice.reducer;