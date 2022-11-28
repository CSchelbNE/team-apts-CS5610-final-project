import React from "react";
import {Provider} from "react-redux";
import {Routes, Route, Navigate} from "react-router";
import HomeScreen from "./home-screen";
import SearchScreen from "../search/search-screen";
import ProfileScreen from "../profile/profile";
import LoginScreen from "../login/login-screen";

function VinylShop() {
    return (
            <Routes>
                <Route path="/" element={<Navigate to="home"/>}/>
                <Route path="/home" element={<HomeScreen/>}/>
                <Route path="/search" element={<SearchScreen/>}/>
                <Route path="/profile" element={<ProfileScreen/>}/>
                <Route path="/login" element={<LoginScreen/>}/>
            </Routes>
    );
}
export default VinylShop;