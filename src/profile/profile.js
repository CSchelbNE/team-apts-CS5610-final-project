import React from "react";
import NavigationSidebar from "../navigation-sidebar/nav-bar";
import ProfileComponent from "./profile-component";

const ProfileScreen = () => {
    return (
        <div className="row mt-3">
            <div className="col-3">
                <div className="w-100">
                    <NavigationSidebar/>
                </div>
            </div>
            <div className="col-9">
                <ProfileComponent />
            </div>
        </div>
    );
}
export default ProfileScreen;