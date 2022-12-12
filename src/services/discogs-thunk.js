import {createAsyncThunk} from "@reduxjs/toolkit";
import {
    createAlbumListing,
    getAlbums,
    findAllListingsById,
    getSingleListingById
} from "./discogs-service";


export const getAlbumsThunk = createAsyncThunk(
    "discogs/getalbums", async (album) => {
        return await getAlbums(album);
    }
)

export const findAllListingsThunk = createAsyncThunk(
    "discogs/getAlbumFromMongo", async (discogsId) => {
        return await findAllListingsById(discogsId);
    }
)

export const createAlbumListingThunk = createAsyncThunk(
    "discogs/createListingThunk", async (listing) => {
        return await createAlbumListing(listing);
    }
);

export const getSingleListingByIdThunk = createAsyncThunk(
    "discogs/getSingleListing", async (id) => {
        return await getSingleListingById(id);
    }
)