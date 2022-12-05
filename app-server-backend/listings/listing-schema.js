import mongoose from "mongoose";

const listingSchema = mongoose.Schema({
    record_name: String,
    record_artist: String,
    record_genre: {type: Array, "default": []},
    record_year: Number,
    record_price: Number,
    record_quantity: Number,
    record_image: String,
    record_vendor: Number
}, {collection: "records"})

export default listingSchema;
