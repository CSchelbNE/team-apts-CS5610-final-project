import mongoose from "mongoose";

const wishlistSchema = mongoose.Schema({
    username: String,
    wishlist_records: {type: Array, "default": []}
}, {collection: "wishlists"})

export default wishlistSchema;