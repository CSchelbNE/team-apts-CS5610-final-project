import { createSlice } from "@reduxjs/toolkit";
import {createReviewThunk, getAllReviewsByAlbumIdThunk, getAllReviewsByUsernameThunk} from "../services/review-thunk";

const initialState = {
    reviews: []
}


const reviewSlice = createSlice({
    name: "reviews",
    initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
    extraReducers: {
        [getAllReviewsByUsernameThunk.fulfilled]:
            (state, {payload}) => {
                state.reviews = payload.data;

            },
        [getAllReviewsByAlbumIdThunk.fulfilled]:
            (state, {payload}) => {
                state.reviews = payload.data;
            },
        [createReviewThunk.fulfilled] :
        (state, {payload}) => {
        }
    }
});

export default reviewSlice.reducer;
