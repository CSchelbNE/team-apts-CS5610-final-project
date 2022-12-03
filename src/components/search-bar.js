import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getAlbumsThunk, getArtistsThunk} from "../services/discogs-thunk";
import {Card, Button} from "react-bootstrap";
import {uuid4} from "uuid4"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";

function SearchBar(isHidden) {
    const dispatch = useDispatch();
    const [newInput, setNewInput] = useState("");
    const [isInputChanged, setIsChanged] = useState(false);
    const [isButtonClicked, setButtonClicked] = useState(false);
    const [key, setKey] = useState("artist");
    const [visibility, setVisibility] = useState("d-none p-0")
    const buttonArtistStyle = key === "artist" ? "primary" : "outline-dark";
    const buttonAlbumStyle = key === "album" ? "primary" : "outline-dark";
    useEffect(() => {
        // TIMEOUT ADDED TO PREVENT DISCOGS API FROM RATE-LIMITING DUE TO TOO MANY API CALLS
        const delayedGetRequest = setTimeout(() => {
        if(isInputChanged) {
            if (newInput!=="") {
                switch (key) {
                    case "artist":
                        setIsChanged(false);
                        dispatch(getArtistsThunk(newInput));
                        setVisibility("d-block p-0")
                        break;
                    case "album":
                        setIsChanged(false);
                        dispatch(getAlbumsThunk(newInput));
                        setVisibility("d-block p-0")
                        break;
                }
            }
        }}, 150);
        return () => clearTimeout(delayedGetRequest)
    }, [newInput]);

    useEffect(() => {
        if (newInput!=="") {
                switch (key) {
                    case "artist":
                        setIsChanged(false);
                        dispatch(getArtistsThunk(newInput));
                        setVisibility("d-block p-0")
                        break;
                    case "album":
                        setIsChanged(false);
                        dispatch(getAlbumsThunk(newInput));
                        setVisibility("d-block p-0");
                        break;
                }
            }
    }, [key])
    const query = useSelector(state =>
        state.discogs
    )
    return (
        <div  className="row wd-art-nuvo mt-3 p-0" style={{border: "1px solid lightgrey"}} >
            <div className="p-0 position-relative">
                <input onFocus={()=> setTimeout(()=> setVisibility("p-0 d-block"),100)}
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
                <div className={"d-flex flex-row p-0"} style={{borderBottom: "1px solid lightgrey"}}>
                    <Button variant={buttonArtistStyle} onClick={() => {
                        setKey("artist");
                        setButtonClicked(true);
                    }} style={{borderRadius:0}}>Artist</Button>
                    <Button variant={buttonAlbumStyle} onClick={()=> {
                        setKey("album");
                        setButtonClicked(true);
                    }} style={{borderRadius:0}}>Album</Button>
                </div>
                <div className="wd-search-scroll-div p-0">
                    {key === "artist" ? query.discogsQuery.map(e =>
                        <Card style={{borderRadius: 0, height: "85px"}} key={uuid4()} className="border-1 d-flex flex-row row-cols-4 mb-1">
                            <img style={{height: "80px"}} src={e.thumb}/>
                                <div className="p-0 d-flex flex-column justify-content-center"
                                     style={{height: "80px", width: "75%"}}>
                                    <div className="p-1" style={{width: "fit-content"}}>{e.title.split("-")[0]}</div>
                                    <div className="p-1">Artist</div>
                                </div>
                        </Card>) :
                        query.discogsAlbumQuery.map(e =>
                        <Card style={{borderRadius: 0, height: "85px"}} key={uuid4()} className="border-1 d-flex flex-row row-cols-4 mb-1">
                            <img style={{height: "80px"}} src={e.thumb}/>
                                <div className="p-0 d-flex flex-column justify-content-center"
                                     style={{height: "80px", width: "75%"}}>
                                    <div className="p-1" style={{width: "fit-content"}}>{!e.title.split("-")[1] ? e.title.split("-")[0] : e.title.split("-")[1]}</div>
                                    <div className="p-1">{!e.title.split("-")[1] ? "Unknown Artist" : e.title.split("-")[0]}</div>
                                </div>
                        </Card>)
                    }
                </div>
            </div>
    </div>

    );
}


export default SearchBar;
