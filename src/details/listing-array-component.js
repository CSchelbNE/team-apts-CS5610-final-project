import {useNavigate} from "react-router-dom";

const ListingArrayComponent = ({listing}) => {
    const navigate = useNavigate();
    return (
        <div onClick={() => {
            navigate("/details/"+listing._id.toString());
        }}>
            <img src={listing.record_image}/>
            <div>
                {listing.record_artist + " : " + listing.record_name}
            </div>
        </div>
    )
}

export default ListingArrayComponent;