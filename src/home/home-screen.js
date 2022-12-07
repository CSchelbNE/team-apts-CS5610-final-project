import React from "react";
import NavigationSidebar from "../navigation-sidebar/nav-bar";
import "./index.css";
<<<<<<< HEAD
import SearchBar from "../components/search-bar";
=======
import SuggestedComponent from "./suggested-component";

>>>>>>> temp-master

const HomeScreen = () => {
    return (
        <div className="">
<<<<<<< HEAD
=======

>>>>>>> temp-master
            <NavigationSidebar/>

            <div className="container mt-2">
                <div className="position-relative">
                    <img src={"https://townsquare.media/site/295/files/2021/01/psych.jpg"} className="w-100 wd-banner-image-format"/>
<<<<<<< HEAD
                        <div className="wd-title-format">
                            Vintage Vinyl
                        </div>
                </div>
                <div>
                    <h1>Suggested Albums</h1>
=======
                    <div className="wd-title-format">
                        Vintage Vinyl
                    </div>
                    <div className="wd-title2-format">
                        Review Your Favorite Albums
                    </div>
                    <div className="wd-title3-format">
                        Buy / Sell
                    </div>
                </div>
                <div>
                    <h1>Suggested Albums</h1>
                    <div className="border border-2 border-secondary p-2 m-2">
                        <SuggestedComponent/>
                    </div>
>>>>>>> temp-master
                </div>
                <div>
                    <h1>Recent Users</h1>
                </div>
                <div>
                    <h1>Wish List (LoggedIn Content)</h1>
                </div>
            </div>
        </div>
    );
}
export default HomeScreen;