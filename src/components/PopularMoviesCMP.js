import { useState,useEffect } from "react";
import ResultGridCMP from "./ResultGridCMP";

function PopularMoviesCMP(props){
    
    const [modifiedResults,setModifiedResults]=useState([]);

    /*useEffect(()=>{
        injectUserCollectionData(props.popular.movies);
    },[props.movies.movies,props.popular.movies]);*/

    //should be moved to backend
    /*const injectUserCollectionData=(popularMovies)=>{
        if(props.user.isLoggedIn && !props.movies.isLoading && !props.movies.error){
            const modifiedResults=popularMovies.map((movie)=>{
                return props.movies.movies.find((userMovie)=>userMovie.id===movie.id)||movie;
            });
            setModifiedResults(modifiedResults);
        }
        else{
            setModifiedResults(popularMovies);
        }
    }*/

    return(
        <div>
            <div className="movies-nav-filler">

            </div>
            <div className="container">
                <div className="text-light results-grid">
                <h1 className="category-heading">
                Most Popular Movies
                </h1>
                <ResultGridCMP 
                    movies={props.movies}
                    isLoading={props.popular.isLoading} 
                    error={props.popular.error} 
                    results={props.popular.movies} 
                    user={props.user}
                    addMovie={props.addMovie}
                    removeMovie={props.removeMovie}
                    updateMovie={props.updateMovie}
                />
                </div>
            </div>
            
        </div>
    );
}

export default PopularMoviesCMP;