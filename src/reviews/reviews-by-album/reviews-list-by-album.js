import React from "react";
import ReviewsListItemByAlbum from "./reviews-list-item-by-album";

const ReviewsListByAlbum = () => {
    const reviewsArr = [{profilePic: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        body: "blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah.",
        rating: 2, _id: 123, record_name: "Experience Hendrix (The Best Of Jimi Hendrix)",
        record_artist: "Jimi Hendrix", record_year: "1997",
        record_image: "https://i.discogs.com/gqBukIXFakpLi-2JHVzC6NUzZFkSHJKqYz3ljOoUMZg/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1NDE0/NTItMTQ5NDUwMDc0/Mi04NzI3LmpwZWc.jpeg"},
        {profilePic: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            body: "blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah.",
            rating: 3, _id:234, record_name: "Experience Hendrix (The Best Of Jimi Hendrix)",
            record_artist: "Jimi Hendrix", record_year: "1997",
            record_image: "https://i.discogs.com/gqBukIXFakpLi-2JHVzC6NUzZFkSHJKqYz3ljOoUMZg/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1NDE0/NTItMTQ5NDUwMDc0/Mi04NzI3LmpwZWc.jpeg"}];
    return(
        <>
            <ul className="list-group">
                {
                    reviewsArr.slice(0).reverse().map(review =>
                        <ReviewsListItemByAlbum key={review._id} review={review}/>
                    )
                }
            </ul>
        </>
    );
}
export default ReviewsListByAlbum;