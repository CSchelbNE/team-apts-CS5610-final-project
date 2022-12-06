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
                state.reviews = payload;

            },
        [getAllReviewsByAlbumIdThunk.fulfilled]:
            (state, {payload}) => {
                state.reviews = payload;
            },
        [createReviewThunk.fulfilled] :
        (state, {payload}) => {
            state.reviews.push(payload);
            console.log(state.reviews);
        }
    }
});

export default reviewSlice.reducer;
