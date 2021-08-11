import {useState,useEffect} from "react";
import MovieDetailsCMP from "./MovieDetailsCMP";

function ResultGridCMP(props){

    const [selectedMovie,setSelectedMovie]=useState(null);
    const [currentPage,setCurrentPage]=useState(0);
    const [pageCount,setPageCount]=useState(1);
    const [displayedResults,setDisplayedResults]=useState([]);

    useEffect(()=>{
        setPageCount(Math.ceil(props.results.length/12));
        setCurrentPage(1);
        setDisplayedResults(props.results.slice(12*(currentPage-1),12*currentPage));
    },[props.results,currentPage]);

    //const gridSize="small";

    useEffect(()=>{
        let displayedResults_=props.results.slice(12*(currentPage-1),12*currentPage);
        if( props.user.isLoggedIn && !props.movies.error &&  props.movies.movies.length>0 && displayedResults_.length>0){
            console.log("injecting");
            displayedResults_=displayedResults_.map((movie)=>{
                return props.movies.movies.find((userMovie)=>userMovie.id===movie.id)||movie;
            });
            console.log(displayedResults_);
        }
        setDisplayedResults(displayedResults_);
    },[currentPage]);

    const paginationPages=(pageCount)=>{
        const paginationArr=Array(pageCount);
        for(let i=0;i<pageCount;i++){
            paginationArr[i]=<li className="page-item" key={i+1}><span className={currentPage===i+1?"page-link pagination-custom-item-active cursor-pointer":"page-link pagination-custom-item cursor-pointer"} onClick={()=>setCurrentPage(i+1)}>{i+1}</span></li>;
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

    if(props.isLoading){
        return(
            <div className="text-light">
                Loading
            </div>
        );
    }
    else if(props.error){
        return(
            <div className="text-danger">
                error
            </div>
        );
    }
    else {

        /*((searchResults)=>{
            if( props.user.isLoggedIn && !props.movies.error &&  props.movies.movies.length>0){
                console.log("injecting");
                const modifiedResults=searchResults.map((movie)=>{
                    return props.movies.movies.find((userMovie)=>userMovie.id===movie.id)||movie;
                });
                console.log(modifiedResults);
                setDisplayedResults(modifiedResults);
            }
        })(props.results);*/

        const results=displayedResults.map((result)=>{
            if(selectedMovie===result.id){
                return(
                    <MovieDetailsCMP movieID={result.id} title={result.title} description={result.description} 
                    firestoreID={result.firestoreID||null}
                    handleClose={()=>setSelectedMovie(null)}
                    user={props.user}
                    addMovie={props.addMovie}
                    removeMovie={props.removeMovie}
                    updateMovie={props.updateMovie}
                    rating={result.rating ||0}/>
                );
            }
            else{
                return(
                    <div className={props.gridSize==="small"?"col-6 col-lg-2 co-md-2 col-sm-6 p-2 ":"col-12 col-lg-3 co-md-3 col-sm-6 p-2 "} key={result.id} onClick={()=>setSelectedMovie(result.id)}>
                        <div className="results-grid-item p-2">
                        <span className="position-relative pt-2">
                            {result.title} 
                            {result.rating && 
                            <span className=" badge rounded-pill bg-danger ms-1">
                             Liked</span>
                            }
                        </span>
                        <p className="text-secondary">{result.description|| result.title}</p>
                        <img src={result.image} alt={result.title} className="w-100"/>
                        </div>
                    </div>
                    
                );
            }
        });

        return(
            <div className="row">
                <nav >
                    <ul className="pagination justify-content-center cursor-pointer">
                        <li className={currentPage===1?"page-item disabled":"page-item"}>
                        <span className="page-link pagination-custom-item" href="#" aria-label="Previous" onClick={decPage}>
                            <span aria-hidden="true">&laquo;</span>
                        </span>
                        </li>
                        {paginationPages(pageCount)}
                        <li className={currentPage===pageCount?"page-item disabled":"page-item"}>
                        <span className="page-link bpagination-custom-item " href="#" aria-label="Next" onClick={incPage}>
                            <span aria-hidden="true">&raquo;</span>
                        </span>
                        </li>
                    </ul>
                </nav>
                {results}
                <nav >
                    <ul className="pagination justify-content-center cursor-pointer">
                        <li className={currentPage===1?"page-item disabled":"page-item"}>
                        <span className="page-link pagination-custom-item" href="#" aria-label="Previous" onClick={decPage}>
                            <span aria-hidden="true">&laquo;</span>
                        </span>
                        </li>
                        {paginationPages(pageCount)}
                        <li className={currentPage===pageCount?"page-item disabled":"page-item"}>
                        <span className="page-link pagination-custom-item " href="#" aria-label="Next" onClick={incPage}>
                            <span aria-hidden="true">&raquo;</span>
                        </span>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default ResultGridCMP;