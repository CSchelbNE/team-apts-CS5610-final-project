import wishlistModel from "./wishlist-model.js";


export const postToWishlist = async (album, username) => {
    await wishlistModel.updateOne({username: username}, {$push: {wishlist_records: album}});
    return wishlistModel.findOne({username: username});

}

export const createEmptyWishlist = (username) => {
    return wishlistModel.create({username: username});
}

export const getWishlistByUsername = (username) => {
    return wishlistModel.findOne({username: username});
}

export const deleteItemFromWishlist = async (albumId, username) => {
    const previousList = await wishlistModel.findOne({username: username});
    const result = {username: previousList.username, wishlist_records: previousList.wishlist_records.filter(e => e.discogs_id !== parseInt(albumId))};
    return wishlistModel.updateOne({username: username}, {$set: result});
}