
import {useState, useEffect } from "react";
import { getMovieDetails } from "../requests/getMovieDetails";

const MovieDetailsCMP =function(props){

    const [resultsState,setResultsState]=useState({
        isLoading:true,
        details:[],
        error:null
    });

    useEffect(()=>{
        if(props.movieID){
            getDetails(props.movieID);
        }
    },[props.movieID]);

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

    
    if(resultsState.isLoading){
        return(
        <div>
            Loading
        </div>
        );
    }
    else if(resultsState.error){
        return(
            <div>
                Loading
            </div>
        );
    }
    else{

        const actors=resultsState.details.actorList.map((actor)=>{
            return(
                <div className="col-lg-2 col-md-3 col-sm-4 col-6 p-2 cast-grid-item" key={actor.id}>
                    <img src={actor.image} alt={actor.name} className="w-100"></img>
                    {actor.name } as <strong>{actor.asCharacter}</strong>
                </div>
            );
        }) ;

        const genres=resultsState.details.genreList.map((genre)=>{
            return(
                <span key={genre.key} className="badge bg-primary me-1">
                    {genre.value}
                </span>
            );
        });

        return(
            <div className="col-12 " key={props.movieID}>
                <div className="text-end"><span className="badge bg-danger" style={{cursor:"pointer"}} onClick={props.handleClose}>X</span></div>
                <div className="movie-details">
                <h4 className="text-center">{props.title}</h4>
                <p className="text-center">{genres}</p>
                <p className="text-center" style={{color:"#EDC01F"}}>{resultsState.details.awards}</p>
                <div className="row">
                    <div className="col-md-4">
                        <img src={props.image} alt={props.title} className="w-100"/>
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
                    <h4 className="mt-4">Cast</h4>
                    <hr/>
                    {actors}
                </div>
                </div>
            </div>
        );
    }
    
}

export default MovieDetailsCMP;