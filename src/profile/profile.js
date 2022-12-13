import React, {useEffect} from "react";
import NavigationSidebar from "../navigation-sidebar/nav-bar";
import ProfileComponent from "./profile-component";
import {useDispatch, useSelector} from "react-redux";
import {findUserByUsernameThunk, findUserThunk} from "../services/users-thunks";
import WhoToFollowComponent from "../following/who-to-follow";

const ProfileScreen = () => {
    let uid = window.location.pathname;

    if (uid.includes("/profile")) {
        let url_parts = uid.split("/").filter(part => part);
        uid = url_parts[url_parts.length - 1];
    }
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findUserThunk())
        dispatch(findUserByUsernameThunk(uid))
    }, [])
    const {currentUser, profileUser} = useSelector((state) => state.users);
    console.log("currentUser");
    console.log(currentUser);
    console.log("profileUser");
    console.log(profileUser);

    return (
        <div className="">
                <NavigationSidebar/>
            <div className="container mt-2">
                <div className="row">
                    <div className="col-8">

                        <ProfileComponent currentUser={currentUser} profileUser={profileUser}/>

                    </div>
                    <div className="col-4">
                        <WhoToFollowComponent currentUser={currentUser}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProfileScreen;