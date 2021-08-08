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
        console.log(props.movieName);
        if(props.movieName){
            handleSearch(props.movieName);
        }
    },[props.movieName]);

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
            setResultsState({
                isLoading:false,
                results:movies.results,
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
                <ResultGridCMP isLoading={resultsState.isLoading} error={resultsState.error} results={resultsState.results}/>
                </div>
            </div>
            
        </div>
    );
}

export default ResultsCMP;