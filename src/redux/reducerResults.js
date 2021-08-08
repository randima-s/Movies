
import * as ActionTypes from "./ActionTypes";

export const User=(state={loggedIn:[],isLoading:true,error:null},action)=>{
    switch(action.type){
        case ActionTypes.RESULTS_LOADING:
            return {...state,isLoading:true,error:null};
        default:
            return state;
    }
}