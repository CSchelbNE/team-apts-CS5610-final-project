import { createSlice } from "@reduxjs/toolkit";
import {getAllOpenApprovalsThunk} from "../services/admin-thunk";

const initialState = {
    openApprovals : [],
    focalApprovals : []
}


const adminSlice = createSlice({
    name: "admin",
    initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
    reducers: {
         getFocalApprovals(state, action) {
             console.log(action.payload);
             state.focalApprovals = state.openApprovals.slice(action.payload.lower, action.payload.upper);
        }
    },
    extraReducers: {
        [getAllOpenApprovalsThunk.fulfilled] :
            (state, {payload}) => {
                state.openApprovals = payload;
                console.log(state.openApprovals);
            }
    }
});

export const {getFocalApprovals} = adminSlice.actions
export default adminSlice.reducer;
