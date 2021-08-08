import {useState} from "react";
import MovieDetailsCMP from "./MovieDetailsCMP";

function ResultGridCMP(props){

    const [selectedMovie,setSelectedMovie]=useState(null);



    if(props.isLoading){
        return(
            <div>
                Loading
            </div>
        );
    }
    else if(props.error){
        return(
            <div>
                error
            </div>
        );
    }
    else {
        const results=props.results.map((result)=>{
            if(selectedMovie===result.id){
                return(
                    <MovieDetailsCMP movieID={result.id} title={result.title} description={result.description} image={result.image} handleClose={()=>setSelectedMovie(null)}/>
                );
            }
            else{
                return(
                    <div className="col-12 col-lg-3 co-md-4 col-sm-6 p-4 results-grid-item" key={result.id} onClick={()=>setSelectedMovie(result.id)}>
                        <h5>{result.title}</h5>
                        <p className="text-secondary">{result.description}</p>
                        <img src={result.image} alt={result.title} className="w-100"/>
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