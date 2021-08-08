import {Link} from "react-router-dom";
import {signOut} from "../firebase/firebaseAuth";
import {useState} from "react";
import LoginModal from "./LoginModal";

function NavBarCMP(props){

    const [modalShow,setModalShow]=useState(false);

    const toggleModal=()=>{
        console.log(modalShow);
        setModalShow(!modalShow);
    }

    return(
        <div className="movies-nav-bar w-100">
            <nav className="navbar navbar-expand-lg  ">
                <div >
                    <Link className="navbar-brand text-light mx-auto fs-2" to="/">Movies Directory</Link>
                    {props.user.user&&<span className="text-light ms-2">{props.user.user.displayName}</span>}
                    {props.user.isLoggedIn?(
                        <div>
                        <Link to="/mymovies" className="navbar-link me-1 text-warning" >My Movies</Link>
                        <span className="text-primary" onClick={signOut} style={{cursor:"pointer"}}>Log Out</span>
                        </div>
                    ):(
                        <div>
                        <span className="text-primary" onClick={toggleModal} style={{cursor:"pointer"}}>Log In</span>
                        </div>
                    )}
                    
                    
                </div>
            </nav>
            <LoginModal show={modalShow} modalHide={toggleModal}/>
        </div> 
    );
}

export default NavBarCMP;


    /*
            <div className="movies-nav-bar">
            <nav className="navbar navbar-expand-lg  ">
                <div className="container-fluid">
                    <a className="navbar-brand text-light mx-auto fs-2" href="#">Movies Directory</a>
                    <Link to="/mymovies" className="navbar-link" >My Movies</Link>
                </div>
            </nav>
        </div> */