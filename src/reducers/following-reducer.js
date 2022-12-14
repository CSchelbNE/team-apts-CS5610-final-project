import { createSlice } from "@reduxjs/toolkit";
import {
    addFollowerThunk,
    deleteFollowerThunk, getAllFollowedThunk,
    getAllFollowersThunk
} from "../services/following-thunk";

const initialState = {
    followingUsers : [],
    followedUsers: []
}

const followingSlice = createSlice({
                                   name: "following",
                                   initialState,
                                   middleware: (getDefaultMiddleware) => getDefaultMiddleware({
                                          serializableCheck: false
                                      }),
                                   extraReducers: {
                                       [getAllFollowersThunk.fulfilled]:
                                           (state, {payload}) => {
                                                state.followingUsers = payload;
                                                console.log(state.followingUsers);
                                           },
                                       [addFollowerThunk.fulfilled]:
                                           (state, {payload}) => {
                                                state.followingUsers.push(payload);
                                                state.isFollowing = true;
                                                console.log(state.followingUsers);
                                           },
                                       [deleteFollowerThunk.fulfilled]:
                                           (state, {payload}) => {
                                               const index = state.followingUsers.findIndex((e) => e._id === payload._id);
                                               const leftSlice = state.followingUsers.slice(0,index);
                                               const rightSlice = state.followingUsers.slice(index+1);
                                               state.followingUsers = [...leftSlice, ...rightSlice];
                                           },
                                       [getAllFollowedThunk.fulfilled]:
                                           (state, {payload}) => {
                                                state.followedUsers = payload;
                                           }
                                   }
                               });

export default followingSlice.reducer;
