import listingModel from "./listing-model.js";

export const pushListingToDB = (listing) => listingModel.create(listing);
