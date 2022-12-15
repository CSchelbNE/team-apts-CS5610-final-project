import {useNavigate} from "react-router";
import {createSearchParams} from "react-router-dom";
import {Card} from "react-bootstrap";
import Button from "react-bootstrap/Button";

const ListingArrayComponent = ({listing, query}) => {
    const navigate = useNavigate();
    const params = {query: query.toString()};

    return (
            <Card className="m-2" style={{cursor: "pointer"}} className="m-2 flex-column" onClick ={() =>
                 {navigate({
                             pathname: '/details/' + listing._id,
                             search: `?${createSearchParams(params)}`
                         })}}>
                    <Card.Header>
                        <h5>{listing.record_name + " - "+ listing.record_artist+": $"+listing.record_price}</h5>
                    </Card.Header>
                    <div className="d-flex flex-row">
                    <Card.Body className="align-content-center d-flex text-center mb-0 p-2">
                        <Card.Img variant={"top"} src={listing.record_image} className="rounded"/>
                    </Card.Body>
                    <Card.Body className="text-center">
                        <div>{"Sold By: " + listing.record_vendor.firstName + " " + listing.record_vendor.lastName}</div>
                        <div>{"Shipped From: "+listing.record_vendor.location}</div>
                        <Card.Img variant={"top"} style={{height:"120px"}} src={listing.record_vendor.profilePic} className="rounded"/>
                    </Card.Body>
                    </div>

            </Card>
    );
};

export default ListingArrayComponent;