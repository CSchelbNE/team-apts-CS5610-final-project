import searchController from "./database/search-db.js";
import UserController from "./users/users-controller.js";
import express from 'express';
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(express.json());
// DB_CONNECTION_STRING_APTS = mongodb+srv://APTS-final-project:supersecretpassword@cluster0.80l7cee.mongodb.net/?retryWrites=true&w=majority
// put above in environment variables (see A9), then erase these comments, thanks!
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING_APTS || 'mongodb+srv://APTS-final-project:supersecretpassword@cluster0.80l7cee.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(CONNECTION_STRING);
app.use(cors());
searchController(app);
UserController(app)
app.listen(2000);
