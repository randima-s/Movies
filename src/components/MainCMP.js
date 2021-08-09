import {Component} from "react";
import {Switch,Route,Redirect, withRouter} from "react-router-dom";
import { connect } from "react-redux";
import NavBarCMP from "./NavBarCMP";
import HomePageCMP from "./HomePageCMP";
import ResultsCMP from "./ResultsCMP";
import MyMoviesCMP from "./MyMoviesCMP";
import LoginModal from "./LoginModal";
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
    constructor(props){
        super(props);
        this.state={
            searchName:"",
            modalShow:false
        }
    }

    componentDidMount(){
        console.log("mounted");
        document.title="Movies Directory"
    }

    setSearchName=(searchName)=>{
        this.setState({searchName:searchName});
    }

    toggleModal=()=>{
        this.setState({modalShow:!this.state.modalShow});
    }

    //enter to search
    //Color change pagination
    //Move pagination to MovieDetails

    render(){
        return(
            <div>
                <NavBarCMP user={this.props.user} toggleModal={this.toggleModal}/>
                <Switch>
                    <Route exact path="/" component={()=><HomePageCMP isLoggedIn={this.props.user.isLoggedIn} setSearchName={this.setSearchName} 
                        toggleModal={this.toggleModal}
                        user={this.props.user}
                        addMovie={this.props.addMovie}
                        removeMovie={this.props.removeMovie}
                        updateMovie={this.props.updateMovie}
                        movies={this.props.movies}/>}/>
                    {this.props.user.isLoggedIn &&<Route path ="/mymovies" component={()=><MyMoviesCMP user={this.props.user} movies={this.props.movies}
                        addMovie={this.props.addMovie}
                        removeMovie={this.props.removeMovie}
                        updateMovie={this.props.updateMovie}/>}></Route>}
                    <Route  path="/results:movieName" component={({match})=><ResultsCMP 
                        searchName={match.params.movieName} 
                        setSearchName={this.setSearchName}
                        user={this.props.user}
                        addMovie={this.props.addMovie}
                        removeMovie={this.props.removeMovie}
                        updateMovie={this.props.updateMovie}
                        movies={this.props.movies}/>}/>
                    <Redirect to="/"/>
                </Switch>
                <LoginModal show={this.state.modalShow} modalHide={this.toggleModal}/>
            </div>
        );
    };
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(MainCMP));