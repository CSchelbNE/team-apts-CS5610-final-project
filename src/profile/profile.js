import React, {useEffect} from "react";
import NavigationSidebar from "../navigation-sidebar/nav-bar";
import ProfileComponent from "./profile-component";
import {useDispatch, useSelector} from "react-redux";
import {findCurrentUserThunk, findUserByUsernameThunk, findUserThunk} from "../services/users-thunks";
import WhoToFollowComponent from "../following/who-to-follow";
// import "./profile-style-sheet.css";

const ProfileScreen = () => {
    let uid = window.location.pathname;

    if (uid.includes("/profile")) {
        let url_parts = uid.split("/").filter(part => part);
        uid = url_parts[url_parts.length - 1];
    }
    const dispatch = useDispatch();
    useEffect( () => {
        if (uid==="profile" || uid==="/profile"){
            dispatch(findUserThunk());
        } else {
            const getProfileUser = async () => {
                dispatch(findUserByUsernameThunk(uid))
            }
            getProfileUser().then(r => {
                dispatch(findCurrentUserThunk())
            })
        }

    }, [])
    const {currentUser, profileUser} = useSelector((state) => state.users);

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
                        <div className="mt-2">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProfileScreen;