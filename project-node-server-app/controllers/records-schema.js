import mongoose from "mongoose";

const schema = mongoose.Schema({
    record_name: String,
    record_artist: String,
    record_quantity: Number,
    record_year: Number,
    record_price: Number,
    record_genre: String,
    record_image: String,
}, {collection: 'records'});

export default schema;