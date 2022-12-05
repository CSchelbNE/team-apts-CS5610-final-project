import React, {useEffect} from "react";
import NavigationSidebar from "../navigation-sidebar/nav-bar";
import {useDispatch, useSelector} from "react-redux";
import {findAllListingsThunk} from "../services/discogs-thunk";

const SearchScreen = () => {
    const dispatch = useDispatch();
    const listings = useSelector(state => state.discogs.listings);

    useEffect( () => {
        // Find the listing based on the url
        dispatch(findAllListingsThunk(window.location.href.split("/").slice(-1)[0]));
    },[]);

    setTimeout(() => {

    }, 2000);
    return (
    <>
        {!listings ?
            <div>
            <div>
                <div className="w-100">
                    <NavigationSidebar/>
                </div>
            </div>
            <div>
                <h1 className="bg-white">SearchScreen</h1>
                Sorry! No listing for this record were found!
            </div>
        </div>
            :
           <div>
            <div>
                <div className="w-100">
                    <NavigationSidebar/>
                </div>
            </div>
            <div>
                <h1 className="bg-white">SearchScreen</h1>
                {listings.map((e) => e.record_name)}
            </div>
        </div>
    }
    </>
    );
}
export default SearchScreen;