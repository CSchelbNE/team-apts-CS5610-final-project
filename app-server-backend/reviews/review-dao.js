import reviewModel from "./review-model.js";
import mongoose from "mongoose";
import userModel from "../users/users-model.js";

export const createReview = async (review) => {
    const result = await reviewModel.create(review);
    return reviewModel.findById(result._id).populate(["user","listing"]);
}

export const getAllReviewsByUsername = async (username) => {
    const result = await userModel.findOne({username: username}).lean(true);
    console.log(result);
    return reviewModel.find({user: result._id}).populate(["user", "listing"]);
}

export const getAllReviewsByAlbum = (albumId) => {
    return reviewModel.find({listing: mongoose.Types.ObjectId(albumId)}).populate(["user","listing"]);
}
