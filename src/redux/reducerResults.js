
import * as ActionTypes from "./ActionTypes";

export const Results=(state={results:[],isLoading:true,error:null},action)=>{
    switch(action.type){
        case ActionTypes.RESULTS_LOADING:
            return {...state,isLoading:true,error:null};
        case ActionTypes.RESULTS_LOAD:
            return {...state,results:action.payload,isLoading:false,error:null}
        case ActionTypes.RESULTS_ERROR:
            return {...state,isLoading:false, error:action.payload};
        default:
            return state;
    }
}