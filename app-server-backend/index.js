import searchController from "./database/search-db.js";
import UserController from "./users/users-controller.js";
import express from 'express';
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
searchController(app);
UserController(app)
app.listen(2000);
