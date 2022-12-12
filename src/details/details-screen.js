import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import NavigationSidebar from "../navigation-sidebar/nav-bar";
import {
    createReviewThunk,
    getAllReviewsByAlbumIdThunk,
} from "../services/review-thunk";
import {useParams} from "react-router";
import {editListingThunk, getSingleListingByIdThunk, deleteListingThunk} from "../services/discogs-thunk";
import {createSearchParams, useNavigate, useSearchParams} from "react-router-dom";


const DetailsScreen = () => {
    const dispatch = useDispatch();
    const albumId = useParams().id;
    const navigation = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query");
    const [newReview, setNewReview] = useState(true);
    useEffect(() => {
        if(newReview) {
            // USED TO REDUCE UNNECESSARY DATABASE CALLBACK ON REFRESH
            setNewReview(false);
            dispatch(getSingleListingByIdThunk(albumId));
            dispatch(getAllReviewsByAlbumIdThunk(albumId));
        }
    },[])
    const details = useSelector(state => state.discogs.details);
    const currentUser = useSelector(state => state.users.currentUser);
    const reviews = useSelector(state => state.reviews.reviews);
    const modifyListingButtonStyle = !currentUser || !details ? "d-none" : currentUser._id === details.record_vendor._id ? "btn btn-outline-dark" : "d-none";
    const createReview = (rating, body) => (event) => {
        // dynamically pass in rating from the onclick event
        const newReview = {listing: details._id, rating:rating, body: body, user: currentUser._id};
        setNewReview(true);
        dispatch(createReviewThunk(newReview));
    }
    return (
        <>
        {!details ? <></> :
         <>
             <NavigationSidebar/>
             <div className="text-center">
                <div className="row">
                    <div className="d-grid col-4 m-5">
                        <div className="row">
                            <div className="p-2">
                                <img src={details.record_image}/>
                            </div>
                            <div className="p-2">
                                <button className="btn btn-outline-dark">Add to cart</button>
                            </div>
                            <div className="p-2">
                                <button className="btn btn-outline-dark">Add to wishlist</button>
                            </div>
                            <div className="p-2">
                                <button className={modifyListingButtonStyle} onClick={() => {
                                    dispatch(editListingThunk({...details, record_vendor: details.record_vendor._id, record_quanity: 223332, record_price: 122.22}))
                                }}>Edit Listing
                                </button>
                            </div>
                            <div className="p-2">
                                <button className={modifyListingButtonStyle} onClick={() => {
                                    const params = {
                                        'id': details.discogs_id.toString(),
                                        "query": query
                                    };
                                    dispatch(deleteListingThunk(details._id));
                                    navigation({
                                                   pathname: "/search",
                                                   search: `?${createSearchParams(params)}`
                                               });
                                }}>Delete Listing</button>
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
                                <h5 className="text-dark">Qty available: {details.record_quantity}</h5>
                            </div>
                            <div className="p-2">
                                <h5 className="text-dark">Price: ${details.record_price}</h5>
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



