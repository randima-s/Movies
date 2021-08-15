
import ResultGridCMP from "./ResultGridCMP";

function MyMoviesCMP(props){

    if(!props.user.isLoggedIn){
        return(
            <div className="text-light">
                Loading
            </div>
        );
    }
    else if(props.user.error){
        return(
            <div>
                Error
            </div>
        );
    }
    else{
        return(
            <div className="text-light">
            <div className="movies-nav-filler">
            </div>
            <div className="container">
                <div>
                    <h1 className="text-center">{props.user.user.displayName}</h1>
                </div>
                <div>
                    <h4>My Movie Collection</h4>
                    <hr/>
                    {props.movies.movies.length>0?(
                        <ResultGridCMP 
                        movies={props.movies}
                        results={props.movies} 
                        user={props.user}/>
                    ):(
                        <div className="text-center">
                            <p>Empty</p>
                        </div>
                    )}
                </div>
            </div>
            </div>
        );
    }
}

export default MyMoviesCMP;
