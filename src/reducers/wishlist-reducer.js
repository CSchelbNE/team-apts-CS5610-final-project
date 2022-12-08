import { createSlice } from "@reduxjs/toolkit";
import {
    createEmptyWishlistThunk,
    deleteItemFromWishlistThunk,
    getWishlistByUsernameThunk,
    postToWishlistThunk
} from "../services/wishlist-thunk";

const initialState = {
    username: null,
    wishlist_records: []
}


const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
    extraReducers: {
        [createEmptyWishlistThunk.fulfilled]:
            (state, {payload}) => {
                state = payload;
                console.log(state);


            },
        [postToWishlistThunk.fulfilled]:
            (state, {payload}) => {
                state = payload;
                console.log(state);

            },
        [getWishlistByUsernameThunk.fulfilled]:
            (state, {payload}) => {
                state.wishlist_records = payload.wishlist_records;

            }
            ,
        [deleteItemFromWishlistThunk.fulfilled]:
            (state, {payload}) => {
                state = payload;
                console.log(state);
            }
    }
});

export default wishlistSlice.reducer;
