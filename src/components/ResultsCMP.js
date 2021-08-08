import { useState,useEffect } from "react";
import SearchCMP from "./SearchCMP";
import ResultGridCMP from "./ResultGridCMP";
import {searchMovies} from "../requests/searchMovies";

function ResultsCMP(props){
    const [resultsState,setResultsState]=useState({
        isLoading:true,
        results:[],
        error:null
    });

    useEffect(()=>{
        console.log(props.searchName);
        if(props.searchName){
            handleSearch(props.searchName);
        }
    },[props.searchName]);

    const handleSearch=(movieName)=>{
        //console.log(movieName);
        setResultsState({
            isLoading:true,
            results:[],
            error:null
        });
        searchMovies(movieName)
        .then((movies)=>{
            console.log(movies);
            const modifiedResults= injectUserCollectionData(movies.results);
            setResultsState({
                isLoading:false,
                results:modifiedResults,
                error:null
            });
        })
        .catch((error)=>{
            console.log(error);
            setResultsState({
                isLoading:false,
                results:[],
                error:error
            });
        });
    }

    //should be moved to backend
    const injectUserCollectionData=(searchResults)=>{
        if(props.user.isLoggedIn && !props.movies.isLoading && !props.movies.error){
            console.log("modifying");
            const modifiedResults=searchResults.map((movie)=>{
                return props.movies.movies.find((userMovie)=>userMovie.id===movie.id)||movie;
            });
            console.log(modifiedResults);
            return modifiedResults;
        }
        else{
            return searchResults;
        }
    }

    return(
        <div>
            <div className="movies-nav-filler">

            </div>
            <div className="container">
                <h2 className="text-light text-center">Search Movies</h2>
                <div className="w-50 mx-auto">
                <SearchCMP handleSearch={handleSearch}/>
                </div>
                <div className="text-light results-grid">
                <ResultGridCMP 
                    isLoading={resultsState.isLoading} 
                    error={resultsState.error} 
                    results={resultsState.results} 
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

export default ResultsCMP;