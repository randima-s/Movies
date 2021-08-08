import {createStore,combineReducers,applyMiddleware} from "redux";
import {User} from "./reducerUser";
import thunk  from "redux-thunk";
import {logger} from "redux-logger";

export const store=createStore(combineReducers({
    user:User
}),applyMiddleware(thunk,logger));