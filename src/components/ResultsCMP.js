import SearchCMP from "./SearchCMP";
import ResultGridCMP from "./ResultGridCMP";

function ResultsCMP(props){

    const handleSearch=(movieName)=>{
        props.handleSearch(movieName);
    }

    return(
        <div>
            <div className="movies-nav-filler">

            </div>
            <div className="container">
                <h2 className="category-heading text-center">Search Movies</h2>
                <div className="w-50 mx-auto">
                <SearchCMP handleSearch={handleSearch}/>
                </div>
                <div className="text-light results-grid">
                <ResultGridCMP 
                    movies={props.movies}    
                    isLoading={props.results.isLoading} 
                    error={props.results.error} 
                    results={props.results.results} 
                    user={props.user}
                    addMovie={props.addMovie}
                    removeMovie={props.removeMovie}
                    updateMovie={props.updateMovie}
                />
                </div>
            </div>
        </div>
    );
}

export default ResultsCMP;