import React, {useEffect, useState} from "react";
import NavigationSidebar from "../navigation-sidebar/nav-bar";
import {useDispatch, useSelector} from "react-redux";
import {findAllListingsThunk, getAlbumByIdThunk} from "../services/discogs-thunk";
import {useLocation, useNavigate, useSearchParams} from "react-router-dom";
import ListingArrayComponent from "./listing-array-component";
import {uuid4} from "uuid4";
import NoListingsFoundScreen from "./not-found-component";

const ListingComponent = () => {
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const albumName = searchParams.get("query");
    console.log(albumName);
    const hrefId = searchParams.get("id");
    useEffect(() => {
            dispatch(findAllListingsThunk(hrefId))
            dispatch(getAlbumByIdThunk({album: albumName, id: hrefId}));
    },[hrefId, dispatch]);
    const listings = useSelector(state => state.discogs.listings);
    const notFound = useSelector(state => state.discogs.notFound);
    return(
        <>
            <div className="wd-flex-box-format">
                <NavigationSidebar/>
                {listings.length === 0 ? <NoListingsFoundScreen details={notFound}/> :
                    listings.map((e) => {
                        return <ListingArrayComponent query={albumName} listing={e}  key={uuid4()}/>
                    }
                    )
                    }
                }
            </div>
        </>
    );
}
export default ListingComponent;