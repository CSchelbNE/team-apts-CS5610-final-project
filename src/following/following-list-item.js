import React from "react";
import checkCircleImg from "../images/check-circle.png";

const FollowingListItem = ({user, currentUser}) => {
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
                        <button className="btn btn-danger my-auto ">Unfollow</button>
                    </div>
                </div>
            </li>
        </>

    );
}
export default FollowingListItem;