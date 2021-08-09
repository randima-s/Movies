import {Link} from "react-router-dom";
import {signOut} from "../firebase/firebaseAuth";

function NavBarCMP(props){
    return(
        <div className="movies-nav-bar w-100">
            <nav className="navbar navbar-expand-lg  ">
                <div >
                    <Link className="navbar-brand nav-bar-text mx-auto " to="/">Movies Directory</Link>
                    {props.user.user&&<span className="text-light ms-2">{props.user.user.displayName}</span>}
                    {props.user.isLoggedIn?(
                        <div>
                        <Link to="/mymovies" className="navbar-link me-1 text-purple" >My Movies</Link>
                        <span className="text-primary" onClick={signOut} style={{cursor:"pointer"}}>Log Out</span>
                        </div>
                    ):(
                        <div>
                        <span className="text-primary" onClick={props.toggleModal} style={{cursor:"pointer"}}>Log In</span>
                        </div>
                    )}     
                </div>
            </nav>
            
        </div> 
    );
}

export default NavBarCMP;
