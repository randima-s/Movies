import {useState} from "react";
import {Modal} from "react-bootstrap";
import LogInCMP from "./LogInCMP";
import NewUserCMP from "./NewUserCMP";

function LoginModal(props) {
    const [state,setState]=useState("signin");
    return (
        <Modal show={props.show} onHide={props.modalHide} animation={false} scrollable={true} >
        <Modal.Body className="m-1 p-1">
        <div className="container ">
            {state==="signin"&&<LogInCMP changeState={()=>setState("newuser")} updateUser={props.updateUser} modalHide={props.modalHide}/>}
            {state==="newuser"&&<NewUserCMP changeState={()=>setState("signin")} updateUser={props.updateUser} modalHide={props.modalHide}/>}
        </div>
        </Modal.Body>
        </Modal>
    );
}

export default LoginModal;