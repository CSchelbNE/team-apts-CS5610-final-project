import {createAsyncThunk} from "@reduxjs/toolkit";
import {addFollower, deleteFollower, getAllFollowers} from "./following-service";

export const getAllFollowersThunk = createAsyncThunk(
    "follow/getFollowers", async (id) => {
        return await getAllFollowers(id);
    }
)

export const addFollowerThunk = createAsyncThunk(
    "follow/addFollower", async (userIds) => {
        return await addFollower(userIds);
    }
)

export const deleteFollowerThunk = createAsyncThunk(
    "follow/deleteFollower", async ({followingUser, followedUser}) => {
        return await deleteFollower({followingUser, followedUser});
    }
)