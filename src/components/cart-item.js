import {Card} from "react-bootstrap";
import {uuid4} from "uuid4";
import {Link} from "react-router-dom";

const CartItem = ({listing}) => {
    return (
        <Card  style={{borderRadius: 0, height: "fit-content"}} key={uuid4()} className="wd-on-hover border-1  d-flex flex-row ">
                <img style={{height: "120px", width: "120px"}} src={listing.record_image}/>
                <div className="pt-3 ms-3 d-flex flex-column justify-content-center"
                     style={{height: "100px", width: "75%"}}>
                    <div  style={{width: "fit-content"}}>{"Album: " +listing.record_name}</div>
                    <div>{"Artist: "+listing.record_artist}</div>
                    <div  style={{width: "fit-content"}}>{"Price: $"+listing.record_price}</div>
                    <div>{"Quantity: " +listing.record_quantity}</div>
                </div>
        </Card>
        // <Card border={"1px"} >
        //     <img style={{width:"50px", height:"50px"}} src={listing.record_image}/>
        //     <span>{listing.record_artist + " " + listing.record_name}</span>
        // </Card>
    )
}

export default CartItem