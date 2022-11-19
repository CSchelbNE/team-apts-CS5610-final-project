import searchController from "./database/search-db.js";
import express from 'express';

const app = express();
app.use(express.json());
searchController(app);
app.listen(2000);
