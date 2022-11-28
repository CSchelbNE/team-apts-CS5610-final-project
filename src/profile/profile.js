import React from "react";
import NavigationSidebar from "../navigation-sidebar/nav-bar";

const ProfileScreen = () => {
    return (
        <div className="row mt-3">
            <div className="col-3">
                <div className="w-100">
                    <NavigationSidebar/>
                </div>
            </div>
            <div className="col-9">
                <h1>ProfileScreen</h1>
            </div>

        </div>
    );
}
export default ProfileScreen;