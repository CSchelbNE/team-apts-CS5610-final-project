import {useNavigate} from "react-router";
import {createSearchParams} from "react-router-dom";
import {Card} from "react-bootstrap";
import Button from "react-bootstrap/Button";

const ListingArrayComponent = ({listing, i, query}) => {
    console.log(i);
    const navigate = useNavigate();
    const params = {query: query.toString()};

    return (
            <Card  style={{cursor: "pointer"}} className="m-2 flex-column" onClick ={() =>
                 {navigate({
                             pathname: '/details/' + listing._id,
                             search: `?${createSearchParams(params)}`
                         })}}>
                    <Card.Header className="d-flex flex-row align-items-center justify-content-between justify-content-lg-around">
                        <Card.Img variant={"top"} style={{height:"72px", width:"72px"}} src={listing.record_vendor.profilePic} className="rounded-circle"/>
                        <h5 className="mt-2">{listing.record_name +" - $"+listing.record_price}</h5>
                    </Card.Header>
                    <div className="d-flex flex-row">
                    <Card.Body className="align-content-center d-flex text-center mb-0 p-2">
                        <Card.Img variant={"top"} src={listing.record_image} className="rounded"/>
                    </Card.Body>
                    <Card.Body className="text-center p-3">
                        <h5>{"Vendor: " + listing.record_vendor.firstName + " " + listing.record_vendor.lastName}</h5>
                        <h6>{"Quantity: " + listing.record_quantity}</h6>
                        <h6 className="mb-2">{"Shipped From: "+listing.record_vendor.location}</h6>
                    </Card.Body>
                    </div>
                {(i+1)%3 === 0 ? <div style={{flexBasis:"100%", height:0}}>

                </div> : <></>}

            </Card>
    );
};

export default ListingArrayComponent;