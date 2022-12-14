import React from "react";
import "./index.css";
import {useNavigate} from "react-router-dom";

const RecordGridItem = ({record}) => {
    const navigate = useNavigate();
    return(
        <>
        <div onClick={() => {
            navigate("/details/"+record._id);
        }} className="w-50 mw-50 d-flex align-content-center justify-content-center ms-3 mt-1 mb-1 p-1  border fs-1 ">
                <img className="mt-md-2" style={{width:"90%", height:"90%"}} src={record.record_image}/>
            </div>
        </>

    );
}
export default RecordGridItem;