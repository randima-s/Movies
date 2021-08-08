import * as ActionTypes from "./ActionTypes";
import {readData} from "../firebase/fireStore";

/////////User
export const updateUser=(user)=>{
    return({
        type:ActionTypes.UPDATE_USER,
        payload:user
    });
}

/////////Movies
export const fetchMovies=(userID)=>dispatch=>{
    //const blogs=[];
    dispatch(loadingMovies());
    readData(userID)
    .then((movies)=>{
        dispatch(loadMovies(movies))
    })
    .catch(error=>{
        console.log("Error: "+error);
        dispatch(errorMovies(error));
    });
}

export const loadingMovies=()=>{
    return({
        type:ActionTypes.MOVIE_LOADING,
    });
}

export const loadMovies=(movies)=>{
    return({
        type:ActionTypes.MOVIE_LOAD,
        payload:movies
    });
}

export const addMovie=(movie)=>{
    return({
        type:ActionTypes.MOVIE_ADD,
        payload:movie
    });
}

export const removeMovie=(firestoreID)=>{
    return({
        type:ActionTypes.MOVIE_REMOVE,
        payload:firestoreID
    });
}

export const updateMovie=(firestoreID,newRating)=>{
    return({
        type:ActionTypes.MOVIE_UPDATE,
        payload:{firestoreID,newRating}
    });
}

export const errorMovies=(error)=>{
    return({
        type:ActionTypes.MOVIE_ERROR,
        payload:error
    });
}