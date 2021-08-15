
import SearchCMP from "./SearchCMP";
import {useHistory} from "react-router-dom";
import PopularMoviesCMP from "./PopularMoviesCMP";
import { useRef } from "react";

function HomePageCMP(props){

    const history=useHistory();
    const popularMoviesRef=useRef(null);

    const handleSearch=(movieName)=>{
        props.handleSearch(movieName);
        history.push("/results");
        //history.push("/results"+movieName);
    }

    return(
        <div>
        <div className="row home-search-background align-items-center m-0" >
            <div className="row justify-content-center">
                <div className="col-10 col-lg-4 col-md-6 col-sm-8 text-light home-search-container">
                    <h4 className="text-center mx-2 mb-0">Welocome</h4>
                    <h1 className="text-center mx-2 main-heading">Movies Directory</h1>
                    <SearchCMP handleSearch={handleSearch}/>
                    <p className="text-center text-purple cursor-pointer mb-0" onClick={()=>popularMoviesRef.current.scrollIntoView({behaviour:'smooth'})}>Browse Movies</p>
                    {!props.isLoggedIn && <p className="m-0 text-center"><span className="text-primary cursor-pointer" onClick={props.toggleModal}>Log in</span> for recommendations</p>}
                </div>
            </div>
        </div>
        <div ref={popularMoviesRef}>
            <PopularMoviesCMP
            popular={props.popular} 
            user={props.user}
            movies={props.movies}/>
        </div>
        </div>
    );
}

export default HomePageCMP;