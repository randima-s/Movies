import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk  from "redux-thunk";
import {logger} from "redux-logger";
import {User} from "./reducerUser";
import {Movies} from "./reducerMovies";
import { Popular } from "./reducerPopular";

export const store=createStore(combineReducers({
    user:User,
    movies:Movies,
    popular:Popular
}),applyMiddleware(thunk,logger));