import mongoose from "mongoose"
import userSchema from "./users-schema"

const userModel = mongoose.model('UserModel', userSchema)

export default userModel