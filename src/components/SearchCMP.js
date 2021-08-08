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
            <div className="row input-group mb-2 justify-content-center">
                <div className="col-md-9 mb-2">
                <input type="text" className={error?"form-control  border-2 border-danger":"form-control "} placeholder="Movie Name" ref={movieName}/>
                </div>
                <div className="col-auto mb-2">
                <button type="submit" className="btn btn-primary " onClick={handleSearch}>Search</button>
                </div>
            </div>
        </div>
    );
}

export default SearchCMP;