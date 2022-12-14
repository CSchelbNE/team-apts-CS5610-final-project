import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import { findCurrentUserThunk } from "../services/users-thunks";
import { useDispatch, useSelector } from "react-redux";
import { postToWishlistThunk, createEmptyWishlistThunk } from "../services/wishlist-thunk";

const NoListingsFoundScreen = ({details}) => {
    
    return (
        <>
            {
            !details ? 
            <></> 
            :
             <div className="container text-center">
                 <div className="row">
                     <div className="d-grid col-4 m-5">
                         <div className="row">
                             <div className="p-2">
                                 <img src={details.record_image}/>
                             </div>
                             <div className="p-2">
                                 <button className="btn btn-outline-dark">Add to wishlist</button>
                             </div>
                         </div>
                     </div>

                     <div className="d-grid col-5 m-2">
                         <div className="row">
                             <div className="p-2">
                                 <h2 className="text-dark">{details.record_name}</h2>
                             </div>
                             <div className="p-2">
                                 <h3 className="text-dark">By: {details.record_artist}</h3>
                             </div>
                             <div className="p-2">
                                 <h5 className="text-dark">Genre: {details.record_genre}</h5>
                             </div>
                             <div className="p-2">
                                 <h5 className="text-dark">Year recorded: {details.record_year}</h5>
                             </div>
                             <div className="p-2">
                                 <h5 className="text-dark">This record is currently out of stock!!</h5>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
            }
        </>

    );
}
export default NoListingsFoundScreen;

