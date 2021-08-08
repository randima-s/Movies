import {createStore,combineReducers,applyMiddleware} from "redux";

export const store=createStore(combineReducers({
    images:Images,
    blogs:Blogs,
    comments:Comments,
    user:User
}),applyMiddleware(thunk,logger));