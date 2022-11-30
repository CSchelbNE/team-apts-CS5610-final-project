import userModel from "./users-model.js";

export const createUser = (user) => userModel.create(user);

export const findAllUsers = () => userModel.find();

export const findUsersById = (uid) => userModel.findById(uid);

export const findByUsername = (username) => userModel.findOne({username})

export const findByCredentials = (username, password) => userModel.findOne({username, password}, {password: false});

export const deleteUser = (uid) => userModel.deleteOne({_id : uid});

export const updateUser = (uid, userUpdates) => userModel.updateOne({_id: uid}, {$set: userUpdates})
