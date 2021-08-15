import {useState} from "react";

function ImageDisplay(props){
    const [loaded,setLoaded]=useState(false);
    const [error,setError]=useState(false);

    if(error){
        return(
            <div className="text-danger">
                Image Not Found
            </div>
        );
    }
    else{
        return(
            <div >
            {!loaded && 
                <div className="spinner-border text-primary mx-auto d-block mt-4" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            }
            <img src={props.src} alt={props.alt} className="image" onLoad={()=>setLoaded(true)} onError={()=>setError(true)} style={{display:loaded?"block":"none"}}/> 
            </div>
        );
    }
}

export default ImageDisplay;