import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {getShoppingCartByIdThunk} from "../services/shopping-cart-thunk";
import {useSelector} from "react-redux";
import CartItem from "./cart-item";
import {uuid4} from "uuid4";

function CheckoutDrawer({ currentUser, dispatch, shoppingCart, ...props }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div variant="primary" onClick={handleShow} className="p-0">
                Checkout
            </div>
            <Offcanvas placement={"end"} show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Checkout</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {shoppingCart.length === 0 ? <></> : shoppingCart.shopping_cart.map(e => <CartItem key={uuid4()} listing={e} />)}
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default CheckoutDrawer