import React, {useEffect} from "react";
import NavigationSidebar from "../navigation-sidebar/nav-bar";
import "./index.css";
import SuggestedComponent from "./suggested-component";
import UsersListComponent from "../users/users-list";
import {useDispatch, useSelector} from "react-redux";
import WishListComponent from "../wish-list/wish-list-component";
import {findUserThunk} from "../services/users-thunks";
import ModalWrapperButton from "../components/modal-wrapper-button";

// http://www.vinylstyl.com/wp-content/uploads/sites/4/2016/02/LPcollage-1.jpg
// https://townsquare.media/site/295/files/2021/01/psych.jpg
const HomeScreen = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findUserThunk());
    }, []);
    const {currentUser} = useSelector(state => state.users);


    return (
        <div className="">

            <NavigationSidebar/>

            <div className="container mt-2">
                <div className="position-relative">

                    <img src={"http://www.vinylstyl.com/wp-content/uploads/sites/4/2016/02/LPcollage-1.jpg"} className="w-100 wd-banner-image-format"/>

                    <div className="wd-title-format">
                        Vintage Vinyl
                    </div>
                    <div className="wd-title2-format">
                        Review Your Favorite Albums
                    </div>
                    <div className="wd-title3-format">
                        Buy & Sell
                    </div>
                </div>
               
                <div>
                    <h1>Suggested Albums</h1>
                    <div className="border border-2 border-secondary p-2 m-2">
                        <ModalWrapperButton/>
                        <SuggestedComponent/>
                    </div>

                </div>
                <div>
                    <h1>Recent Users</h1>
                    <div className="border border-2 border-secondary p-2 m-2">
                        <UsersListComponent/>
                    </div>
                </div>
                <div>
                    {
                        currentUser &&
                        <div>
                            <h1>Wish List</h1>
                            <div className="border border-2 border-secondary p-2 m-2">
                                <WishListComponent key={currentUser._id} currentUser={currentUser}/>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}
export default HomeScreen;