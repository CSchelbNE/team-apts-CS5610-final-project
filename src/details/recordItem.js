import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {findRecThunk} from "../services/records-thunks";
// import {findRecs} from "../services/records-service";

const RecordItem = (
    {
        records = {
            "record_id": 1,
            "record_name": "Rumours",
            "record_artist": "Fleetwood Mac",
            "record_genre": "Rock",
            "record_year": 1977,
            "record_price": 19.99,
            "record_quantity": 5,
            "record_image": "https://cdn.shopify.com/s/files/1/2976/0132/products/1813751_720x.jpg",
            "record_vendor": 1
        }
    }
) => {
    const dispatch = useDispatch();
    const findRecHandler = (r_id) => {
        dispatch(findRecThunk(r_id));
    }
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img className="float-end rounded-5" src={`${records.record_image}`}/>
                </div>
                <div className="col-10">
                    <div>{records.record_name} &nbsp; {records.record_artist} &nbsp;</div>
                </div>
            </div>
        </li>
    );
};

export default RecordItem;
