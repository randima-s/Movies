import {Component} from "react";
import {Switch,Route,Redirect, withRouter} from "react-router-dom";
import { connect } from "react-redux";
import NavBarCMP from "./NavBarCMP";
import HomePageCMP from "./HomePageCMP";
import ResultsCMP from "./ResultsCMP";
import MyMoviesCMP from "./MyMoviesCMP";

const mapStateToProps = state => {
    return {
        user:state.user
    }
}
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
                    <Route path ="/mymovies" component={()=><MyMoviesCMP user={this.props.user}/>}></Route>
                    <Route  path="/results:movieName" component={({match})=><ResultsCMP movieName={match.params.movieName}/>}/>
                </Switch>
            </div>
        );
    };
}

export default withRouter(connect(mapStateToProps)(MainCMP));