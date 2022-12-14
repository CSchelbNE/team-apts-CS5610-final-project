import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {getShoppingCartByIdThunk} from "../services/shopping-cart-thunk";
import {useSelector} from "react-redux";

function CheckoutDrawer({ currentUser, dispatch, ...props }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {
        dispatch(getShoppingCartByIdThunk(currentUser._id));
    })
    const {shoppingCart} = useSelector(state => state.shoppingCart);
    return (
        <>
            <div variant="primary" onClick={handleShow} className="p-0">
                Checkout
            </div>
            <Offcanvas placement={"end"} show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {shoppingCart.length === 0 ? <></> : shoppingCart.shopping_cart.map(e => e.record_name)}
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default CheckoutDrawer