import React from "react";
import "./profile-style-sheet.css";
import {Link} from "react-router-dom";

const ProfileComponent = () => {
    let loggedIn = true;
    let loggedInUser = {_id: "1"};
    let user = {_id: "1", firstName: "Lucian", lastName: "Tisdale", type: "Buyer",
        bio: "Vinyl enthusiast and computer nerd. Life ambition: to have a record collection that covers the entire wall. Blah, blah, blah, blah, blah, blah, blah, blah.",
        location: "Boston, MA", dob: "2022-01-01", dateJoined: "2022-11-01", numOfReviews: 2, numOfWishlist: 3,
        email: "tisdale.lucian@gmail.com", phone: "(720) 207-8150"};

    const formatBirthDate = () => {
        const dateArr = user.dob.split("-")
        const year = dateArr[0];
        const month = dateArr[1];
        const day = dateArr[2];
        const newDate = new Date(Date.UTC(parseInt(year), parseInt(month) - 1, parseInt(day)));
        const timeDiff = newDate.getTimezoneOffset() * 60000;
        const adjustedDate = new Date(newDate.valueOf() + timeDiff);
        const longMonth = adjustedDate.toLocaleString('default', { month: 'long' });
        return "Born " + longMonth + " " + adjustedDate.getUTCDate() + ", " + adjustedDate.getFullYear();
    };
    const formatJoined = () => {
        const joinDate = new Date(user.dateJoined);
        const timeDiff = joinDate.getTimezoneOffset() * 60000;
        const adjustedDate = new Date(joinDate.valueOf() + timeDiff);
        const month = adjustedDate.toLocaleString('default', {month: 'long'});
        return "Joined " + month + " " + adjustedDate.getFullYear();
    }

    return (
        <div className="wd-horizontal-scroll">
            <div className="rounded-2 bg-white">
                <h1 className="wd-text-margins pt-2">Profile</h1>
                {/*banner image*/}
                <div className="p-2">
                    <img src={`https://user-images.githubusercontent.com/53150782/204566612-cfdec9af-f6b3-467b-b0f2-f71452cb2e93.png`}
                        className="w-100 wd-banner-format"/>
                </div>
                {/*edit profile button*/}
                { loggedIn && user._id === loggedInUser._id &&
                    <Link to="/edit-profile" className="float-end me-2 wd-ep-button-format rounded-pill">
                        <button id="edit-profile-btn" className="btn text-white">Edit profile</button>
                    </Link>}
                {/*avatar*/}
                <div className="position-relative">
                    <img src={`https://user-images.githubusercontent.com/53150782/204596506-f2e2dd98-58d2-4b7d-a1ea-e25467dcf261.PNG`}
                         className="rounded-circle wd-profile-avatar-format position-absolute wd-profile-avatar-margins"/>
                </div>
                {/*profile info*/}
                <div className="wd-text-margins">
                    <div className="wd-leave-extra-space-below-avatar">
                        <div className="row">
                            <h5 className="fw-bold m-0">{user.firstName} {user.lastName}</h5>
                            <div className="text-secondary">{user.type}</div>
                        </div>
                        <div className="text-black mt-2">{user.bio}</div>
                        { loggedIn && user._id === loggedInUser._id &&
                            <div className="row mt-2">
                                <div>Email:</div>
                                <div>{user.email}</div>
                            </div> }

                        <div className="row mt-2">
                            <div className="d-inline-block text-secondary w-auto">
                                <img src={require("../images/map-pin-vector.png")}
                                     className="wd-map-vector-icon-format my-auto"/>&nbsp;
                                <span className="">{user.location}</span>
                            </div>
                            { loggedIn && user._id === loggedInUser._id &&
                                <div className="d-inline-block text-secondary w-auto">
                                    <img src={require("../images/birthday-cake.png")}
                                         className="wd-cake-icon-format my-auto"></img>&nbsp;
                                    <span>{formatBirthDate()}</span>
                                </div>}
                            <div className="d-inline-block text-secondary w-auto">
                            <img src={require("../images/calendar-outline.png")} className="my-auto wd-calendar-icon-format"/>&nbsp;
                            <span>{formatJoined()}</span>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="d-inline-block text-secondary w-auto">
                            <span>{user.numOfReviews}</span>&nbsp;
                            <span>Reviews</span>
                        </div>
                        <div className="d-inline-block text-secondary w-auto">
                            <span>{user.numOfWishlist}</span>&nbsp;
                            <span>in Wish List</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
export default ProfileComponent;