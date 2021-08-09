
import * as ActionTypes from "./ActionTypes";

export const Popular=(state={movies:[],isLoading:true,error:null},action)=>{
    switch(action.type){
        case ActionTypes.POPULAR_LOADING:
            return {...state,isLoading:true,error:null};
        case ActionTypes.POPULAR_LOAD:
            return {...state,movies:action.payload,isLoading:false,error:null}
        case ActionTypes.POPULAR_ERROR:
            return {...state,isLoading:false, error:action.payload};
        default:
            return state;
    }
}