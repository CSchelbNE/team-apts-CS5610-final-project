import React, {useEffect} from "react";
import NavigationSidebar from "../navigation-sidebar/nav-bar";
import SuggestedComponent from "../home/suggested-component";

console.log("This is a detailed listing page");

const DetailsScreen = ({listing}) => {
    return (
        <div>
            {/*<NavigationSidebar/>*/}
            <div className="d-inline-flex col-5 border border-2 border-primary">
                <h1> Column 1</h1>
                <img src={`${listing.record_image}`}/>
            </div>
            <div className="d-inline-flex col-5 border border-2 border-danger">
                <h1>Column 2</h1>
            </div>


        </div>
    );
}
export default DetailsScreen;



