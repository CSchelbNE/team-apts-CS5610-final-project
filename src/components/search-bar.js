import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getArtistsThunk} from "../services/discogs-thunk";
import {Card, Tabs, Tab} from "react-bootstrap";
import {uuid4} from "uuid4"


function SearchBar() {
    const dispatch = useDispatch();
    const [newInput, setNewInput] = useState("");
    const [isInputChanged, setIsChanged] = useState(false);
    const [key, setKey] = useState("artist");
    useEffect(() => {
        if(isInputChanged) {
            if (newInput!=="") {
                setIsChanged(false);
                dispatch(getArtistsThunk(newInput));
            }
        }
    }, [newInput]);
    const query = useSelector(state =>
        state.discogs
    )
    console.log(query.discogsQuery)

    return (
        <div className="row wd-art-nuvo">
            <input className="form-control row-cols-3" placeholder={"Search for new records here..."} value={newInput} onChange={(e) =>
            {setNewInput(e.target.value)
                setIsChanged(true)}}/>
            {/*<Tabs*/}
            {/*    id="query-tabs"*/}
            {/*    activeKey={key}*/}
            {/*    onSelect={(k) => setKey(k)}*/}
            {/*    className="mb-3"*/}
            {/*>*/}
            {/*    <Tab eventKey={"artist"} title={"Artist"}></Tab>*/}
            {/*    <Tab eventKey={"album"} title={"Album"}></Tab>*/}
            {/*</Tabs>*/}
            <div className="wd-search-scroll-div p-0">
                {query.discogsQuery.map(e =>
                    <Card style={{borderRadius: 0, height: "75px"}} key={uuid4()} className="border-1 d-flex flex-row row-cols-4 mt-1 mb-1">
                        <img style={{height: "75px"}} src={e.thumb}/>
                        {e.title}
                    </Card>)}
            </div>
        </div>
    );
}


export default SearchBar;
