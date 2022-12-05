import {pushListingToDB} from "./listing-dao.js";

const ListingsController = (app) => {
    app.post();
}

const createListing = async (res, req) => {
    const newListing = req.body;
    const returnedValue = await pushListingToDB(listing);
}