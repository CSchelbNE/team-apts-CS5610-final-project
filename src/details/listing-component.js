import React, {useEffect} from "react";
import NavigationSidebar from "../navigation-sidebar/nav-bar";
import {useDispatch, useSelector} from "react-redux";
import ListingArrayComponent from "./listing-array-component";
import {uuid4} from "uuid4";
import {findAllListingsThunk} from "../services/discogs-thunk";
const ListingComponent = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findAllListingsThunk(window.location.href.split("/").slice(-1)[0]));
    },[]);
    const listings = useSelector(state => state.discogs.listings);
    return(
        <>
            <div className="wd-flex-box-format">
                <NavigationSidebar/>
                {
                    listings.map(e => {
                        return <ListingArrayComponent listing={e} key={uuid4()}/>
                    })
                    }
                }
            </div>
        </>
    );
}
export default ListingComponent;