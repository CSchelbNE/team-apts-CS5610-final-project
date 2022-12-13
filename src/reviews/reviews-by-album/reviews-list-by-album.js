import React, {useEffect} from "react";
import ReviewsListItemByAlbum from "./reviews-list-item-by-album";
import {useDispatch, useSelector} from "react-redux";
import {getAllReviewsByUsernameThunk} from "../../services/review-thunk";

const ReviewsListByAlbum = ({profileUser}) => {
    // const reviewsArr = [{profilePic: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    //     body: "blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah.",
    //     rating: 2, _id: 123, record_name: "Experience Hendrix (The Best Of Jimi Hendrix)",
    //     record_artist: "Jimi Hendrix", record_year: "1997",
    //     record_image: "https://i.discogs.com/gqBukIXFakpLi-2JHVzC6NUzZFkSHJKqYz3ljOoUMZg/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1NDE0/NTItMTQ5NDUwMDc0/Mi04NzI3LmpwZWc.jpeg"},
    //     {profilePic: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    //         body: "blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah.",
    //         rating: 3, _id:234, record_name: "Experience Hendrix (The Best Of Jimi Hendrix)",
    //         record_artist: "Jimi Hendrix", record_year: "1997",
    //         record_image: "https://i.discogs.com/gqBukIXFakpLi-2JHVzC6NUzZFkSHJKqYz3ljOoUMZg/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1NDE0/NTItMTQ5NDUwMDc0/Mi04NzI3LmpwZWc.jpeg"}];
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllReviewsByUsernameThunk(profileUser.username));
    }, []);
    const reviews = useSelector(state => state.reviews.reviews);
    return(
        <>
            <ul className="list-group">
                {
                    reviews &&
                    reviews.map(review =>
                        <ReviewsListItemByAlbum key={review._id} review={review}/>
                    ).reverse()
                }
            </ul>
        </>
    );
}
export default ReviewsListByAlbum;