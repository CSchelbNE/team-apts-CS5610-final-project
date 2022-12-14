import React from "react";
import checkCircleImg from "../images/check-circle.png";
import "./index.css";
import {useDispatch} from "react-redux";
import {addFollowerThunk} from "../services/following-thunk";

const WhoToFollowListItem = ({user, currentUser, followedUsers}) => {
    const dispatch = useDispatch();

    const formatJoined = () => {
        const joinDate = new Date(user.dateJoined);
        const timeDiff = joinDate.getTimezoneOffset() * 60000;
        const adjustedDate = new Date(joinDate.valueOf() + timeDiff);
        const month = adjustedDate.toLocaleString('default', {month: 'long'});
        return "Joined " + month + " " + adjustedDate.getFullYear();
    }

    const handleFollowClick = () => {
        if (followedUsers.length === 0) {
            dispatch(addFollowerThunk({
                following_user: currentUser._id,
                followed_user: user._id
            }));
        }
        else {
            if (!followedUsers.some(u=> u._id === user._id)) {
                dispatch(addFollowerThunk({
                    following_user: currentUser._id,
                    followed_user: user._id
                }));
            }
        }
    }

    return(
        <>
            <li className="list-group-item">
                <div className="d-flex justify-content-between">
                    <div  className="flex-inline my-auto">
                        <img src={`${user.profilePic}`} className="wd-profile-pic-format-follow rounded-circle"/>
                    </div>
                    <div className="flex-inline ms-1 my-auto">
                        <div className="fs-5 text-dark">
                            {user.firstName} {user.lastName}&nbsp;
                            <img src={checkCircleImg} className="wd-check-circle-icon-format-follow"/>&nbsp;
                            <span className="text-secondary">{user.type.toLowerCase()}</span>
                        </div>
                        {/*<div className="text-dark mt-1">{user.bio}</div>*/}
                        <div className="text-secondary mt-1">
                            <img src={require("../images/calendar-outline.png")} className="my-auto wd-calendar-icon-format-follow"/>&nbsp;
                            <span>{formatJoined()}</span>
                        </div>
                        <div className="">
                            <div className="text-dark d-inline-block ">
                                <span>{user.numOfReviews}</span>&nbsp;
                                <span>Reviews</span>
                            </div>
                            {/*<div className="text-dark d-inline-block ms-3">*/}
                            {/*    <span>{user.numOfWishlist}</span>&nbsp;*/}
                            {/*    <span>in Wish List</span>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                    <div className="my-auto ms-1">
                        {
                            followedUsers &&
                            <button className="btn btn-primary my-auto " onClick={handleFollowClick}>Follow</button>
                        }
                    </div>
                </div>
            </li>
        </>
    );
}
export default WhoToFollowListItem;