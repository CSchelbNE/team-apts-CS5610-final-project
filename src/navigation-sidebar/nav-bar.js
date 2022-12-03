import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router-dom";
import {FaHome, FaSearch, FaSignInAlt, FaSignOutAlt, FaUser} from "react-icons/fa";
import "./index.css"
import SearchBar from "../components/search-bar";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    const active = paths[1];
    return(
        <div>
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

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#">Logo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="#">Profile</Nav.Link>
                    </Nav>
                    <Nav>
                        <Form className="d-flex">
                            <SearchBar/>
                        </Form>
                        <NavDropdown title="Profile" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#">Login</NavDropdown.Item>
                            <NavDropdown.Item href="#">Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
export default NavigationSidebar;