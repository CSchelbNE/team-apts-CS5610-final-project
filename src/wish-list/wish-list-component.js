import React, {useEffect} from "react";
import "./index.css";
import RecordGridItem from "../home/record-grid-item";
import {useDispatch, useSelector} from "react-redux";
import {getWishlistByUsernameThunk} from "../services/wishlist-thunk";

const WishListComponent = ({currentUser}) => {
    const {wishlist_records} = useSelector(state => state.wishlist);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getWishlistByUsernameThunk(currentUser.username));
    }, []);



    return(
        <>
            <div className="wd-flex-box-format">
                {
                    wishlist_records.length === 0 &&
                    <h3>No Results</h3>
                }
                {   wishlist_records.length > 0 &&
                    wishlist_records.map(record => <RecordGridItem key={record._id} record={record}/>)
                }
            </div>
        </>
    );
}
export default WishListComponent;