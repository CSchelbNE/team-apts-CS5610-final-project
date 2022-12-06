import React, {useEffect, useState} from "react";
import "./edit-profile-style.css";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import bigXImage from "../images/big_x.png";
import cameraImage from "../images/camera_icon_1.jpg";
import {updateUserThunk, findUserByUsernameThunk} from "../services/users-thunks";

const EditProfileComponent = () => {
    // bannerPic: "https://user-images.githubusercontent.com/53150782/204566612-cfdec9af-f6b3-467b-b0f2-f71452cb2e93.png"
    // profilePic: "https://user-images.githubusercontent.com/53150782/204596506-f2e2dd98-58d2-4b7d-a1ea-e25467dcf261.PNG"
    // banner default https://c4.wallpaperflare.com/wallpaper/276/510/467/vinyl-retro-records-wallpaper-preview.jpg
    // default profile pic: https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png
    const {currentUser} = useSelector(state => state.users);
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState({firstName: `${currentUser.firstName}`});
    const [lastName, setLastName] = useState({lastName: `${currentUser.lastName}`});
    const [bio, setBio] = useState({bio: `${currentUser.bio}`});
    const [location, setLocation] = useState({location: `${currentUser.location}`});
    const [birthdate, setBirthdate] = useState({birthdate: `${currentUser.dob}`});
    const [email, setEmail] = useState({email: `${currentUser.email}`});
    const [bannerPic, setBannerPic] = useState({bannerPic: `${currentUser.bannerPic}`});
    const [profilePic, setProfilePic] = useState({profilePic: `${currentUser.profilePic}`});
    const [requestToBeSeller, setRequestToBeSeller] = useState({requestToBeSeller: currentUser.requestToBeSeller});
    const [edited, setEdited] = useState(false);



    const bannerTextChangeHandler = (event) => {
        const bpValue = event.target.value;
        const newValue = {
            bannerPic: bpValue
        };
        setBannerPic(newValue);
    }
    const avatarTextChangeHandler = (event) => {
        const avatarValue = event.target.value;
        const newValue = {
            profilePic: avatarValue
        };
        setProfilePic(newValue);
    }
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
    const switchChangeHandler =  (event) => {
        console.log("switchChangeHandler");
        const label1 = document.getElementById("switch-flag-label");
        // const button1 = document.getElementById("switch-flag");
        if (event.target.checked) {
            console.log("target.checked");
            console.log(event.target.checked);
            label1.innerHTML = "Seller Status Requested";
            setRequestToBeSeller({requestToBeSeller: true});
            console.log(requestToBeSeller.requestToBeSeller);

        } else {
            console.log("target.not-checked");
            console.log(event.target.checked);
            label1.innerHTML = "Request \"Seller\" status";
            setRequestToBeSeller({requestToBeSeller: false});
            console.log(requestToBeSeller.requestToBeSeller);

        }

    }

    const saveProfile = () => {
        const username = currentUser.username;
        const newBannerPic = (bannerPic.bannerPic.trim() === "" ? `${currentUser.bannerPic}` : bannerPic.bannerPic.trim());
        const newProfilePic = (profilePic.profilePic.trim() === "" ? `${currentUser.profilePic}` : profilePic.profilePic.trim());
        const newFirstName = firstName.firstName.trim();
        const newLastName = lastName.lastName.trim();
        const newBio = bio.bio.trim();
        const newLocation = location.location.trim();
        const newBirthdate = birthdate.birthdate;
        const newEmail = email.email.trim();
        const newRequestToBeSeller = requestToBeSeller.requestToBeSeller;
        console.log("saveProfile");
        console.log(newRequestToBeSeller);
        const userUpdates = {"username": username, "bannerPic": newBannerPic, "profilePic": newProfilePic, "firstName": newFirstName, "lastName": newLastName,
            "bio": newBio, "location": newLocation, "dob": newBirthdate, "email": newEmail, "requestToBeSeller": newRequestToBeSeller};
        dispatch(updateUserThunk(userUpdates));
        setEdited(true);
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
                    <img src={bannerPic.bannerPic} className="w-100 wd-banner-format" />
                    <div className="position-absolute wd-center-banner">
                        <img src={cameraImage} className="wd-camera-img-format rounded-circle"/>
                    </div>
                </div>
                <div className="position-relative">
                    <div className="position-absolute wd-profile-avatar-margins">
                        <img src={profilePic.profilePic} className="wd-profile-avatar-format rounded-circle"/>
                        <div className="position-absolute wd-center-avatar">
                            <img src={cameraImage} className = "wd-camera-img-format rounded-circle"/>
                        </div>
                    </div>
                </div>
                {/*textareas*/}
                <div className="wd-leave-extra-space-below-avatar">
                    <div className="form-floating position-relative p-2">
                        <input type="text" id="banner-textarea"  className="form-control w-100 ps-2" onChange={bannerTextChangeHandler} value={`${bannerPic.bannerPic}`}/>
                        <label className="text-secondary" htmlFor="banner-textarea">URL for banner picture</label>
                    </div>
                    <div className="form-floating position-relative p-2">
                        <input type="text" id="avatar-textarea"  className="form-control w-100 ps-2" onChange={avatarTextChangeHandler} value={`${profilePic.profilePic}`}/>
                        <label className="text-secondary" htmlFor="avatar-textarea">URL for avatar picture</label>
                    </div>
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
                               id="switch-flag" onChange={switchChangeHandler}  defaultChecked={requestToBeSeller.requestToBeSeller}/>
                        <label className="form-check-label" id="switch-flag-label"
                               htmlFor="switch-flag">{requestToBeSeller.requestToBeSeller ? 'Seller Status Requested':'Request "Seller" Status'}</label>
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