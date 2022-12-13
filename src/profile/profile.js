import React from "react";
import NavigationSidebar from "../navigation-sidebar/nav-bar";
import ProfileComponent from "./profile-component";

const ProfileScreen = () => {

    return (
        <div className="">
                <NavigationSidebar/>
            <div className="container">
                <ProfileComponent />
            </div>
        </div>
    );
}
export default ProfileScreen;