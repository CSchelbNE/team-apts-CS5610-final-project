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
                console.log(payload);
                state.reviews = payload;

            },
        [getAllReviewsByAlbumIdThunk.fulfilled]:
            (state, {payload}) => {
                console.log(payload);
                state.reviews = payload;
            },
        [createReviewThunk.fulfilled] :
        (state, {payload}) => {
            // need to implement this
            state.reviews.push(payload);
        }
    }
});

export default reviewSlice.reducer;
