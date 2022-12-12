import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

// import {findAllListingsThunk} from "../services/discogs-thunk";
import ReviewsByUser from "../reviews/reviews-by-user";
// console.log("This is a detailed listing page");

import NavigationSidebar from "../navigation-sidebar/nav-bar";
import {
    createReviewThunk,
    getAllReviewsByAlbumIdThunk,
} from "../services/review-thunk";
import {useParams} from "react-router";
import {getSingleListingByIdThunk} from "../services/discogs-thunk";

const DetailsScreen = () => {
    const dispatch = useDispatch();
    const albumId = useParams().id;
    useEffect(() => {
        dispatch(getSingleListingByIdThunk(albumId));
        if(newReview) {
            // USED TO REDUCE UNNECESSARY DATABASE CALLBACK ON REFRESH
            setNewReview(false);
            dispatch(getAllReviewsByAlbumIdThunk(albumId));
        }
    },[])
    const details = useSelector(state => state.discogs.details);
    const currentUser = useSelector(state => state.users.currentUser);
    const reviews = useSelector(state => state.reviews.reviews);
    const [newReview, setNewReview] = useState(true);
    // const createReview = (rating, body) => (event) => {
    //     // dynamically pass in rating from the onclick event
    //     const newReview = {listing: details._id, rating:rating, body: body, user: currentUser._id};
    //     setNewReview(true);
    //     dispatch(createReviewThunk(newReview));
    // }
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
                            {/*<div>*/}
                            {/*    <button onClick={createReview(2,"DBC123")}>Write Review</button>*/}
                            {/*</div>*/}
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
                 <h3>Review by User</h3>
                 <div className="row ">
                     <div className="col-3"></div>
                     <div className="col-6">


                                 <ReviewsByUser setNewReview={setNewReview} details={details} currentUser={currentUser}
                                            reviews={reviews}/>

                     </div>
                     <div className="col-3"></div>
                 </div>
             </div>


             {/*//     {"Reviews: "}*/}
             {/*//     {!reviews ? " ": reviews.map((e)=> {*/}
             {/*//         return e.user.username + " " + e.listing.record_name+ " "+e.body+"\n";*/}


         </>
        }
        </>

    );
}
export default DetailsScreen;



