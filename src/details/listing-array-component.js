import {useNavigate} from "react-router";
import {createSearchParams} from "react-router-dom";
import {Card} from "react-bootstrap";

const ListingArrayComponent = ({listing, index, query}) => {
    const navigate = useNavigate();
    const params = {query: query.toString()};

    return (
        <div className="p-1 wd-search-content">
        <Card style={{cursor: "pointer"}} className=" mt-1 flex-column" onClick={() => {
            navigate({
                         pathname: '/details/' + listing._id,
                         search: `?${createSearchParams(params)}`
                     })
        }}>
            <Card.Header
                className="d-flex flex-row align-items-center justify-content-between">
                <Card.Img variant={"top"} style={{height: "68px", width: "68px"}}
                          src={listing.record_vendor.profilePic} className="rounded-circle"/>
                <h5 className="mt-2">{listing.record_name + " - $" + listing.record_price}</h5>
            </Card.Header>
            <div className="d-flex align-content-center flex-row">
                <Card.Body className=" d-flex mb-0 p-2">
                    <Card.Img style={{height:"100px", width:"100px"}} variant={"top"} src={listing.record_image} className="rounded"/>
                {/*</Card.Body>*/}
                {/*<Card.Body className="d-flex flex-column justify-content-between p-3">*/}
                    <div className="d-flex ms-4 mt-2 flex-column align-content-start">
                        <h5>{"Vendor: " + listing.record_vendor.firstName + " "
                             + listing.record_vendor.lastName}</h5>
                        <h6>{"Quantity: " + listing.record_quantity}</h6>
                        <h6 className="mb-2">{"Shipped From: " + listing.record_vendor.location}</h6>
                    </div>
                </Card.Body>
            </div>
        </Card>
        </div>
    );
};

export default ListingArrayComponent;