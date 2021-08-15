import {useState,useRef} from "react";
import MovieDetailsCMP from "./MovieDetailsCMP";
import Pagination from "./Pagination";

function ResultGridCMP(props){

    const [currentPage,setCurrentPage]=useState(1);
    const pageCount=Math.ceil(props.results.movies.length/12);

    const detailsRef=useRef(null);

    const incPage=()=>{
        if(currentPage<pageCount){
            setCurrentPage(currentPage+1);
        }
    }

    const decPage=()=>{
        if(currentPage>1){
            setCurrentPage(currentPage-1);
        }
    }

    if(props.results.isLoading){
        return(
            <div className="results-grid-item">
                <br/>
                <svg width="120" height="8" viewBox="0 0 120 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="loadingbar">
                <rect width="120" height="8" fill="none"/>
                <circle id="loadicon" cx="3" cy="4" r="4" fill="#27A4FF"/>
                </g>
                </svg>
                <br/>
                Loading
            </div>
        );
    }
    else if(props.results.error){
        return(
            <div className="text-danger">
                Error : {props.results.error}
            </div>
        );
    }
    else {
        let displayedResults_=props.results.movies.slice(12*(currentPage-1),12*currentPage);
        if( props.user.isLoggedIn && !props.movies.error &&  props.movies.movies.length>0 && displayedResults_.length>0){
            console.log("injecting");
            displayedResults_=displayedResults_.map((movie)=>{
                return props.movies.movies.find((userMovie)=>userMovie.id===movie.id)||movie;
            });
            console.log(displayedResults_);
        }

        const results=displayedResults_.map((result)=>{
            return(
                <div ref={detailsRef} key={result.id}>
                <MovieDetailsCMP 
                firestoreID={result.firestoreID||null}
                user={props.user}
                rating={result.rating ||0}
                result={result}/>
                </div>
            );
        });

        return(
            <div className="row">
                <Pagination currentPage={currentPage} decPage={decPage} incPage={incPage} pageCount={pageCount} setCurrentPage={setCurrentPage}/>
                <div className="results-grid">
                    {results}
                </div>
                <Pagination currentPage={currentPage} decPage={decPage} incPage={incPage} pageCount={pageCount} setCurrentPage={setCurrentPage}/>
            </div>
        );
    }
}

export default ResultGridCMP;