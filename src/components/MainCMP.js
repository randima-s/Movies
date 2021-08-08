import {Component} from "react";
import {Switch,Route,Redirect, withRouter} from "react-router-dom";
import { connect } from "react-redux";
import NavBarCMP from "./NavBarCMP";
import HomePageCMP from "./HomePageCMP";
import ResultsCMP from "./ResultsCMP";
import MyMoviesCMP from "./MyMoviesCMP";
import { addMovie,removeMovie,updateMovie } from "../redux/ActionCreators";

const mapStateToProps = state => {
    return {
        user:state.user,
        movies:state.movies
    }
}

const mapDispatchToProps=dispatch=>({
    addMovie:(movie)=>dispatch(addMovie(movie)),
    removeMovie:(firestoreID)=>dispatch(removeMovie(firestoreID)),
    updateMovie:(firestoreID,newRating)=>dispatch(updateMovie(firestoreID,newRating))
})
class MainCMP extends Component{

    componentDidMount(){
        console.log("mounted");
        //getMost Popular
        //getComingSoon
    }

    //logInState();

    render(){
        return(
            <div>
                <NavBarCMP user={this.props.user}/>
                <Switch>
                    <Route exact path="/" component={()=><HomePageCMP isLoggedIn={this.props.user.isLoggedIn}/>}/>
                    <Route path ="/mymovies" component={()=><MyMoviesCMP user={this.props.user} movies={this.props.movies}
                    addMovie={this.props.addMovie}
                    removeMovie={this.props.removeMovie}
                    updateMovie={this.props.updateMovie}/>}></Route>
                    <Route  path="/results:searchName" component={({match})=><ResultsCMP 
                    searchName={match.params.searchName} 
                    user={this.props.user}
                    addMovie={this.props.addMovie}
                    removeMovie={this.props.removeMovie}
                    updateMovie={this.props.updateMovie}
                    movies={this.props.movies}/>}/>
                </Switch>
            </div>
        );
    };
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(MainCMP));