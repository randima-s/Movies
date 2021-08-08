import {useRef} from "react";

function SearchCMP(props){

    const movieName=useRef(null);
    const handleSearch=()=>{
        if(movieName.current.value){
            props.handleSearch(movieName.current.value);
        }
    }

    return(
        <div>
            <div className="input-group mb-2">
            <input type="text" className="form-control m-2" placeholder="Movie Name" ref={movieName}/>
            <button type="submit" className="btn btn-primary m-2" onClick={handleSearch}>Search</button>
            </div>
            
        </div>
    );
}

export default SearchCMP;