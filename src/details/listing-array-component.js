import {useNavigate} from "react-router";
import {createSearchParams} from "react-router-dom";
import {Card} from "react-bootstrap";
import Button from "react-bootstrap/Button";

const ListingArrayComponent = ({listing, query}) => {
    const navigate = useNavigate();
    const params = {query: query.toString()};

    return (
            <Card className="m-2" style={{cursor: "pointer",width:"15rem", height:"37rem"}} onClick ={() =>
                 {navigate({
                             pathname: '/details/' + listing._id,
                             search: `?${createSearchParams(params)}`
                         })}}>
                    <Card.Header>
                        <h5>{listing.record_name + " - "+ listing.record_artist}</h5>
                        </Card.Header>
                    <Card.Body className="text-center mb-0 p-0">
                        <Card.Img variant={"top"} src={listing.record_image} className="rounded"/>
                        <h5 className="mt-2">{"$"+listing.record_price}</h5>
                        <h5>{listing.record_quantity + "left in stock!"}</h5>
                    </Card.Body>
                    <Card.Body>
                        <Card.Img variant={"bottom"} src={listing.record_vendor.profilePic} className="rounded"/>
                        <div>{"Vendor: " + listing.record_vendor.firstName + " " + listing.record_vendor.lastName}</div>
                    </Card.Body>

            </Card>
    );
};

export default ListingArrayComponent;