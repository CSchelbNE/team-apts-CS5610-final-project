const SearchItem = ({listing}) => {
    return (
        <div style={{height: "100px"}} className="border-1">
            {listing.record_name +" : " + listing.record_artist}
        </div>
    )
};

export default SearchItem;