import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;
const REC_API = `${API_BASE}/rec`;

export const findRecs = async () => {
    const response = await axios.get(REC_API);
    const rec = response.data;
    return rec;
}

export const createRecs = async (rec) => {
    const response = await axios.post(REC_API, rec)
    return response.data;
}

export const deleteRecs = async (r_id) => {
    const response = await axios.delete(`${REC_API}/${r_id}`)
    return response.data
}


export const updateRec = async (rec) => {
    const response = await axios.put(`${REC_API}/${rec.record_id}`, rec);
    return rec;

}

