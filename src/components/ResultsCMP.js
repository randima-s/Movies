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
                    results={props.results} 
                    user={props.user}
                />
                </div>
            </div>
        </div>
    );
}

export default ResultsCMP;