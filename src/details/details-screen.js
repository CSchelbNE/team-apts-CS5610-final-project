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
         <div className="container text-center">
            <div className="row">
                <div className="d-grid col-4 m-5">
                    <div className="row">
                        <div className="p-2">
                            <img src={singleListing[0].record_image}/>
                        </div>
                        <div className="p-2">
                            <button className="btn btn-outline-dark">Add to cart</button>
                        </div>
                        <div className="p-2">
                            <button className="btn btn-outline-dark">Add to wishlist</button>
                        </div>
                    </div>
                </div>

                <div className="d-grid col-5 m-2">
                    <div className="row">
                        <div className="p-2">
                            <h2 className="text-dark">{singleListing[0].record_name}</h2>
                        </div>
                        <div className="p-2">
                            <h3 className="text-dark">By: {singleListing[0].record_artist}</h3>
                        </div>
                        <div className="p-2">
                            <h5 className="text-dark">Genre: {singleListing[0].record_genre}</h5>
                        </div>
                        <div className="p-2">
                            <h5 className="text-dark">Year recorded: {singleListing[0].record_year}</h5>
                        </div>
                        <div className="p-2">
                            <h5 className="text-dark">Qty available: {singleListing[0].record_quantity}</h5>
                        </div>
                        <div className="p-2">
                            <h5 className="text-dark">Price: ${singleListing[0].record_price}</h5>
                        </div>
                    </div>
                </div>
         </div>
         </div>
            }
        </>

    );
}
export default DetailsScreen;



