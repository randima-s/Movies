
import {useState,useRef } from "react";
import { getMovieDetails } from "../requests/getMovieDetails";
import {addData,deleteData} from "../firebase/fireStore";
import ImageDisplay from "./ImageDisplay";

const MovieDetailsCMP =function(props){

    const [showDetails,setShowDetails]=useState(false);
    const [resultsState,setResultsState]=useState({
        isLoading:true,
        details:[],
        error:null
    });

    const detailsRef=useRef(null);

    const handleClick=()=>{
        if(props.result.id){
            getDetails(props.result.id);
        }
        setShowDetails(true);
    };

    const getDetails=(movieID)=>{
        setResultsState({
            isLoading:true,
            details:[],
            error:null
        });
        getMovieDetails(movieID)
        .then((movieDetails)=>{
            console.log(movieDetails);
            setResultsState({
                isLoading:false,
                details:movieDetails,
                error:null
            });
        })
        .catch((error)=>{
            console.log(error);
            setResultsState({
                isLoading:false,
                details:[],
                error:error
            });
        });
    }

    const removeFromCollection=()=>{
        deleteData(props.user.user.uid,props.firestoreID)
        .catch((error)=>{
            console.log(error);
        });
    }

    const addToCollection=()=>{
        const newItem={
            rating:1,
            id:props.result.id,
            resultType:"Title",
            image:props.result.image,
            title:props.result.title
        };
        addData(props.user.user.uid,newItem)
        .catch((error)=>{
            console.log(error);
        });
    }
    
    if(!showDetails){
        return(
            <div>
                <div className={props.result.rating?"results-grid-item-liked details-button-parent":"results-grid-item details-button-parent"} key={props.result.id}>
                    <div className=" p-2 ">
                        <p className="text-center mb-2">
                            {props.result.title} 
                        </p>
                        {props.user.isLoggedIn && (
                            <div className="mx-auto mb-2 cursor-pointer heart-grid">
                            {props.rating===0?(
                                
                                    <svg width="25" height="25" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="heart-svg"  onClick={addToCollection}>
                                    <path id="heart" d="M15.6124 5.55276C8.01243 -3.24724 2.11243 2.55276 1.11243 7.55275C0.112426 12.5527 6.11243 20.0527 6.11243 20.0527L15.6124 31.0527L25.1124 20.0527C25.1124 20.0527 32 14 28.1124 5.05276C24.2249 -3.89449 15.6124 5.55276 15.6124 5.55276Z"  stroke="#B10E0E"/>
                                    </svg>
                            ):(
                                    <svg width="25" height="25" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="heart-svg" onClick={removeFromCollection}>
                                    <path id="heart" d="M15.6124 5.55276C8.01243 -3.24724 2.11243 2.55276 1.11243 7.55275C0.112426 12.5527 6.11243 20.0527 6.11243 20.0527L15.6124 31.0527L25.1124 20.0527C25.1124 20.0527 32 14 28.1124 5.05276C24.2249 -3.89449 15.6124 5.55276 15.6124 5.55276Z" fill="#CC3F3F" stroke="#B10E0E"/>
                                    </svg>
                            )
                            }
                            </div>
                        )}
                        <ImageDisplay src={props.result.image} alt={props.result.title} text={props.result.description|| props.result.title}/>
                        <div className="details-button" onClick={handleClick}>
                            Details
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else{
        if(resultsState.isLoading){
            return(
            <div className="results-grid-item text-center">
                <div className="spinner-border text-primary mx-auto d-block mt-4" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            );
        }
        else if(resultsState.error){
            return(
                <div className="results-grid-item text-center text-danger">
                Error
                </div>
            );
        }
        else{
            const actors=resultsState.details.actorList.map((actor)=>{
                return(
                    <div className="actors-grid-item" key={actor.id}>
                        <ImageDisplay src={actor.image} alt={actor.name} text={""}/>
                        {actor.name } as <strong>{actor.asCharacter}</strong>
                    </div>
                );
            }) ;

            const genres=resultsState.details.genreList.map((genre)=>{
                return(
                    <span key={genre.key} className="badge bg-purple me-1">
                        {genre.value}
                    </span>
                );
            });

            return(
                <div className="col-12 justify-content-center " key={props.result.id+"d"} ref={detailsRef}>
                    <div className="text-end"><span className="badge bg-danger" style={{cursor:"pointer"}} onClick={()=>setShowDetails(false)}>X</span></div>
                    <div className="movie-details">
                    <h4 className="text-center">{resultsState.details.title}</h4>
                    <p className="text-center">{genres}</p>
                    <p className="text-center" style={{color:"#EDC01F"}}>{resultsState.details.awards}</p>

                    {props.user.isLoggedIn && (
                        <div className="mx-auto mb-2">
                            
                            {props.rating===0?(
                                <div className="cursor-pointer">
                                    <svg width="30" height="32" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="heart-svg"  onClick={addToCollection}>
                                    <path id="heart" d="M15.6124 5.55276C8.01243 -3.24724 2.11243 2.55276 1.11243 7.55275C0.112426 12.5527 6.11243 20.0527 6.11243 20.0527L15.6124 31.0527L25.1124 20.0527C25.1124 20.0527 32 14 28.1124 5.05276C24.2249 -3.89449 15.6124 5.55276 15.6124 5.55276Z"  stroke="#B10E0E"/>
                                    </svg>
                                    <p className="text-center mb-0" onClick={addToCollection}>Add to favourites</p>
                                </div>
                            ):(
                                <div className="cursor-pointer">
                                    <svg width="30" height="32" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="heart-svg" onClick={removeFromCollection}>
                                    <path id="heart" d="M15.6124 5.55276C8.01243 -3.24724 2.11243 2.55276 1.11243 7.55275C0.112426 12.5527 6.11243 20.0527 6.11243 20.0527L15.6124 31.0527L25.1124 20.0527C25.1124 20.0527 32 14 28.1124 5.05276C24.2249 -3.89449 15.6124 5.55276 15.6124 5.55276Z" fill="#CC3F3F" stroke="#B10E0E"/>
                                    </svg>
                                    <p className="text-center mb-0" onClick={removeFromCollection}>Remove from favourites</p>
                                </div>
                            )
                            }
                        </div>
                    )}

                    <div className="row">
                        <div className="col-md-4">
                            <img src={resultsState.details.image} alt={resultsState.details.title} className="w-100"/>
                            Rating <span className="badge bg-danger text-light">{resultsState.details.contentRating} </span> 
                            , IMDB <span className="badge bg-warning text-dark">{resultsState.details.imDbRating}</span>
                        </div>
                        <div className="col-md-8">
                            <p>{resultsState.details.plot}</p>
                            <ul className="list-unstyled">
                                <li><strong>Release Date :</strong> {resultsState.details.releaseDate}</li>
                                <li><strong>Runtime :</strong> {resultsState.details.runtimeStr}</li>
                                <li><strong>Directors:</strong> {resultsState.details.directors}</li>
                                <li><strong>Writters:</strong> {resultsState.details.writers}</li>
                                <li><strong>Stars:</strong> {resultsState.details.stars}</li>
                            </ul>

                            <div className="bg-primary p-2">
                                Box Office
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="text-dark fw-bold">Budget </td>
                                            <td>{resultsState.details.boxOffice.budget}</td>
                                        </tr>
                                        <tr>
                                            <td className="text-dark fw-bold">Opening weekend USA </td>
                                            <td>{resultsState.details.boxOffice.openingWeekendUSA}</td>
                                        </tr>
                                        <tr>
                                            <td className="text-dark fw-bold">Gross USA </td>
                                            <td>{resultsState.details.boxOffice.grossUSA}</td>
                                        </tr>
                                        <tr>
                                            <td className="text-dark fw-bold">Gross Worldwide </td>
                                            <td>{resultsState.details.boxOffice.cumulativeWorldwideGross}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                        <h4 className="mt-4">Cast</h4>
                        <hr/>
                        <div className="actors-grid">
                            {actors}
                        </div>
                    </div>
                </div>
            );
        }
    }
    
}

export default MovieDetailsCMP;