import React from "react";
import NavigationSidebar from "../navigation-sidebar/nav-bar";
import EditProfileComponent from "./edit-profile-component";
import WhoToFollowComponent from "../following/who-to-follow";
import {useSelector} from "react-redux";

const EditProfileScreen = () => {
    let {currentUser} = useSelector(state => state.users);

    return (
        <div className="">
            <NavigationSidebar/>
            {
                !currentUser &&
                <>
                    <div className="container mt-2">
                        <h3>Please log in</h3>
                    </div>
                </>
            }
            {
                currentUser &&
                <>
                    <div className="container mt-2">
                        <div className="row">
                            <div className="col-8">

                                <EditProfileComponent currentUser={currentUser} />

                            </div>
                            <div className="col-4">
                                <WhoToFollowComponent currentUser={currentUser}/>
                            </div>
                        </div>
                    </div>
                </>

            }
        </div>
    );
}
export default EditProfileScreen;