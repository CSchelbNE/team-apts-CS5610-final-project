import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {confirmTransactionThunk, getShoppingCartByIdThunk} from "../services/shopping-cart-thunk";
import {useSelector} from "react-redux";
import CartItem from "./cart-item";
import {uuid4} from "uuid4";

function CheckoutDrawer({ currentUser, dispatch, shoppingCart, show, setShow, ...props }) {
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const total = shoppingCart.shopping_cart.reduce(
        (accumulator, currentValue) => accumulator + currentValue.record_price*currentValue.record_quantity,
        0
    );
    return (
        <>
            <div variant="primary" onClick={handleShow} className="p-0">
                Checkout
            </div>
            <Offcanvas  placement={"end"} show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Checkout</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <h4>{"Total Items: " + shoppingCart.shopping_cart.length.toString()}</h4>
                    {shoppingCart.length === 0 ? <></> : shoppingCart.shopping_cart.map(e => <CartItem key={uuid4()} listing={e} />)}
                </Offcanvas.Body>
                <div className="w-100 d-flex justify-content-between align-items-center">
                    <h4 className="m-2">{"Total: $" + total}</h4>
                    <Button style={{width:"fit-content"}} onClick={dispatch(confirmTransactionThunk(shoppingCart))} className="m-2 bg-success border-success">Submit</Button>
                </div>
            </Offcanvas>
        </>
    );
}

export default CheckoutDrawer