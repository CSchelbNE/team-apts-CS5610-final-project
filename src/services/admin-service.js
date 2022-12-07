import axios from "axios";

const API_LISTINGS_PATH = "http://localhost:2000/users/"

export const getAllOpenApprovals = async () => {
    const result = await axios.get(API_LISTINGS_PATH+"approvals")
    return result.data;
}

export const closeApproval = async ({username, decision}) => {
    const result = await axios.put(API_LISTINGS_PATH+"approvals/close?decision="+decision+"&username="+username);
    return result.data;
}