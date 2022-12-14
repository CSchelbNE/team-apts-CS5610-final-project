import {Card} from "react-bootstrap";

const CartItem = ({listing}) => {
    return (
        <Card border={"1px"} >
            <img style={{width:"50px", height:"50px"}} src={listing.record_image}/>
            <span>{listing.record_artist + " " + listing.record_name}</span>
        </Card>
    )
}

export default CartItem