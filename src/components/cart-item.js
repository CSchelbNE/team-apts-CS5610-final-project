import {Card} from "react-bootstrap";
import {uuid4} from "uuid4";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {deleteFromShoppingCartThunk} from "../services/shopping-cart-thunk";

const CartItem = ({listing, dispatch, currentUser}) => {

    return (
        <Card  style={{borderRadius: 0, height: "fit-content"}} key={uuid4()} className="wd-on-hover border-1 mb-2 d-flex flex-row ">
                <div className=" positon-relative">
                    <FontAwesomeIcon onClick={()=>{
                        console.log(listing);
                        dispatch(deleteFromShoppingCartThunk({userId: currentUser._id, itemToDeleteId:listing._id}))}} className="position-absolute end-0 top-0 me-2 mt-2"
                                     style={{color: "gray", fontSize: "1.2rem", cursor: "pointer"}} icon={faXmark}/>
                 </div>
                <img style={{height: "120px", width: "120px"}} src={listing.record_image}/>
                <div className="pt-3 ms-3 d-flex flex-column justify-content-center"
                     style={{height: "100px", width: "75%"}}>
                    <div  style={{width: "fit-content"}}>{"Album: " +listing.record_name}</div>
                    <div>{"Artist: "+listing.record_artist}</div>
                    <div  style={{width: "fit-content"}}>{"Price: $"+listing.record_price}</div>
                    <div>{"Quantity: " +listing.record_quantity}</div>
                </div>
        </Card>

    )
}

export default CartItem