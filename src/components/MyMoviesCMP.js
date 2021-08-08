
function MyMoviesCMP(props){
    return(
        <div className="text-light">
        <div className="movies-nav-filler">

        </div>
        <div className="container">
            <div>
                <h1 className="text-center">{props.user.user.displayName}</h1>
            </div>
            <div>
                Recommendations
            </div>
            <div>
                Liked Movies
            </div>
        </div>
        </div>
    );
}

export default MyMoviesCMP;