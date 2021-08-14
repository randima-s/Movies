import {useState,useEffect,useRef} from "react";
import {addData,deleteData} from "../firebase/fireStore";
import MovieDetailsCMP from "./MovieDetailsCMP";
import ImageDisplay from "./ImageDisplay";
import Pagination from "./Pagination";

function ResultGridCMP(props){

    const [selectedMovie,setSelectedMovie]=useState(null);
    const [currentPage,setCurrentPage]=useState(0);
    const [pageCount,setPageCount]=useState(1);
    const [displayedResults,setDisplayedResults]=useState([]);
    //const [testState,setTestState] =useState(false);

    const detailsRef=useRef(null);

    useEffect(()=>{
        setCurrentPage(1);
        setPageCount(Math.ceil(props.results.length/12));
        setDisplayedResults(props.results.slice(12*(currentPage-1),12*currentPage));
    },[props.results]);

    //useEffect(()=>{

        //setDisplayedResults(displayedResults_);
    //},[props.results]);

    const handleDetails=(movieID)=>{
        setSelectedMovie(movieID);
    }

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

    //Add Remove from Collection
    /*const removeFromCollection=(firestoreID)=>{
        deleteData(props.user.user.uid,firestoreID)
        .catch((error)=>{
            console.log(error);
        });
    }

    const addToCollection=(newItem)=>{
        addData(props.user.user.uid,newItem)
        .catch((error)=>{
            console.log(error);
        });
    }*/

    //////////////////////////////

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

        let displayedResults_=props.results.slice(12*(currentPage-1),12*currentPage);
        if( props.user.isLoggedIn && !props.movies.error &&  props.movies.movies.length>0 && displayedResults_.length>0){
            console.log("injecting");
            displayedResults_=displayedResults_.map((movie)=>{
                return props.movies.movies.find((userMovie)=>userMovie.id===movie.id)||movie;
            });
            console.log(displayedResults_);
        }

        const results=displayedResults_.map((result)=>{
            //if(selectedMovie===result.id){
                return(
                    <div ref={detailsRef}>
                    <MovieDetailsCMP movieID={result.id} title={result.title} description={result.description} 
                    firestoreID={result.firestoreID||null}
                    handleClose={()=>handleDetails(null)}
                    user={props.user}
                    rating={result.rating ||0}
                    result={result}/>
                    </div>
                );
            //}
            /*else{
                return(
                    <div className={result.rating?"results-grid-item-liked":"results-grid-item"} key={result.id} onClick={()=>handleDetails(result.id)}>
                        <div className=" p-2">
                        <p className="text-center mb-2">
                            {result.title}
                        </p>
                        <ImageDisplay src={result.image} alt={result.title} text={result.description|| result.title}/>
                        </div>
                    </div>
                    
                );
            }*/
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