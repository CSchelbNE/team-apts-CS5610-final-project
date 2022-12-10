import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import NavigationSidebar from "../navigation-sidebar/nav-bar";
import {Nav} from "react-bootstrap";

console.log("This is a detailed listing page");

const DetailsScreen = ({listing}) => {
    const location = useLocation();
    const index = location.state.index;

    const listings = useSelector(state => state.discogs.listings);
    return (
        <>
        {listings.length === 0 ? <></> :
         <>
             <NavigationSidebar/>
             <div className="text-center">
                <div className="row">
                    <div className="d-grid col-4 m-5">
                        <div className="row">
                            <div className="p-2">
                                <img src={listings[index].record_image}/>
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
                                <h2 className="text-dark">{listings[index].record_name}</h2>
                            </div>
                            <div className="p-2">
                                <h3 className="text-dark">By: {listings[index].record_artist}</h3>
                            </div>
                            <div className="p-2">
                                <h5 className="text-dark">Genre: {listings[index].record_genre}</h5>
                            </div>
                            <div className="p-2">
                                <h5 className="text-dark">Year recorded: {listings[index].record_year}</h5>
                            </div>
                            <div className="p-2">
                                <h5 className="text-dark">Qty available: {listings[index].record_quantity}</h5>
                            </div>
                            <div className="p-2">
                                <h5 className="text-dark">Price: ${listings[index].record_price}</h5>
                            </div>
                        </div>
                    </div>
             </div>
             </div>
         </>
            }
        </>

    );
}
export default DetailsScreen;



