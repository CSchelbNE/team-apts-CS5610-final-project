import {useNavigate} from "react-router-dom";

const ListingArrayComponent = ({listing}) => {
    const navigate = useNavigate();
    return (

        <div onClick ={() =>
    {
        navigate("/details/" + listing._id.toString());
    }}>
                <div className="text-center">
                    <img src={listing.record_image} className="rounded"/>
                    <h1 className="text-dark">{listing.record_name}</h1>
                    <h3 className="text-dark">Artist: {listing.record_artist}</h3>
                </div>
        </div>
    );
};

export default ListingArrayComponent;