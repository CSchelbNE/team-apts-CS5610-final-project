import React from "react";
import NavigationSidebar from "../navigation-sidebar/nav-bar";
import ProfileComponent from "./profile-component";

const ProfileScreen = () => {
    return (
        <div className="">
                <NavigationSidebar/>
                <ProfileComponent />
        </div>
    );
}
export default ProfileScreen;