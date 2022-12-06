import {createAsyncThunk} from "@reduxjs/toolkit";
import {createEmptyWishlist, postToWishlist, deleteItemFromWishlist, getWishlistByUsername} from "./wishlist-service";

export const createEmptyWishlistThunk = createAsyncThunk(
    "/wishlist/createEmptyWishlist", async (username) => await createEmptyWishlist(username)
);

export const postToWishlistThunk = createAsyncThunk(
    "/wishlist/postToWishlist", async (username, album) => await postToWishlist(username, album)
)


export const deleteItemFromWishlistThunk = createAsyncThunk(
    "/wishlist/delete", async (username, albumId) => await deleteItemFromWishlist(username, albumId)
)

export const getWishlistByUsernameThunk = createAsyncThunk(
    "/wishlist/get", async (username) => {
        return await getWishlistByUsername(username);
    }
)
