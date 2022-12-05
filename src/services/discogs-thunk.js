import {createAsyncThunk} from "@reduxjs/toolkit";
import {getAlbums, getArtist} from "./discogs-service";


export const getArtistsThunk = createAsyncThunk(
    "discogs/get", async (artist) => {
        return await getArtist(artist);
    });

export const getAlbumsThunk = createAsyncThunk(
    "discogs/getalbums", async (album) => {
        return await getAlbums(album);
    }
)

export const searchMongoDBForAlbumThunk = createAsyncThunk(
    "discogs/getAlbumFromMongo", async (albumName) => {
    }
)

export const createAlbumListingThunk = createAsyncThunk(
    "discogs/createListingThunk", async (albumName) => {
    }
);