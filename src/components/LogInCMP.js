
import {useState} from "react";
import {signIn} from "../firebase/firebaseAuth";

function LogInCMP(props){

    const [userEmail,setUserEmail]=useState("abc@def.com");
    const [userEmailError,setUserEmailError]=useState(null);
    const [passWord,setPassWord]=useState("");
    const [passWordError,setPassWordError]=useState(null);
    const [loginError,setLoginError]=useState(null);
    const regexEmailPattern=/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

    const handleChange=(event)=>{
        const target=event.target;
        switch(target.id){
            case "userEmail":
                setUserEmail(target.value);
                setUserEmailError(regexEmailPattern.test(target.value) ?null:"Invalid Email");
                break;
            case "passWord":
                setPassWord(target.value);
                setPassWordError(target.value.length<8?"Password must be at least 8 charaters long":null);
                break;
            default:
                break;
        }
    }

    const handleSubmit=(event)=>{
        if(!userEmailError && !passWordError ){
            signIn(userEmail,passWord)
            .catch((error)=>{
                setLoginError(error);
            });
            props.modalHide();
        }
        event.preventDefault();
    }

    return(
        <div>
            <div  >
                <div className="px-4 my-4">
                    <h2 className="text-center mb-4 text-purple">Log In</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-2">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" id="userEmail" placeholder="abc@def.com" value={userEmail} onChange={handleChange}/>
                            {userEmailError&& <p className="text-danger">{userEmailError}</p>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" id="passWord" placeholder="" value={passWord} onChange={handleChange}/>
                            {passWordError&& <p className="text-danger">{passWordError}</p>}
                        </div>
                        {loginError && <div className="mb-2 text-danger">{loginError}</div>}
                        <div >
                            <button type="submit" className="btn btn-primary w-100 " disabled={userEmailError || passWordError}>Sign In</button>
                        </div>
                    </form>
                    <hr/>
                    <div>
                        New User <span className="text-primary" style={{cursor:"pointer"}} onClick={()=>props.changeState()}>Create Account</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LogInCMP;