
import * as ActionTypes from "./ActionTypes";

export const Movies=(state={movies:[],isLoading:true,error:null},action)=>{
    switch(action.type){
        case ActionTypes.MOVIE_LOADING:
            return {...state,isLoading:true,error:null};
        case ActionTypes.MOVIE_LOAD:
            return {...state,movies:action.payload,isLoading:false,error:null}
        case ActionTypes.MOVIE_ADD:
            return {...state,movies:state.movies.concat( action.payload),isLoading:false,error:null}
        case ActionTypes.MOVIE_ERROR:
            return {...state,isLoading:false, error:action.payload};
        case ActionTypes.MOVIE_REMOVE:
            return {...state,movies:state.movies.filter((movie)=>movie.firestoreID!==action.payload)}
        case ActionTypes.MOVIE_UPDATE:
            return {...state,movies:state.movies.map((movie)=>{
                if(movie.id===action.payload.firestoreID){
                    return {...movie,rating:action.payload.newRating};
                }
                else{
                    return movie;
                }
            })}
        default:
            return state;
    }
}