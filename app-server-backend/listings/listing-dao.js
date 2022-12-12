import listingModel from "./listing-model.js";

export const pushListingToDB = (listing) => {
    return listingModel.create(listing);
}

export const pullAllListingByID = (id) => {
    return listingModel.find({discogs_id: id}).populate("record_vendor");
}

export const getListingByMongoID = (id) => {
    return listingModel.findById(id).populate("record_vendor");
}
