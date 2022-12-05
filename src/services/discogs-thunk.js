import {createAsyncThunk} from "@reduxjs/toolkit";
import {createAlbumListing, findAllListingsById, getAlbums} from "./discogs-service";


export const getAlbumsThunk = createAsyncThunk(
    "discogs/getalbums", async (album) => {
        return await getAlbums(album);
    }
)

export const getAllListingsThunk = createAsyncThunk(
    "discogs/getAlbumFromMongo", async (discogsId) => {
        return getAllListingsById()
    }
)

export const createAlbumListingThunk = createAsyncThunk(
    "discogs/createListingThunk", async (listing) => {
        return await createAlbumListing(listing);
    }
);