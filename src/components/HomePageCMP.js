import SearchCMP from "./SearchCMP";
import {useHistory} from "react-router-dom";

function HomePageCMP(props){

    const history=useHistory();

    const handleSearch=(movieName)=>{
        console.log(movieName);
        props.setSearchName(movieName);
        history.push("/results");
        //history.push("/results"+movieName);
    }


    return(
        <div>
        <div className="row home-search-background align-items-center " >
            <div className="row justify-content-center">
                <div className="col-10 col-lg-4 col-md-6 col-sm-8 text-light home-search-container">
                    <h4 className="text-center mx-2 mb-0">Welocome</h4>
                    <h1 className="text-center mx-2">Movies Directory</h1>
                    <SearchCMP handleSearch={handleSearch}/>
                    {!props.isLoggedIn && <p className="m-0 text-center"><span className="text-primary" >Log in</span> for recommendations</p>}
                </div>
            </div>
        </div>
        </div>
    );
}

export default HomePageCMP;