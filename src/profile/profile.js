import React, {useEffect} from "react";
import NavigationSidebar from "../navigation-sidebar/nav-bar";
import ProfileComponent from "./profile-component";
import {useDispatch, useSelector} from "react-redux";
import {findCurrentUserThunk, findUserByUsernameThunk, findUserThunk} from "../services/users-thunks";
import WhoToFollowComponent from "../following/who-to-follow";

import {getAllFollowedThunk} from "../services/following-thunk";
import FollowingComponent from "../following/following";
import "./index.css";


const ProfileScreen = () => {
    let uid = window.location.pathname;

    if (uid.includes("/profile")) {
        let url_parts = uid.split("/").filter(part => part);
        uid = url_parts[url_parts.length - 1];
    }
    const dispatch = useDispatch();
    useEffect( () => {
        if (uid==="profile" || uid==="/profile"){
            dispatch(findUserThunk()).then((x) => {if (x.payload) dispatch(getAllFollowedThunk(x.payload._id))});
        } else {
            // const getProfileUser = async () => {
            //     await dispatch(findUserByUsernameThunk(uid))
            //         .then((e) => { if (e.payload)
            //             dispatch(getAllFollowedThunk(e.payload._id))
            //         })
            // }
            // getProfileUser().then(r => {
            //     dispatch(findCurrentUserThunk())
            // })
            const getCurrentUserAndProfileUser = async () => {
                await dispatch(findCurrentUserThunk())
                    .then((e) => {if (e.payload) dispatch(getAllFollowedThunk(e.payload_id))})
            }
            getCurrentUserAndProfileUser().then(r => {dispatch(findUserByUsernameThunk(uid))})
        }

    }, [])
    const {currentUser, profileUser} = useSelector((state) => state.users);
    const followed = useSelector(state => state.following.followedUsers);
    console.log("followed");
    console.log(followed);
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
                        {
                            followed && currentUser && profileUser &&
                            <ProfileComponent followed={followed} currentUser={currentUser} profileUser={profileUser}/>
                        }
                    </div>
                    <div className="col-4 border p-2 rounded-2">
                        {
                            currentUser &&
                            <>
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <div className="d-flex">
                                            <div className="my-auto d-inline-flex">
                                                <img src={currentUser.profilePic} className="wd-format-profile-pic-ps rounded-circle"/>
                                            </div>
                                            <div className="my-auto d-inline-flex flex-nowrap fs-3 ms-3">
                                                {currentUser.firstName} {currentUser.lastName}

                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="mt-3">
                                    <WhoToFollowComponent currentUser={currentUser}/>
                                </div>
                                <div className="mt-3">
                                    {   currentUser && followed &&
                                        <FollowingComponent currentUser={currentUser} followed={followed}/>
                                    }
                                </div>
                            </>

                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProfileScreen;