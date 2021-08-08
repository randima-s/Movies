import {Component} from "react";
import {Switch,Route,Redirect} from "react-router-dom";
import NavBarCMP from "./NavBarCMP";
import HomePageCMP from "./HomePageCMP";
import ResultsCMP from "./ResultsCMP";


class MainCMP extends Component{

    render(){
        return(
            <div>
                <NavBarCMP/>
                <Switch>
                    <Route exact path="/" component={()=><HomePageCMP/>}/>
                    <Route exact path="/results" component={()=><ResultsCMP/>}/>
                </Switch>
            </div>
        );
    };
}

export default MainCMP;