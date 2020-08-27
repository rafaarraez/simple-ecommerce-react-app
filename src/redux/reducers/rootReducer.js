import { combineReducers } from "redux";
import {productos, productDetailsReducer, productSaveReducer, productDeleteReducer } from './products.reducer';
import { cartReducer } from './cart.reducer';
import { userRegisterReducer, userSigninReducer } from "./user.reducer";

const userInfo = JSON.parse(localStorage.getItem('user')) || null;
const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

const initialState = {
    cart: { cartItems, shipping: {}, payment: {} },
    userSignin: { userInfo },
};

const rootReducer = combineReducers({
    productos,
    productDetailsReducer,
    productSave: productSaveReducer,
    productDelete: productDeleteReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
});

export {rootReducer, initialState};