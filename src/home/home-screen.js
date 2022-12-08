import React from "react";
import NavigationSidebar from "../navigation-sidebar/nav-bar";
import "./index.css";
import SuggestedComponent from "./suggested-component";
import UsersListComponent from "../users/users-list";

// http://www.vinylstyl.com/wp-content/uploads/sites/4/2016/02/LPcollage-1.jpg
// https://townsquare.media/site/295/files/2021/01/psych.jpg
const HomeScreen = () => {
    return (
        <div className="">

            <NavigationSidebar/>

            <div className="container mt-2">
                <div className="position-relative">

                    <img src={"http://www.vinylstyl.com/wp-content/uploads/sites/4/2016/02/LPcollage-1.jpg"} className="w-100 wd-banner-image-format"/>

                    <div className="wd-title-format">
                        Vintage Vinyl
                    </div>
                    <div className="wd-title2-format">
                        Review Your Favorite Albums
                    </div>
                    <div className="wd-title3-format">
                        Buy & Sell
                    </div>
                </div>
               
                <div>
                    <h1>Suggested Albums</h1>
                    <div className="border border-2 border-secondary p-2 m-2">
                        <SuggestedComponent/>
                    </div>

                </div>
                <div>
                    <h1>Recent Users</h1>
                    <div className="border border-2 border-secondary p-2 m-2">
                        <UsersListComponent/>
                    </div>
                </div>
                <div>
                    <h1>Wish List (LoggedIn Content)</h1>
                </div>
            </div>
        </div>
    );
}
export default HomeScreen;