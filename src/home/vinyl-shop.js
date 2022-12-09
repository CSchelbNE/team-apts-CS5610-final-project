import React from "react";
import {Provider, useSelector} from "react-redux";
import {Routes, Route, Navigate} from "react-router";
import HomeScreen from "./home-screen";
import SearchScreen from "../search/search-screen";
import ProfileScreen from "../profile/profile";
import EditProfileScreen from "../edit-profile/edit-profile";
import LoginScreen from "../login/index.js";
import LogoutScreen from "../login/logout.js"
import OtherUserProfileScreen from "../profile/other-user-profile-screen";
import DetailsScreen from "../details/details-screen";
import ListingComponent from "../details/listing-component";

function VinylShop() {

    return (
            <Routes>
                <Route path="/" element={<Navigate to="home"/>}/>
                <Route path="/home" element={<HomeScreen/>}/>
                <Route path="/search/:id" element={<SearchScreen/>}/>
                <Route path="/profile/*" element={<ProfileScreen/>}/>
                <Route path="/edit-profile" element={<EditProfileScreen/>}/>
                <Route path="/login" element={<LoginScreen/>}/>
                <Route path="/logout" element={<LogoutScreen/>}/>
                <Route path="/listings/:id" element={<ListingComponent/>}/>
                <Route path="/details/:id" element={<DetailsScreen/>}/>
            </Routes>
    );
}
export default VinylShop;