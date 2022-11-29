import React from "react";
import "./profile-style-sheet.css";
import {Link} from "react-router-dom";

const ProfileComponent = () => {
    let loggedIn = true;
    let loggedInUser = {_id: "1"};
    let user = {_id: "1"};
    return (
        <div className="rounded-2 bg-white">
            <h1 className="wd-text-margins pt-2">Profile</h1>
            {/*banner image*/}
            <img src={`https://user-images.githubusercontent.com/53150782/204566612-cfdec9af-f6b3-467b-b0f2-f71452cb2e93.png`}
                className="w-100 p-2 wd-banner-format"/>
            {/*edit profile button*/}
            { loggedIn && user._id === loggedInUser._id &&
                <Link to="/edit-profile" className="float-end mt-2 me-2">
                    <button className="btn rounded-pill wd-ep-button-format">Edit profile</button>
                </Link>}
        </div>
    );
}
export default ProfileComponent;