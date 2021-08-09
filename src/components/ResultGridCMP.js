import {useState} from "react";
import MovieDetailsCMP from "./MovieDetailsCMP";

function ResultGridCMP(props){

    const [selectedMovie,setSelectedMovie]=useState(null);

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
        const results=props.results.map((result)=>{
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
                {results}
            </div>
        );
    }
}

export default ResultGridCMP;