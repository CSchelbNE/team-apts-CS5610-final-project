import * as dao from "./following-dao.js"

export const FollowingController = (app) => {
    app.post("/follow", addFollower);
    app.get("/follow/get-all/:id", getAllFollowers);
    app.get("/follow/get-followed/:id", getAllFollowed)
    app.delete("/follow",deleteFollower);
}

export const getAllFollowers = async (req,res) => {
    const id = req.params.id;
    const result = await dao.getAllFollowers(id);
    return res.json(result);
}

export const getAllFollowed = async (req, res) => {
    const id = req.params.id;
    const result = await dao.getAllFollowed(id);
    return res.json(result);
}

export const addFollower = async (req,res) => {
    const ids = req.body;
    const result = await dao.createFollower(ids);
    return res.json(result);
}

export const deleteFollower = async (req,res) => {
    const followingUser = req.query.following_user;
    const followedUser = req.query.followed_user;
    const result = await dao.deleteFollower(followedUser,followingUser);
    return res.json(result);
}
