import React from "react";
import "../index.css";
import {useDispatch} from "react-redux";
import {deleteReviewByIdThunk} from "../../services/review-thunk";
import {Link} from "react-router-dom";

const ReviewsListItemByAlbum = ({review}) => {
    const dispatch = useDispatch();
    const deleteReview = () => {
        dispatch(deleteReviewByIdThunk(review._id));
    }
    console.log("review._id");
    console.log(review._id);

    return(
        <>
            {/*<Link to={"/details/" + review._id}>*/}
                <li className="list-group-item">
                    <div className="text-start">
                        <div className="row ">
                            <div className="text-end ">
                                <img src={require("../../images/big_x.png")} className="wd-big-x-format" onClick={deleteReview}/>
                            </div>
                            <div className="text-center">
                                <Link to={"/details/" + review.listing._id + "?query=" + review.listing.record_name.split(' ')[0]}>
                                    <div className="d-inline-flex">
                                        <div className="">
                                            <img src={review.listing.record_image} className="wd-thumb-format"/>
                                        </div>
                                        <div className="flex-inline flex-nowrap text-start ms-2 my-auto">
                                            <div>{review.listing.record_name}</div>
                                            <div>{review.listing.record_artist}</div>
                                            <div>{review.listing.record_year}</div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="ms-0 col-2 ">
                                <img src={review.user.profilePic}
                                     className="wd-profile-pic-large-format rounded-circle mt-2"/>
                            </div>
                            <div className="col-11 col-lg-10 col-md-10 col-sm-11">
                                <div className="float-end wd-nowrap">
                                    {/*5 stars*/}
                                    <img src={require(review.rating >= 1 ? "../../images/gold-star-icon.png" : "../../images/gray-star-icon.jpg")}
                                         className="wd-gold-star-format me-1" />
                                    <img src={require(review.rating >= 2 ? "../../images/gold-star-icon.png" : "../../images/gray-star-icon.jpg")}
                                         className="wd-gold-star-format me-1" />
                                    <img src={require(review.rating >= 3 ? "../../images/gold-star-icon.png" : "../../images/gray-star-icon.jpg")}
                                         className="wd-gold-star-format me-1" />
                                    <img src={require(review.rating >= 4 ? "../../images/gold-star-icon.png" : "../../images/gray-star-icon.jpg")}
                                         className="wd-gold-star-format me-1" />
                                    <img src={require(review.rating >= 5 ? "../../images/gold-star-icon.png" : "../../images/gray-star-icon.jpg")}
                                         className="wd-gold-star-format me-1" />
                                </div>
                                <div className="float-start mt-2">
                                    <div>
                                        {review.body}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            {/*</Link>*/}
        </>
    );
}
export default ReviewsListItemByAlbum;