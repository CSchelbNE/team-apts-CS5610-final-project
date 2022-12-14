import React, {useEffect} from "react";
import NavigationSidebar from "../navigation-sidebar/nav-bar";
import ProfileComponent from "./profile-component";
import {useDispatch, useSelector} from "react-redux";
import {findCurrentUserThunk, findUserByUsernameThunk, findUserThunk} from "../services/users-thunks";
import WhoToFollowComponent from "../following/who-to-follow";

import {getAllFollowersThunk} from "../services/following-thunk";
import FollowingComponent from "../following/following";


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
                await dispatch(findUserByUsernameThunk(uid))
                    .then((e) => {
                        dispatch(getAllFollowersThunk(e.payload._id))
                    })
            }
            getProfileUser().then(r => {
                dispatch(findCurrentUserThunk())
            })
        }

    }, [])
    const {currentUser, profileUser} = useSelector((state) => state.users);
    const followers = useSelector(state => state.following.followingUsers);

    return (
        <div className="">
                <NavigationSidebar/>
            <div className="container mt-2">
                <div className="row">
                    <div className="col-8">
                        {
                            followers && currentUser && profileUser &&
                            <ProfileComponent followers={followers} currentUser={currentUser} profileUser={profileUser}/>
                        }
                    </div>
                    <div className="col-4">

                        <WhoToFollowComponent currentUser={currentUser}/>
                        <div className="mt-3">
                            {   currentUser && followers &&
                                <FollowingComponent currentUser={currentUser} followers={followers}/>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProfileScreen;