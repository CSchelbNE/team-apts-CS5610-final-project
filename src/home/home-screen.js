import React from "react";
import NavigationSidebar from "../navigation-sidebar/nav-bar";
import "./index.css";
import SearchBar from "../components/search-bar";

const HomeScreen = () => {
    return (
        <div className="">
            <NavigationSidebar/>

            <div className="container mt-2">
                <div className="position-relative">
                    <img src={"https://townsquare.media/site/295/files/2021/01/psych.jpg"} className="w-100 wd-banner-image-format"/>
                        <div className="wd-title-format">
                            Vintage Vinyl
                        </div>
                </div>
                <div>
                    <h1>Suggested Albums</h1>
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