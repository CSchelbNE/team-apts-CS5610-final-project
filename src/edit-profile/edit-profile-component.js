import React, {useState} from "react";
import "./edit-profile-style.css";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import bigXImage from "../images/big_x.png";
import cameraImage from "../images/camera_icon_1.jpg";

const EditProfileComponent = () => {
    let user = {_id: "1", firstName: "Lucian", lastName: "Tisdale", status: "Buyer",
        bio: "Vinyl enthusiast and computer nerd. Life ambition: to have a record collection that covers the entire wall. Blah, blah, blah, blah, blah, blah, blah, blah.",
        location: "Boston, MA", dob: "2022-01-01", dateJoined: "2022-11-01", numOfReviews: 2, numOfWishlist: 3,
        email: "tisdale.lucian@gmail.com",
        bannerPic: "https://user-images.githubusercontent.com/53150782/204566612-cfdec9af-f6b3-467b-b0f2-f71452cb2e93.png",
        profilePic: "https://user-images.githubusercontent.com/53150782/204596506-f2e2dd98-58d2-4b7d-a1ea-e25467dcf261.PNG"};
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState({firstName: `${user.firstName}`});
    const [lastName, setLastName] = useState({lastName: `${user.lastName}`});
    const [bio, setBio] = useState({bio: `${user.bio}`});
    const [location, setLocation] = useState({location: `${user.location}`});
    const [birthdate, setBirthdate] = useState({birthdate: `${user.dob}`});
    const [email, setEmail] = useState({email: `${user.email}`});

    const firstNameChangeHandler = (event) => {
        const nameValue = event.target.value;
        const newName = {
            firstName: nameValue
        };
        setFirstName(newName);
    }
    const lastNameChangeHandler = (event) => {
        const nameValue = event.target.value;
        const newName = {
            lastName: nameValue
        };
        setLastName(newName);
    }
    const bioChangeHandler = (event) => {
        const bioValue = event.target.value;
        const newBio = {
            bio: bioValue
        };
        setBio(newBio);
    }
    const locationChangeHandler = (event) => {
        const locationValue = event.target.value;
        const newLocation = {
            location: locationValue
        };
        setLocation(newLocation);
    }
    const birthdateChangeHandler = (event) => {
        const bdValue = event.target.value;
        const newBD = {
            birthdate: bdValue
        };
        setBirthdate(newBD);
    }
    const emailChangeHandler = (event) => {
        const emailValue = event.target.value;
        const newEmail = {
            email: emailValue
        };
        setEmail(newEmail);
    }
    const switchChangeHandler = (event) => {
        const label1 = document.getElementById("switch-flag-label");
        if (event.target.checked) {
            label1.innerHTML = "Vendor Status Requested";
        }
        else {
            label1.innerHTML = "Request \"Vendor\" status";
        }
    }
    const saveProfile = () => {
        return null;
    }

    return (
        <div className="wd-horizontal-scroll">
            <div className="border wd-border-light-gray rounded-2">
                <div className="row">
                    <Link className="d-inline-block float-start w-auto my-auto ms-2" to="/profile">
                        <img src={bigXImage} className="wd-x-image-format"/>
                    </Link>
                    <h4 className="d-inline-block my-auto w-auto">Edit profile</h4>
                    <div className="col my-auto">
                            <Link className="wd-orange-button rounded-pill d-inline-block float-end my-auto me-2 mt-2 mb-2" to="/profile">
                                <button id="save-prof-1" className="btn text-white" onClick={saveProfile}>Save Profile</button>
                            </Link>
                    </div>
                </div>
                {/*banner and avatar*/}
                <div className="position-relative h-auto">
                    <img src={user.bannerPic} className="w-100 wd-banner-format"/>
                    <div className="position-absolute wd-center-banner">
                        <img src={cameraImage} className="wd-camera-img-format rounded-circle"/>
                    </div>
                </div>
                <div className="position-relative">
                    <div className="position-absolute wd-profile-avatar-margins">
                        <img src={user.profilePic} className="wd-profile-avatar-format rounded-circle"/>
                            <div className="position-absolute wd-center-avatar">
                                <img src={cameraImage} className = "wd-camera-img-format rounded-circle"/>
                            </div>
                    </div>
                </div>
                {/*textareas*/}
                <div className="wd-leave-extra-space-below-avatar">
                    <div className="form-floating position-relative p-2">
                        <input type="text" id="first-name-textarea"  className="form-control w-100 ps-2" onChange={firstNameChangeHandler} value={`${firstName.firstName}`}/>
                        <label className="text-secondary" htmlFor="first-name-textarea">First name</label>
                    </div>
                    <div className="form-floating position-relative p-2">
                        <input type="text" id="last-name-textarea"  className="form-control w-100 ps-2" onChange={lastNameChangeHandler} value={`${lastName.lastName}`}/>
                        <label className="text-secondary" htmlFor="last-name-textarea">Last Name</label>
                    </div>
                    <div className="form-floating position-relative p-2">
                        <textarea type="text" id="bio-textarea"  className="form-control w-100 h-100 ps-2 " onChange={bioChangeHandler} value={`${bio.bio}`}/>
                        <label className="text-secondary" htmlFor="bio-textarea">Bio</label>
                    </div>
                    <div className="form-floating position-relative p-2">
                        <input  type="text" id="location-textarea" className="form-control w-100 ps-2" onChange={locationChangeHandler}
                                value={`${location.location}`}/>
                        <label className="text-secondary"
                               htmlFor="location-textarea">Location</label>
                    </div>
                    <div className="form-floating position-relative p-2">
                        <input  type="email" id="email-textarea" className="form-control w-100 ps-2" onChange={emailChangeHandler}
                                value={`${email.email}`}/>
                        <label className="text-secondary"
                               htmlFor="email-textarea">Email</label>
                    </div>
                    <div className="p-2 position-relative">
                        <label htmlFor="birth-date-textarea">Birth date &nbsp;&#x2022;&nbsp;<span className="text-primary">Edit</span></label>
                        <input id="birth-date-textarea" type="date" className="w-100 h-100 ps-2 form-control" value={`${birthdate.birthdate}`} onChange={birthdateChangeHandler}></input>
                    </div>
                    <div className="form-check form-switch ms-2 mt-3">
                        <input className="form-check-input"
                               type="checkbox"
                               id="switch-flag" onClick={switchChangeHandler}/>
                        <label className="form-check-label" id="switch-flag-label"
                               htmlFor="switch-flag">Request "Vendor" status</label>
                    </div>
                    <div className="mt-3 mb-3 text-center">
                        <Link className="wd-orange-button rounded-pill d-inline-block" to="/profile">
                            <button id="save-prof-2" className="btn text-white" onClick={saveProfile}>Save Profile</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default EditProfileComponent;