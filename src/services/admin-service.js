import axios from "axios";

const API_LISTINGS_PATH = "http://localhost:2000/users/"

export const getAllOpenApprovals = async () => {
    const result = await axios.get(API_LISTINGS_PATH+"approvals")
    return result.data;
}