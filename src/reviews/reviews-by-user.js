import React from "react";
import CreateReviewComponent from "./create-review-component";
import ReviewsListByUser from "./reviews-list-by-user";

const ReviewsByUser = ({details}, {currentUser}, {reviews}, {setNewReview}) => {
    return(
        <>
            <CreateReviewComponent details={details} currentUser={currentUser} setNewReview={setNewReview}/>
            <ReviewsListByUser/>
        </>
    );
}
export default ReviewsByUser;