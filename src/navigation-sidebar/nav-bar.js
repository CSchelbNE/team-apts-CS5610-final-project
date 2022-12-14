import React, { useEffect } from "react";
import {useLocation} from "react-router-dom";
import "./index.css"
import SearchBar from "../components/search-bar";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ModalWrapperButton from "../components/modal-wrapper-button";
import {useSelector, useDispatch} from "react-redux";
import {
    findCurrentUserThunk,
    findUserByUsernameThunk,
    findUserThunk
} from "../services/users-thunks";
import {clearProfileUser} from "../reducers/users-reducer";
import CheckoutDrawer from "../components/checkout-drawer";
import {getShoppingCartByIdThunk} from "../services/shopping-cart-thunk";
import {useState} from "react";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    const active = paths[1];
    const hrefPath = window.location.href;
    const dispath = useDispatch();
    const [show, setShow] = useState(false);
    useEffect(() => {
        window.scrollTo(0, 0);
        dispath(clearProfileUser());
        dispath(findCurrentUserThunk()).then(e => dispath(getShoppingCartByIdThunk(e.payload._id)));
    }, [pathname]);
    const {currentUser,profileUser} = useSelector(state => state.users);
    const {shoppingCart} = useSelector(state => state.shoppingCart);
    const adminVisibility = !currentUser || currentUser.type !== "ADMIN" ? "d-none" : "";
    const searchbarVisibility = show ? "d-none" : "wd-search-bar-absolute-pos"
    return(
        <div className=" position-relative">
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
            <div className={searchbarVisibility}>
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
                            <NavDropdown.Item className={!currentUser ? "d-none" : ""}>
                                {!currentUser ? <></> : <CheckoutDrawer currentUser={currentUser} show={show} setShow={setShow} shoppingCart={shoppingCart} dispatch={dispath}/>}
                            </NavDropdown.Item>
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