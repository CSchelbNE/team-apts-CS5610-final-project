import {useNavigate} from "react-router";
import {createSearchParams} from "react-router-dom";

const ListingArrayComponent = ({listing, query}) => {
    const navigate = useNavigate();
    const params = {query: query.toString()};

    return (

        <div onClick ={() =>
    {
            navigate({
                         pathname: '/details/' + listing._id,
                         search: `?${createSearchParams(params)}`
                     }
            )
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