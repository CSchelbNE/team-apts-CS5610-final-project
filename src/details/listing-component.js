import React from "react";
import ListingArray from "./listings-array";
import DetailsScreen from "./details";
const ListingComponent = () => {
    return(
        <>
            <div className="wd-flex-box-format">
                {
                    ListingArray.map(listing => <DetailsScreen key={listing._id} listing={listing}/>)
                }
            </div>
        </>
    );
}
export default ListingComponent;