import { createSlice } from "@reduxjs/toolkit";
import {getAllOpenApprovalsThunk} from "../services/admin-thunk";

const initialState = {
    openApprovals : []
}


const adminSlice = createSlice({
    name: "admin",
    initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
    extraReducers: {
        [getAllOpenApprovalsThunk.fulfilled] :
            (state, {payload}) => {
                state = payload;
            }
    }
});

export default adminSlice.reducer;
