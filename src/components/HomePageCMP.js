import SearchCMP from "./SearchCMP";
import {useHistory} from "react-router-dom";

function HomePageCMP(props){

    const history=useHistory();

    const handleSearch=(movieName)=>{
        console.log(movieName);
        history.push("/results"+movieName);
    }


    return(
        <div>
        <div className="row home-search-background align-items-center " >
            <div className="row justify-content-center">
                <div className="col-10 col-lg-4 col-md-6 col-sm-8 text-light home-search-container">
                    <h4 className="text-center mx-2 mb-0">Welocome</h4>
                    <h1 className="text-center mx-2">Movies Directory</h1>
                    <SearchCMP handleSearch={handleSearch}/>
                    <p className="m-0 text-center"><span className="text-primary" style={{cursor:"pointer"}}>Sign in</span> for recommendations</p>
                </div>
            </div>
        </div>
        <div>
            Recent
        </div>
        </div>
    );
}

export default HomePageCMP;