import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "./records-service"

export const findRecThunk = createAsyncThunk(
    'rec/findRec', async () =>
        await service.findRecs()
)

export const deleteRecThunk = createAsyncThunk(
    'rec/deleteRec',
    async (r_id) => {
        await service.deleteRecs(r_id)
        return r_id
    })

export const createRecThunk = createAsyncThunk(
    'rec/createRec', async (rec) =>
        await service.createRecs()
)

export const updateRecThunk =
    createAsyncThunk(
        'rec/updateRec',
        async (rec) =>
            await service.updateRec(rec)
    )

