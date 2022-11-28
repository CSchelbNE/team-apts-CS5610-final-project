import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router-dom";
import {FaHome, FaSearch, FaSignInAlt, FaUser} from "react-icons/fa";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    const active = paths[1];
    return(
        <div className="list-group">
            <a className="list-group-item">Vinyl Shop</a>
            <Link to="/home" className={`list-group-item ${active === 'home'?'active':''}`}>
                <FaHome/>
                <span className="d-none d-lg-inline-block ms-2">Home</span>
            </Link>
            <Link to="/search" className={`list-group-item ${active === 'search'?'active':''}`}>
                <FaSearch/>
                <span className="d-none d-lg-inline-block ms-2">Search</span>
            </Link>
            <Link to="/profile" className={`list-group-item ${active === 'profile'?'active':''}`}>
                <FaUser />
                <span className="d-none d-lg-inline-block ms-2">Profile</span>
            </Link>
            <Link to="/login" className={`list-group-item ${active === 'login'?'active':''}`}>
                <FaSignInAlt/>
                <span className="d-none d-lg-inline-block ms-2">Login</span>
            </Link>
        </div>
    );
}
export default NavigationSidebar;