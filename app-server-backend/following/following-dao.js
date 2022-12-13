import followingModel from "./following-model.js";
import mongoose from "mongoose";

export const deleteFollower = (followedUser, followingUser) => {
    return followingModel.deleteOne({following_user: new mongoose.Types.ObjectId(followingUser),
                                        followed_user: new mongoose.Types.ObjectId(followedUser)})
}

export const createFollower = async (ids) => {
    const newFollow = {
        followed_user: new mongoose.Types.ObjectId(ids.followed_user.toString()),
        following_user: new mongoose.Types.ObjectId(ids.following_user.toString())
    }
    const result = await followingModel.create(newFollow);
    return followingModel.findById(result._id).populate(["followed_user","following_user"]);
}

export const getAllFollowers = async (id) => {
    return followingModel.find({followed_user: new mongoose.Types.ObjectId(id)}).populate(["followed_user","following_user"]);
}