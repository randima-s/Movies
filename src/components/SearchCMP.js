import {useState} from "react";

function SearchCMP(props){
    const [error,setError]=useState(false);
    const [searchText,setSearchText]=useState("");

    const handleSearch=(e)=>{
        if(searchText){
            setError(false);
            props.handleSearch(searchText);
        }
        else{
            setError(true);
        }
        e.preventDefault();
    }

    const handleChange=(e)=>{
        setSearchText(e.target.value);
    }

    return(
        <div>
            <form className="row  mb-2 justify-content-center " onSubmit={handleSearch}>
                <div className="col-md-9 mb-2 ">
                <input type="text" className={error?"form-control  border-2 border-danger":"form-control "} placeholder="Movie Name"  onChange={handleChange} value={searchText}/>
                </div>
                <div className="col-auto mb-2">
                <button type="submit" className="btn btn-primary " >Search</button>
                </div>
            </form>
        </div>
    );
}

export default SearchCMP;