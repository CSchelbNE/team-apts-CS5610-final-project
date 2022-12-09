import React from "react";
import "./index.css";
import {useNavigate} from "react-router-dom";

const RecordGridItem = ({record}) => {
    const navigate = useNavigate();


    return(
        <>
            <div className="d-inline-flex ms-3 mt-2 mb-2 p-2 border fs-3 flex-nowrap"
                 onClick={() => {
                     navigate("/listings/"+record.discogs_id);
                 }}>
                <div className="p-2 flex-inline my-auto">
                    <img src={`${record.record_image}`} className="wd-record-image-format"/>
                </div>
                <div className="flex-inline flex-nowrap">
                    <div>{record.record_name}</div>
                    <div>{record.record_artist}</div>
                    <div>{record.record_year}</div>
                </div>
            </div>
        </>
    );
}
export default RecordGridItem;