import {createAsyncThunk} from "@reduxjs/toolkit";
import {createReview, getAllReviewsByAlbumId, getAllReviewsByUsername} from "./review-service";


export const getAllReviewsByUsernameThunk = createAsyncThunk(
    "/reviews/getByUsername", async (username) => await getAllReviewsByUsername(username)
);

export const createReviewThunk = createAsyncThunk(
    "/reviews/createReview", async (review) => await createReview(review)
)

export const getAllReviewsByAlbumIdThunk = createAsyncThunk(
    "/reviews/getByAlbumId", async (albumId) => await getAllReviewsByAlbumId(albumId)
)
