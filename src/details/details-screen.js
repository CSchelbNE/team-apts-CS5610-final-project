import React, {useEffect} from "react";
import NavigationSidebar from "../navigation-sidebar/nav-bar";
import {useDispatch, useSelector} from "react-redux";
import {findAllListingsThunk} from "../services/discogs-thunk";

console.log("This is a detailed listing page");

const DetailsScreen = ({listing}) => {
    const dispatch = useDispatch();
    const singleListing = useSelector(state => state.discogs.listings);
    return (
        <>
        {!singleListing ? <></> :
         <div>
            <div className="d-inline-flex col-5 border border-2 border-primary">
                <h1> Column 1</h1>
                {/*<img src={singleListing[0].record_image}/>*/}
            </div>
            <div className="d-inline-flex col-5 border border-2 border-danger">
                <h1>Column 2</h1>
            </div>
         </div>
            }
        </>

    );
}
export default DetailsScreen;



