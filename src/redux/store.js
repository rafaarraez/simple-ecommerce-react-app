import { createStore, applyMiddleware } from "redux";
import { rootReducer, initialState } from "./reducers/rootReducer";
import thunk from "redux-thunk";

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;