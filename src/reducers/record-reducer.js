import {createSlice}
    from "@reduxjs/toolkit";
// import records from './records.json';
import {findRecThunk}
    from "../../services/records-thunks";

const initialState = {
    rec: [],
    loading: false
}

const recSlice = createSlice({
    name: 'rec',
    initialState,
    extraReducers: {
        [findRecThunk.pending]:
            (state) => {
                state.loading = true
                state.rec = []
            },
        [findRecThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits = payload
            },
        [findRecThunk.rejected]:
            (state) => {
                state.loading = false
            }
    },
    reducers: { ... }
});

