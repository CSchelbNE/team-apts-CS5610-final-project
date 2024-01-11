import express from 'express';
import cors from 'cors';
import HelloController from "./controllers/hello-controller.js";
import RecordController from "./controllers/record-controller.js";
import mongoose from "mongoose";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb"//localhost:27017/records'
mongoose.connect(CONNECTION_STRING);
const app = express()
app.use(cors())
app.use(express.json())
RecordController(app)
HelloController(app)
app.listen(4000)