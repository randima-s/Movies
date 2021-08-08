import {Component} from "react";
import {Switch,Route,Redirect, useParams} from "react-router-dom";
import NavBarCMP from "./NavBarCMP";
import HomePageCMP from "./HomePageCMP";
import ResultsCMP from "./ResultsCMP";
import MyMoviesCMP from "./MyMoviesCMP";

class MainCMP extends Component{

    componentDidMount(){
        console.log("mounted");
        //getMost Popular
        //getComingSoon
    }

    render(){
        return(
            <div>
                <NavBarCMP/>
                <Switch>
                    <Route exact path="/" component={()=><HomePageCMP/>}/>
                    <Route path ="/mymovies" component={()=><MyMoviesCMP/>}></Route>
                    <Route  path="/results:movieName" component={({match})=><ResultsCMP movieName={match.params.movieName}/>}/>
                </Switch>
            </div>
        );
    };
}

export default MainCMP;