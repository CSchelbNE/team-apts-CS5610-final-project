import {createAsyncThunk} from "@reduxjs/toolkit";
import {getArtist} from "./discogs-service";


export const getArtistsThunk = createAsyncThunk(
    "discogs/get", async (artist) => {
        return await getArtist(artist);
    })