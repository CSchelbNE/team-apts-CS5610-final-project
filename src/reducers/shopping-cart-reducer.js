import { createSlice } from "@reduxjs/toolkit";
import {
    addToShoppingCartThunk,
    deleteFromShoppingCartThunk,
    getShoppingCartByIdThunk
} from "../services/shopping-cart-thunk";

const initialState = {
    shoppingCart: []
}

const shoppingCartReducer = createSlice({
                                    name: "reviews",
                                    initialState,
                                    extraReducers: {
                                        [deleteFromShoppingCartThunk.fulfilled]:
                                            (state, {payload}) => {
                                                console.log("On Delete")
                                                console.log(payload);
                                                state.shoppingCart = payload;
                                            },
                                        [getShoppingCartByIdThunk.fulfilled]:
                                            (state, {payload}) => {
                                                state.shoppingCart = payload;
                                                console.log("GetbyID")
                                                console.log(state.shoppingCart);
                                            },
                                        [addToShoppingCartThunk.fulfilled]:
                                            (state, {payload}) => {
                                                state.shoppingCart = payload;
                                                console.log(state.shoppingCart);
                                            }
                                    }
                                });

export default shoppingCartReducer.reducer;
