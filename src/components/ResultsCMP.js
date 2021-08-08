import SearchCMP from "./SearchCMP";

function resultsCMP(props){
    return(
        <div>
            <div className="movies-nav-filler">

            </div>
            <div className="container">
                <h2 className="text-light ms-2">Search Movies</h2>
                <div className="pb-2">
                <SearchCMP/>
                </div>
                <div>
                    
                </div>
            </div>
            
        </div>
    );
}

export default resultsCMP;