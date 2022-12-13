import shoppingCartModel from "./shopping-cart-model.js";
import mongoose from "mongoose";


export const getShoppingCartById = (id) => {

}


export const createEmptyShoppingCart = (id) => {
    return shoppingCartModel.create({owner: new mongoose.Types.ObjectId(id)})
}


export const postToShoppingCart = async (listing, id) => {
    await shoppingCartModel.updateOne({owner: new mongoose.Types.ObjectId(id)}, {$push: {shopping_cart: listing}});
    return shoppingCartModel.findOne({owner: new mongoose.Types.ObjectId(id)})
}


// ID IS THE USER ID, ITEM TO DELETE IS THE LISTING ID
export const deleteFromShoppingCart = async (itemToDelete, id) => {
    const previousList = await shoppingCartModel.findOne({owner: new mongoose.Types.ObjectId(id)}).lean(true);
    const newValue = {owner: previousList.owner, shopping_cart :previousList.shopping_cart.filter(e => {
        return e._id.$oid.toString() !== itemToDelete
    })}
    return shoppingCartModel.updateOne({owner: new mongoose.Types.ObjectId(id)}, {$set: newValue});
}