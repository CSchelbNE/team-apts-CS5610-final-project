import React from "react";
import suggestedArray from "./suggested-array";
import RecordGridItem from "./record-grid-item";
import "./index.css";

const SuggestedComponent = () => {
    return(
        <>
            <div className="wd-flex-box-format">
                {
                    suggestedArray.map(record => <RecordGridItem key={record._id} record={record}/>)
                }
            </div>
        </>
    );
}
export default SuggestedComponent;