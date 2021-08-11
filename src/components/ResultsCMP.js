import {useHistory} from "react-router-dom";
import SearchCMP from "./SearchCMP";
import ResultGridCMP from "./ResultGridCMP";

function ResultsCMP(props){

    const history=useHistory(null);

    const handleSearch=(movieName)=>{
        props.handleSearch(movieName);
        history.push("/results");
        //history.push("/results"+movieName);
    }

    //should be moved to backend
    /*((searchResults)=>{
        if(props.user.isLoggedIn && !props.movies.isLoading && !props.movies.error && !props.results.isLoading && props.results.results.length>0){


        }
    })(props.results.results);

    const injectUserCollectionData=(searchResults)=>{
        if(props.user.isLoggedIn && !props.movies.isLoading && !props.movies.error){
            console.log("modifying");
            const modifiedResults=searchResults.map((movie)=>{
                return props.movies.movies.find((userMovie)=>userMovie.id===movie.id)||movie;
            });
            console.log(modifiedResults);
            return modifiedResults;
        }
        else{
            return searchResults;
        }
    }*/

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