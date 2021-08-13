import {useState} from "react";

function ImageDisplay(props){
    const [loaded,setLoaded]=useState(false);

    return(
        <div className="">
            {!loaded && 
                <div className="spinner-border text-primary mx-auto d-block mt-4" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            }
            <img src={props.src} alt={props.alt} className="image" onLoad={()=>setLoaded(true)} style={{display:loaded?"block":"none"}}/> 
        </div>
    );
}

export default ImageDisplay;