import React, {useEffect} from "react";
import "./index.css";
import RecordGridItem from "../home/record-grid-item";
import {useDispatch, useSelector} from "react-redux";
import {getWishlistByUsernameThunk} from "../services/wishlist-thunk";
import {uuid4} from "uuid4";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleArrowLeft, faCircleArrowRight} from "@fortawesome/free-solid-svg-icons";

const WishListComponent = ({currentUser}) => {
    const {wishlist_records} = useSelector(state => state.wishlist);
    const dispatch = useDispatch();
    const decrement = async () => {
        setIndexes({upperIndex: indexes.upperIndex <= 8 ? 4 : indexes.upperIndex-4, lowerIndex: indexes.lowerIndex <= 4 ? 0 : indexes.lowerIndex-4})
    }
    const increment = async () => {
        if (wishlist_records.length <= 4) return;
            if (indexes.upperIndex+4 >= wishlist_records.length-1){
                return;
            }
                setIndexes({upperIndex: indexes.upperIndex+4 >= wishlist_records.length-1 ? indexes.upperIndex : indexes.upperIndex+4, lowerIndex: indexes.lowerIndex+4 >
                                                                                                                                                   indexes.upperIndex ? indexes.lowerIndex : indexes.lowerIndex+4})
    }
    const [indexes, setIndexes] = useState({lowerIndex: 0, upperIndex: 4});

    useEffect(() => {
        dispatch(getWishlistByUsernameThunk(currentUser.username));
    }, []);
    return(
        <>
            <div className="d-flex mt-0 flex-row align-items-baseline justify-content-between">
                <h3 className="font-weight-bold">Wishlist</h3>
                <div style={{height:"24px"}} className="mb-2 d-flex">
                    <h5 className="d-none d-sm-block me-3 mb-0">{"Showing items " + (indexes.lowerIndex+1) + " through " + (indexes.upperIndex)}</h5>
                    <FontAwesomeIcon  onClick={decrement}  className="wd-font-awesome-hover wd-font-awesome-hover-dark me-2" fontSize="1.5rem" icon={faCircleArrowLeft}/>
                    <FontAwesomeIcon  onClick={increment} className="wd-font-awesome-hover wd-font-awesome-hover-dark" fontSize="1.5rem" icon={faCircleArrowRight}/>
                </div>
            </div>
            <div>
                <ul className="list-group">
                    {
                        wishlist_records.length === 0 &&
                        <h5 className="p-3">There is nothing currently on your wishlist...</h5>
                    }
                    {   wishlist_records.length > 0 &&
                        wishlist_records.slice(indexes.lowerIndex, indexes.upperIndex).map(record => <RecordGridItem key={uuid4()} record={record}/>)
                    }
                </ul>
            </div>
        </>
    );
}
export default WishListComponent;