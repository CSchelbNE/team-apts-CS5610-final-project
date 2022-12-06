import {createAsyncThunk} from "@reduxjs/toolkit";
import {getAlbums, getArtist} from "./discogs-service";


export const getArtistsThunk = createAsyncThunk(
    "discogs/get", async (artist) => {
        return await getArtist(artist);
    });

export const getAlbumsThunk = createAsyncThunk(
    "discogs/getalbums", async (album) => {
        console.log(album)
        return await getAlbums(album);
    }
)