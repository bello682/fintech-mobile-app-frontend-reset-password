import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { resetPasswordReducer } from "./reducers/resetPasswordReducer";

const reducer = combineReducers({
	resetPasswordState: resetPasswordReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
