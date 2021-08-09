import { useState,useEffect } from "react";
import ResultGridCMP from "./ResultGridCMP";
import {getMostPopular} from "../requests/getMostPopular";

function PopularMoviesCMP(props){
    const [resultsState,setResultsState]=useState({
        isLoading:true,
        results:[],
        error:null
    });
    const [currentPage,setCurrentPage]=useState(1);
    const [pageCount,setPageCount]=useState(1);
    const [allResults,setAllResults]=useState([]);

    //let allResults=[];
    //let totalPages=1;

    useEffect(()=>{
        console.log("loaded");
        update();
    },[]);
    useEffect(()=>{
        setResultsState({
            isLoading:false,
            results:allResults.slice(8*(currentPage-1),8*currentPage),
            error:null
        });
    },[currentPage]);

    const handleResults=(results)=>{
        const modifiedResults= injectUserCollectionData(results);
        setAllResults(modifiedResults);
        setPageCount(Math.ceil(modifiedResults.length/8));
        setResultsState({
            isLoading:false,
            results:modifiedResults.slice(8*(currentPage-1),8*currentPage),
            error:null
        });
    }

    const update=()=>{
        //console.log(movieName);
        setResultsState({
            isLoading:true,
            results:[],
            error:null
        });
        getMostPopular()
        .then((movies)=>{
            console.log(movies);
            handleResults(movies.items);
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

    const paginationPages=(pageCount)=>{
        const paginationArr=Array(pageCount);
        for(let i=0;i<pageCount;i++){
            paginationArr[i]=<li className={currentPage===i+1?"page-item active":"page-item"} key={i+1}><span className="page-link bg-dark text-light border-warning cursor-pointer" onClick={()=>setCurrentPage(i+1)}>{i+1}</span></li>;
        }
        return paginationArr;
    };

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

    return(
        <div>
            <div className="movies-nav-filler">

            </div>
            <div className="container">
                <div className="text-light results-grid">
                <h1 className="category-heading">
                Most Popular Movies
                </h1>
                <nav >
                    <ul className="pagination justify-content-center border-warning cursor-pointer">
                        <li className={currentPage===1?"page-item disabled":"page-item"}>
                        <span className="page-link bg-dark text-light border-warning" href="#" aria-label="Previous" onClick={decPage}>
                            <span aria-hidden="true">&laquo;</span>
                        </span>
                        </li>
                        {paginationPages(pageCount)}
                        <li className={currentPage===pageCount?"page-item disabled":"page-item"}>
                        <span className="page-link bg-dark text-light border-warning cursor-pointer" href="#" aria-label="Next" onClick={incPage}>
                            <span aria-hidden="true">&raquo;</span>
                        </span>
                        </li>
                    </ul>
                </nav>
                <ResultGridCMP 
                    isLoading={resultsState.isLoading} 
                    error={resultsState.error} 
                    results={resultsState.results} 
                    user={props.user}
                    movies={props.movies}
                    addMovie={props.addMovie}
                    removeMovie={props.removeMovie}
                    updateMovie={props.updateMovie}
                />
                </div>
                <nav >
                    <ul className="pagination justify-content-center border-warning cursor-pointer">
                        <li className={currentPage===1?"page-item disabled":"page-item"}>
                        <span className="page-link bg-dark text-light border-warning" href="#" aria-label="Previous" onClick={decPage}>
                            <span aria-hidden="true">&laquo;</span>
                        </span>
                        </li>
                        {paginationPages(pageCount)}
                        <li className={currentPage===pageCount?"page-item disabled":"page-item"}>
                        <span className="page-link bg-dark text-light border-warning cursor-pointer" href="#" aria-label="Next" onClick={incPage}>
                            <span aria-hidden="true">&raquo;</span>
                        </span>
                        </li>
                    </ul>
                </nav>
            </div>
            
        </div>
    );
}

export default PopularMoviesCMP;