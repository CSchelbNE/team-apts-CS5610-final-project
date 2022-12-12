import React from "react";
import ReviewsListByAlbum from "./reviews-list-by-album";

const ReviewsByAlbum = ({profileUser}) => {
    return(
        <>
            <ReviewsListByAlbum profileUser={profileUser}/>
        </>
    );
}
export default ReviewsByAlbum;