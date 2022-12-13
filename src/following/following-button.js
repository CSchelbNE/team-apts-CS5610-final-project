import {
    addFollowerThunk,
    deleteFollowerThunk,
    getAllFollowersThunk
} from "../services/following-thunk";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

const FollowingButton = ({currentUser, profileUser, followers}) => {
    const dispatch = useDispatch();
    console.log(followers);
    const followButtonStyle = !currentUser || !profileUser ? "d-none" :  "position-absolute end-0 me-3 p-2" ;
    return (
        <>
            {!profileUser || ! currentUser  ? <></> :
                <div>
                    <button onClick={() => {
                            dispatch(addFollowerThunk({
                                                          following_user: currentUser._id,
                                                          followed_user: profileUser._id
                                                      }))
                    }}
                          className={followButtonStyle}  >Follow</button>
                </div>
            }
        </>
    )
}

export default FollowingButton;