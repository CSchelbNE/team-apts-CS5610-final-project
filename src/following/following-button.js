import {
    addFollowerThunk,
    deleteFollowerThunk,
    getAllFollowersThunk
} from "../services/following-thunk";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

const FollowingButton = ({currentUser, profileUser}) => {
    const dispatch = useDispatch();
    const followers = useSelector(state => state.following.followingUsers);
    useEffect(()=> {
        dispatch(getAllFollowersThunk(profileUser._id));
    },[profileUser])
    const initialState = !currentUser ? false : followers.some(
        e => e.following_user._id === currentUser._id);
    const [isFollowing,setIsFollowing] = useState(initialState);
    const followButtonStyle = !currentUser || !profileUser ? "d-none" :
                              currentUser._id === profileUser._id ? "d-none" : !isFollowing ? "position-absolute end-0 me-3 p-2" : "position-absolute end-0 me-3 p-2 bg-danger";
    return (
        <div>
        <button onClick={() => {
            if(!isFollowing) {
                setIsFollowing(true)
                dispatch(addFollowerThunk({
                                              following_user: currentUser._id,
                                              followed_user: profileUser._id
                                          }))
            } else{
                setIsFollowing(false)
                dispatch(deleteFollowerThunk({
                                                 following_user: currentUser._id,
                                                 followed_user: profileUser._id
                                             }))
            }
        }}
                className={followButtonStyle}>{!isFollowing? "Follow": "Unfollow"}</button>
        </div>
    )
}

export default FollowingButton;