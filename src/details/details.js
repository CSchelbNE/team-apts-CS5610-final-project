import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findRecThunk} from "../services/records-thunks";
import RecordItem from "./recordItem";
import postArray from "./records.json"

const RecsList = () => {
    const {rec, loading} = useSelector(
        state => state.recData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findRecThunk())
    }, [])
    return(
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                postArray.map(rec =>
                    <RecordItem key={rec.record_id} rec={rec}/>
                )
            }
        </ul>
    );
};
export default RecsList;

