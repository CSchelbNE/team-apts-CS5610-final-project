import React, { useEffect } from "react";
import {useLocation} from "react-router-dom";
import "./index.css"
import SearchBar from "../components/search-bar";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ModalWrapperButton from "../components/modal-wrapper-button";
import {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {findUserByUsernameThunk, findUserThunk} from "../services/users-thunks";
import ScrollToTop from "../components/scroll-to-top";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    const active = paths[1];
    const [modalShow, setModalShow] = useState(false);
    const hrefPath = window.location.href;
    const dispath = useDispatch();
    useEffect(() => {
        window.scrollTo(0, 0);
        if (!hrefPath.includes("/profile")) {
            dispath(findUserThunk());
        }
    }, []);
    const currentUser = useSelector(state => state.users.currentUser)
    const adminVisibility = !currentUser || currentUser.type !== "ADMIN" ? "d-none" : "";
    return(
        <div className=" position-relative">
            {/*<ScrollToTop/>*/}
            {/* <a className="list-group-item">Vinyl Shop</a>
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
            <Link to="/logout" className={`list-group-item ${active === 'logout'?'active':''}`}>
                <FaSignOutAlt/>
                <span className="d-none d-lg-inline-block ms-2">Logout</span>
            </Link> */}
            <div className="wd-search-bar-absolute-pos">
                <SearchBar noBlur={false}/>
            </div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#">Logo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/profile">Profile</Nav.Link>
                    </Nav>
                    <Nav>
                        <NavDropdown title="user" id="collasible-nav-dropdown">
                            {currentUser ? 
                               <>
                                <NavDropdown.Item>
                                        <span><i className="bi bi-person-fill mr-10 fs-19"></i>{currentUser.username}</span>
                                </NavDropdown.Item>
                                    <NavDropdown.Divider />
                               </>
                            :
                             <></>
                            }
                            <NavDropdown.Item href="/login" className="text-primary login-btn">Login</NavDropdown.Item>
                            <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                            <NavDropdown.Item className={adminVisibility}>
                                <ModalWrapperButton props={"ADMIN"}/>
                                {/*Admin*/}
                                {/*<AdminPanelModal show ={modalShow} onHide={()=> setModalShow(false)}/>*/}
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/logout" className="text-danger logout-btn">Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
export default NavigationSidebar;