import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    shopping_cart: []
}

const shoppingCartReducer = createSlice({
                                    name: "reviews",
                                    initialState,
                                    extraReducers: {


                                    }
                                });

export default shoppingCartReducer.reducer;
