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
                console.log(payload);
                state = payload;
            },
        [postToWishlistThunk.fulfilled]:
            (state, {payload}) => {
                console.log(payload);
                state = payload;

            },
        [getWishlistByUsernameThunk.fulfilled]:
            (state, {payload}) => {
                console.log(payload);
                state = payload;
            }
            ,
        [deleteItemFromWishlistThunk.fulfilled]:
            (state, {payload}) => {
                console.log(payload);
            }
    }
});

export default wishlistSlice.reducer;
