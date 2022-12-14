import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import ReviewsByUser from "../reviews/reviews-by-user";
// console.log("This is a detailed listing page");

import NavigationSidebar from "../navigation-sidebar/nav-bar";
import {
    createReviewThunk,
    getAllReviewsByAlbumIdThunk,
} from "../services/review-thunk";
import {useParams} from "react-router";
import {editListingThunk, getSingleListingByIdThunk, deleteListingThunk} from "../services/discogs-thunk";
import {createSearchParams, useNavigate, useSearchParams} from "react-router-dom";
import {addToShoppingCartThunk} from "../services/shopping-cart-thunk";
import AddToCartToast from "../components/add-to-cart-toast";
import AlreadyInCartToast from "../components/already-in-cart-toast";
import {createEmptyWishlistThunk, postToWishlistThunk} from "../services/wishlist-thunk"
import Toast from 'react-bootstrap/Toast';
import {ToastContainer} from "react-bootstrap";

const DetailsScreen = () => {
    const dispatch = useDispatch();
    const albumId = useParams().id;
    const navigation = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query");
    const details = useSelector(state => state.discogs.details);
    const currentUser = useSelector(state => state.users.currentUser);
    const reviews = useSelector(state => state.reviews.reviews);
    const {shoppingCart} = useSelector(state => state.shoppingCart);
    const [quantity, setQuantity] = useState(!details ? 0 : details.record_quantity);
    const [addShow, setAddShow] = useState(false);
    const [negativeShow, setNegativeShow] = useState(false);
    const [newReview, setNewReview] = useState(true);
    // useEffect(() =>{
    //     dispatch(findCurrentUserThunk())
    // }, [])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleAddWishList = () => {
        if(!currentUser) {
            return;
        }
        const wishlistData = {
            username: currentUser.username,
            album:{...details}
        }       
        dispatch(createEmptyWishlistThunk(wishlistData.username)).then((e) => {
            dispatch(postToWishlistThunk(wishlistData))
            handleShow()
        })
    }
    useEffect(() => {
        if(newReview) {
            // USED TO REDUCE UNNECESSARY DATABASE CALLBACK ON REFRESH
            setNewReview(false);
            dispatch(getSingleListingByIdThunk(albumId)).then(e => {
                setQuantity(e.payload.record_quantity)
            });
            dispatch(getAllReviewsByAlbumIdThunk(albumId));
        }
    },[])
    const modifyListingButtonStyle = !currentUser || !details ? "d-none" : currentUser._id === details.record_vendor._id ? "btn btn-outline-dark" : "d-none";
    return (
        <>
        {!details 
           ? <></>
            :
         <>
              <ToastContainer className="mt-5 me-5" position="top-end">
                <Toast onClose={() => setShow(false)} show={show}  delay={1500} autohide>
                    <Toast.Header>
                        <img
                            style={{width:"30px", height: "30px"}}
                            src={details.record_image}
                            className="rounded me-2"
                            alt=""
                        />
                        <strong className="me-auto">Vintage Vinyl</strong>
                    </Toast.Header>
                    <Toast.Body>Successfully added to your cart!</Toast.Body>
                </Toast>
            </ToastContainer>
             <NavigationSidebar/>
             <div className="text-center">
                <div className="row">
                    <div className="d-grid col-4 m-5">
                        <div className="row">
                            <div className="p-2">
                                <img src={details.record_image}/>
                            </div>
                            <div className="mt-2">
                                {!currentUser ? "Log in to purchase a record!" :
                                 <>
                                     <div className="mb-2">
                                         <input value={quantity} onChange={(e) => setQuantity(e.target.value)} type="number" max={details.record_quantity} min={"1"}/>
                                     </div>
                                    <button onClick={() => {
                                    if (!shoppingCart.shopping_cart || shoppingCart.shopping_cart.some(e => e._id === details._id)){
                                    setNegativeShow(true);
                                }else {
                                    setAddShow(true);
                                    dispatch(addToShoppingCartThunk(
                                {userId: currentUser._id, listing: {...details, scheduled_for_delete: quantity
                                                                                                      === details.record_quantity}}))
                                        }}
                                } className={modifyListingButtonStyle}>Add to cart</button>
                                    <AddToCartToast thumb={details.record_image} setShow={setAddShow} show={addShow}/>
                                    <AlreadyInCartToast thumb={details.record_image} setShow={setNegativeShow} show={negativeShow}/>
                                     <div className="p-2">
                                         <button className="btn btn-outline-dark" onClick={() => handleAddWishList()}>Add to wishlist</button>
                                     </div>
                                 </>
                                }
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



