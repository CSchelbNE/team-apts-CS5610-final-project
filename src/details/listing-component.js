import React, {useEffect, useState} from "react";
import NavigationSidebar from "../navigation-sidebar/nav-bar";
import {useDispatch, useSelector} from "react-redux";
import {findAllListingsThunk, getAlbumByIdThunk} from "../services/discogs-thunk";
import {useSearchParams} from "react-router-dom";
import ListingArrayComponent from "./listing-array-component";
import {uuid4} from "uuid4";
import NoListingsFoundScreen from "./not-found-component";
import {Card} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleArrowLeft, faCircleArrowRight} from "@fortawesome/free-solid-svg-icons";
import ListingArrayContainer from "./listing-array-container";

const ListingComponent = () => {
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const albumName = searchParams.get("query");
    const hrefId = searchParams.get("id");
    useEffect(() => {
            dispatch(findAllListingsThunk(hrefId))
            dispatch(getAlbumByIdThunk({album: albumName, id: hrefId}));
    },[hrefId, dispatch]);
    const listings = useSelector(state => state.discogs.listings);
    const notFound = useSelector(state => state.discogs.notFound);

    return(
        <>
            <div>
                <NavigationSidebar/>

                <Card style={{height: "inherit"}} className="d-flex p-0 container ">
                    <h1 className="m-2 mb-3 ms-5">Results</h1>
                    <img style={{height:"400px"}} src="https://c4.wallpaperflare.com/wallpaper/276/510/467/vinyl-retro-records-wallpaper-preview.jpg"/>
                    <div className="p-3">
                {listings.length === 0 ? <NoListingsFoundScreen details={notFound}/> :
                   <ListingArrayContainer albumName={albumName} listings={listings} />
                    }
                    </div>

                </Card>
            </div>
        </>
    );
}
export default ListingComponent;