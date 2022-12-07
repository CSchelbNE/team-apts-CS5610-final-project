import express from 'express';
import cors from 'cors';
import HelloController from "./controllers/hello-controller.js";
import RecordController from "./controllers/record-controller.js";
import mongoose from "mongoose";

mongoose.connect('mongodb"//localhost:27017/records')
// mongodb+srv://APTS-final-project:<password>@cluster0.80l7cee.mongodb.net/?retryWrites=true&w=majority
const app = express()
app.use(cors())
app.use(express.json())
RecordController(app)
HelloController(app)
app.listen(4000)