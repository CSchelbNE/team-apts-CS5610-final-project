import searchController from "./database/search-db.js";
import express from 'express';
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());
searchController(app);
app.listen(2000);
