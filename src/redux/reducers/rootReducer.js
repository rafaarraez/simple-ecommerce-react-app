import { combineReducers } from "redux";
import {productos, productDetailsReducer} from './products.reducer';

const rootReducer = combineReducers({
    productos,
    productDetailsReducer
});

export default rootReducer;