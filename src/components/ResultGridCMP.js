import {useState,useEffect} from "react";
import MovieDetailsCMP from "./MovieDetailsCMP";

function ResultGridCMP(props){

    const [selectedMovie,setSelectedMovie]=useState(null);
    const [currentPage,setCurrentPage]=useState(0);
    const [pageCount,setPageCount]=useState(1);
    const [displayedResults,setDisplayedResults]=useState([]);

    useEffect(()=>{
        setPageCount(Math.ceil(props.results.length/8));
        setCurrentPage(1);
        setDisplayedResults(props.results.slice(8*(currentPage-1),8*currentPage));
    },[props.results]);

    useEffect(()=>{
        setDisplayedResults(props.results.slice(8*(currentPage-1),8*currentPage));
    },[currentPage]);

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

        const results=displayedResults.map((result)=>{
            if(selectedMovie===result.id){
                return(
                    <MovieDetailsCMP movieID={result.id} title={result.title} description={result.description} image={result.image} 
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
                    <div className="col-12 col-lg-3 co-md-4 col-sm-6 p-2 " key={result.id} onClick={()=>setSelectedMovie(result.id)}>
                        <div className="results-grid-item p-2">
                        <span className="position-relative pt-2">
                            {result.title}
                            {result.rating && 
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            Liked</span>
                            }
                        </span>
                        <p className="text-secondary">{result.description}</p>
                        <img src={result.image} alt={result.title} className="w-100"/>
                        </div>
                    </div>
                    
                );
            }
        });

        return(
            <div className="row">
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
                {results}
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
        );
    }
}

export default ResultGridCMP;