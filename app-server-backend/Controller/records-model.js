import mongoose from "mongoose";
import recordsSchema from "./records-schema.js";
import React from "react";

const recordsModel = mongoose.model('RecordModel', recordsSchema);

export default recordsModel;