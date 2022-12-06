import React, {useEffect, useState} from "react";
import NavigationSidebar from "../navigation-sidebar/nav-bar";
import {useDispatch, useSelector} from "react-redux";
import {findAllListingsThunk} from "../services/discogs-thunk";
import SearchItem from "./search-item";


const SearchScreen = () => {
    const dispatch = useDispatch();
    const listings = useSelector(state => state.discogs.listings);
    const [uri, setUri] = useState(window.location.href.split("/").slice(-1)[0]);
    if (window.location.href.split("/").slice(-1)[0] !== uri){
        setUri(window.location.href.split("/").slice(-1)[0]);
    }
    useEffect( () => {
        // LOOK AT PAST COMMIT FOR THIS DISPATCH
    },[uri]);
    return (
    <>
        {!listings.length ?
            <div>
            <div>
                <div className="w-100">
                    <NavigationSidebar/>
                </div>
            </div>
            <div>
                <h1 className="bg-white">Search Results</h1>
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
                <h1 className="bg-white">Search Results</h1>
                <h6>{listings.length + " results were found for" + listings[0].record_name}</h6>
                {listings.map((e) => <SearchItem listing={e}/>)}
            </div>
        </div>
    }
    </>
    );
}
export default SearchScreen;