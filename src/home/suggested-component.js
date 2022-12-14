import React from "react";
import RecordGridItem from "./record-grid-item";
import "./index.css";

const SuggestedComponent = ({suggested}) => {
    return(
        <>
            <div className="d-flex flex-row">
                {!suggested ? <></>:
                    suggested.map(record => <RecordGridItem key={record._id} record={record}/>)
                }
            </div>
        </>
    );
}
export default SuggestedComponent;