import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk  from "redux-thunk";
import {logger} from "redux-logger";
import {User} from "./reducerUser";
import {Movies} from "./reducerMovies";
import { Popular } from "./reducerPopular";
import { Results } from "./reducerResults";

export const store=createStore(combineReducers({
    user:User,
    movies:Movies,
    popular:Popular,
    results:Results
}),applyMiddleware(thunk,logger));