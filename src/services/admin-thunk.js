import {createAsyncThunk} from "@reduxjs/toolkit";
import {getAllOpenApprovals} from "./admin-service";

export const getAllOpenApprovalsThunk = createAsyncThunk("admin/getApprovals", async () => {
    return await getAllOpenApprovals();
})