import { createSlice } from "@reduxjs/toolkit";
import {
    addToShoppingCartThunk,
    deleteFromShoppingCartThunk,
    getShoppingCartByIdThunk
} from "../services/shopping-cart-thunk";

const initialState = {
    shopping_cart: []
}

const shoppingCartReducer = createSlice({
                                    name: "reviews",
                                    initialState,
                                    extraReducers: {
                                        [deleteFromShoppingCartThunk.fulfilled]:
                                            (state, {payload}) => {
                                                console.log("On Delete")
                                                console.log(payload);
                                                state.shopping_cart = payload;
                                            },
                                        [getShoppingCartByIdThunk.fulfilled]:
                                            (state, {payload}) => {
                                                state.shopping_cart = payload;
                                                console.log("GetbyID")
                                                console.log(state.shopping_cart);
                                            },
                                        [addToShoppingCartThunk.fulfilled]:
                                            (state, {payload}) => {
                                                state.shopping_cart = payload;
                                                console.log(state.shopping_cart);
                                            }
                                    }
                                });

export default shoppingCartReducer.reducer;
