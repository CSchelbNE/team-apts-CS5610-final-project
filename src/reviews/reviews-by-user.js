import React from "react";
import CreateReviewComponent from "./create-review-component";
import ReviewsListByUser from "./reviews-list-by-user";

const ReviewsByUser = () => {
    return(
        <>
            <CreateReviewComponent/>
            <ReviewsListByUser/>
        </>
    );
}
export default ReviewsByUser;