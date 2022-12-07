import recordsModel from "./records-model.js";
import React from "react";

export const findRecs = () => recordsModel.find();
export const createRecs = (rec) => recordsModel.create(rec);
export const deleteRecs = (r_id) => recordsModel.deleteOne({record_id: r_id});
export const updateRecs = (r_id, rec) => recordsModel.updateOne({record_id: r_id}, {$set: rec});