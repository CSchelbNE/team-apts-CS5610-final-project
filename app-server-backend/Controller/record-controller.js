// import records from "./records.js";
// let rec = records;
import * as recDao from "./records-dao.js"

const createRecord = async (req, res) => {
    const newRec = req.body;
    // newRec.record_id = (new Date()).getTime()+'';
    newRec.record_quantity = 0;
    newRec.record_vendor = 0;
    // rec.push(newRec);
    const insertedRec = await recDao.createRecs(newRec);
    res.json(insertedRec);
}
const findRecord  = async (req, res) => {
    const rec = await recDao.findRecs()
    res.json(rec);
}
const updateRecord = async (req, res) => {
    const recIdToUpdate = req.params.r_id;
    const updates = req.body;
    // const recIndex = rec.findIndex(
    //     (r) => r.record_id === recIdToUpdate)
    // rec[recIndex] =
    //     {...rec[recIndex], ...updates};
    const status = await recDao.updateRecs(recIdToUpdate, updates);
    res.json(status);

}
const deleteRecord = async (req, res) => {
    const recIdToDelete = req.params.r_id;
    const status = await recDao.deleteRecs(recIdToDelete);
    // rec = rec.filter((r) => r.record_vendor != recIdToDelete);
    res.json(status);
}

export default (app) => {
    app.post('/api/rec', createRecord);
    app.get('/api/rec', findRecord);
    app.put('/api/rec/:r_id', updateRecord);
    app.delete('/api/rec/:r_id', deleteRecord);
}

