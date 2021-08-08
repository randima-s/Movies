import {useRef,useState} from "react";

function SearchCMP(props){
    const [error,setError]=useState(false);

    const movieName=useRef(null);
    const handleSearch=()=>{
        if(movieName.current.value){
            setError(false);
            props.handleSearch(movieName.current.value);
        }
        else{
            setError(true);
        }
    }

    return(
        <div>
            <div className="input-group mb-2">
            <input type="text" className={error?"form-control m-2 border-2 border-danger":"form-control m-2"} placeholder="Movie Name" ref={movieName}/>
            <button type="submit" className="btn btn-primary m-2" onClick={handleSearch}>Search</button>
            </div>
        </div>
    );
}

export default SearchCMP;