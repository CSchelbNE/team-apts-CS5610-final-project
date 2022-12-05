import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {
    createAlbumListingThunk,
    findAllListingsThunk,
    getAlbumsThunk,
} from "../services/discogs-thunk";
import {Card, Button} from "react-bootstrap";
import {uuid4} from "uuid4"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";
import {useNavigate} from "react-router-dom";

function SearchBar(isHidden) {
    const dispatch = useDispatch();
    const navigation = useNavigate();
    const [newInput, setNewInput] = useState("");
    const [isInputChanged, setIsChanged] = useState(false);
    const [visibility, setVisibility] = useState("d-none p-0");
    const createNewListing = (listing) => (event) => {
        const newListing = {
            // These values are from the discogs api
            "discogs_id": listing.id,
            "record_name": listing.title.split("-")[1].trim(),
            "record_artist": listing.title.split("-")[0].trim(),
            "record_genre": !listing.genre ? [] : listing.genre,
            "record_year": !listing.year ? "N/A" : listing.year,
            "record_image": !listing.thumb ? "N/A" : listing.thumb,
            // These values need to be passed in as local state
            record_price: 19.99,
            record_quantity: 2,
            record_vendor: 5
        }
        dispatch(createAlbumListingThunk(newListing));
    }

    const findListings = (id) => (event) => {
        dispatch(findAllListingsThunk(id));
        navigation("/search/"+id);
    }

    useEffect(() => {
        // TIMEOUT ADDED TO PREVENT DISCOGS API FROM RATE-LIMITING DUE TO TOO MANY API CALLS
        const delayedGetRequest = setTimeout(() => {
        if(isInputChanged) {
            if (newInput!=="") {
                        setIsChanged(false);
                        dispatch(getAlbumsThunk(newInput));
                        setVisibility("d-block p-0")
            }
        }}, 150);
        return () => clearTimeout(delayedGetRequest)
    }, [newInput]);

    const query = useSelector(state =>
        state.discogs
    )
    return (
        <div  className="wd-art-nuvo row mt-3 p-0" style={{border: "1px solid lightgrey"}} >
            <div className="p-0 row-12 position-relative">
                <input  onBlur={()=> setTimeout(() => setVisibility("p-0 d-none"),200)} onFocus={()=> setTimeout(()=> setVisibility("p-0 d-block"),100)}
                       className="form-control row-cols-3 shadow-none" style={{borderRadius: 0}}
                       placeholder={"Search for new records here..."} value={newInput} onChange={(e) =>
                {
                    if (e.target.value === ""){
                        setVisibility("d-none");
                        setNewInput(e.target.value);
                        return;
                    }
                    setNewInput(e.target.value)
                    setIsChanged(true)}}/>
                <FontAwesomeIcon  icon={faSearch} className="me-3 position-absolute end-0 top-50 translate-middle-y"/>
            </div>
            <div className={visibility}>
                <div className="wd-search-scroll-div p-0">
                    {
                        // Test if there's a title and an artist
                        query.discogsAlbumQuery.map(e =>
                        {
                            if (e.title.split("-").length === 2){
                        return <Card onClick={findListings(e.id)} style={{borderRadius: 0, height: "fit-content"}} key={uuid4()} className="border-1 d-flex flex-row row-cols-4">
                            <img style={{height: "100px"}} src={e.thumb}/>
                                <div className="p-0 d-flex flex-column justify-content-center"
                                     style={{height: "100px", width: "75%"}}>
                                    <div className="p-1" style={{width: "fit-content"}}>{e.title.split("-")[1]}</div>
                                    <div className="p-1">{e.title.split("-")[0]}</div>
                                </div>
                        </Card>
                        }
                        })
                    }
                </div>
            </div>
    </div>

    );
}


export default SearchBar;
