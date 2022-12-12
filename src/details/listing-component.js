import React, {useEffect} from "react";
import NavigationSidebar from "../navigation-sidebar/nav-bar";
import {useDispatch, useSelector} from "react-redux";
import {findAllListingsThunk} from "../services/discogs-thunk";
import {useLocation, useNavigate} from "react-router-dom";
import ListingArrayComponent from "./listing-array-component";
import {uuid4} from "uuid4";
import NoListingsFoundScreen from "./not-found-component";
import {useParams} from "react-router";

const ListingComponent = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    // const selectedListing = location.state;
    const hrefId = window.location.href.split("/").slice(-1)[0];

    // console.log(selectedListing);
    useEffect(() => {
        dispatch(findAllListingsThunk(hrefId));
    },[]);
    const listings = useSelector(state => state.discogs.listings);
    return(
        <>
            <div className="wd-flex-box-format">
                <NavigationSidebar/>
                {listings.length === 0 ? <NoListingsFoundScreen/> :
                    listings.map((e,index) => {
                        return <ListingArrayComponent listing={e} index={index} key={uuid4()}/>
                    })
                    }
                }
            </div>
        </>
    );
}
export default ListingComponent;