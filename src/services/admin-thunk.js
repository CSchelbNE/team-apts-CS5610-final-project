import {createAsyncThunk} from "@reduxjs/toolkit";
import {closeApproval, getAllOpenApprovals} from "./admin-service";

export const getAllOpenApprovalsThunk = createAsyncThunk("admin/getApprovals", async () => {
    return await getAllOpenApprovals();
})

export const closeApprovalThunk = createAsyncThunk("admin/closeApproval",
    async ({username, decision}) => {
    return closeApproval({username, decision});
})