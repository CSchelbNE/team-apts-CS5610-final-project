import React from "react";
import NavigationSidebar from "../navigation-sidebar/nav-bar";

const HomeScreen = () => {
    return (
        <div className="row mt-3">
            <div className="col-3">
                <div className="w-100">
                    <NavigationSidebar/>
                </div>
                <h3 className="w-100">FollowingComponent</h3>
            </div>
            <div className="col-9">
                <h1>HomeScreen</h1>
            </div>

        </div>
    );
}
export default HomeScreen;