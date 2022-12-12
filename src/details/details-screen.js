import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useSearchParams} from "react-router-dom";
import NavigationSidebar from "../navigation-sidebar/nav-bar";
import {createReviewThunk, getAllReviewsByAlbumIdThunk} from "../services/review-thunk";
import {useParams} from "react-router";


const DetailsScreen = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        if(newReview) {
            // USED TO REDUCE UNNECESSARY DATABASE CALLBACK ON REFRESH
            setNewReview(false);
            dispatch(getAllReviewsByAlbumIdThunk(albumId));
        }
    },[])
    const listings = useSelector(state => state.discogs.listings);
    const currentUser = useSelector(state => state.users.currentUser);
    const reviews = useSelector(state => state.reviews.reviews);
    const [params, setSearchParams] = useSearchParams();
    const [newReview, setNewReview] = useState(true);
    const albumId = useParams().id;
    const index = params.get("index");
    const createReview = () => {
        const newReview = {listing: listings[index]._id, rating:2, user: currentUser._id};
        dispatch(createReviewThunk(newReview));
    }
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
                            <div>
                                <button onClick={createReview}>Write Review</button>
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



