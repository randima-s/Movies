
import ResultGridCMP from "./ResultGridCMP";

function PopularMoviesCMP(props){

    return(
        <div>
            <div className="movies-nav-filler">

            </div>
            <div className="container">
                <div className="text-light results-grid">
                <h1 className="category-heading">
                Most Popular Movies
                </h1>
                <ResultGridCMP 
                    movies={props.movies}
                    results={props.popular} 
                    user={props.user}
                />
                </div>
            </div>
            
        </div>
    );
}

export default PopularMoviesCMP;