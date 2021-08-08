import {Link} from "react-router-dom";
import {Navbar,Nav} from "react-bootstrap";
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
                    <a className="navbar-brand text-light mx-auto fs-2" href="#">Movies Directory</a>
                    <Link to="/mymovies" className="navbar-link ms-4" >My Movies</Link>
                    <span className="text-primary" onClick={toggleModal}>Log In</span>
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