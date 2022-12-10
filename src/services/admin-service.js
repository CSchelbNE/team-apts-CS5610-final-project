import axios from "axios";

// const BASE_API_PATH = process.env.APTS_API_BASE;
const BASE_API_PATH = "https://apts-server-backend.herokuapp.com/"
const API_LISTINGS_PATH = `${BASE_API_PATH}users/`;


export const getAllOpenApprovals = async () => {
    const result = await axios.get(API_LISTINGS_PATH+"approvals")
    return result.data;
}

export const closeApproval = async ({user, decision}) => {
    const result = await axios.put(API_LISTINGS_PATH+"approvals/close?decision="+decision+"&username="+user.username);
    return result.data;
}