import axios from "axios";
const BASE_API_PATH = process.env.REACT_APP_APTS_API_BASE;

const API_FOLLOWING_PATH = `${BASE_API_PATH}follow`;
const api = axios.create({withCredentials: true});


// Expects a fully formed review document object
export const addFollower = async (userIds) => {
    const result = await api.post(API_FOLLOWING_PATH, userIds);
    return result.data;
}


export const getAllFollowers = async (id) => {
    console.log(API_FOLLOWING_PATH+"/get-all/"+id.toString())
    const result = await api.get(API_FOLLOWING_PATH+"/get-all/"+id.toString());
    return result.data;
}

export const deleteFollower = async ({followingUser, followedUser}) => {

    const result = await api.delete(API_FOLLOWING_PATH+"?followed_user="+
                                    followedUser.toString()+"&following_user="+followingUser.toString());
    return result.data;
}