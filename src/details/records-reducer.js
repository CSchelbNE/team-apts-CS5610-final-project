import { createSlice } from "@reduxjs/toolkit";
import rec from './records.json';
import {createRecThunk, findRecThunk, deleteRecThunk, updateRecThunk} from "../services/records-thunks";

const initialState = {
    rec: [],
    loading: false
}

const currentRec = {
    "record_name": "NASA",
};

const templateRec = {
    ...currentRec,
    "record_artist": "USA",
    "record_genre": "Fiction",
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
                state.rec = payload
            },
        [findRecThunk.rejected]:
            (state) => {
                state.loading = false
            },
        [deleteRecThunk.fulfilled] :
            (state, { payload }) => {
                state.loading = false
                state.rec = state.rec
                    .filter(r => r.record_id !== payload)
            },
        [createRecThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.rec.push(payload)
            },
        [updateRecThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                const recNdx = state.tuits
                    .findIndex((r) => r.record_id === payload.record_id)
                state.rec[recNdx] = {
                    ...state.rec[recNdx],
                    ...payload
                }
            }
    },
    reducers: {
        deleteRec(state, action) {
            const index = state
                .findIndex(rec =>
                    rec.record_id === action.payload.record_id);
            state.splice(index, 1);
        },
        createRec(state, action) {
            state.unshift({
                ...action.payload,
                ...templateRec,
                record_id: (new Date()).getTime(),
            })
        }
    }
});

export const {createRec, deleteRec} = recSlice.actions;
export default recSlice.reducer;

