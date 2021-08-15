
import * as ActionTypes from "./ActionTypes";

export const Results=(state={movies:[],isLoading:true,error:null},action)=>{
    switch(action.type){
        case ActionTypes.RESULTS_LOADING:
            return {...state,isLoading:true,error:null};
        case ActionTypes.RESULTS_LOAD:
            return {...state,movies:action.payload,isLoading:false,error:null}
        case ActionTypes.RESULTS_ERROR:
            return {...state,isLoading:false, error:action.payload};
        default:
            return state;
    }
}