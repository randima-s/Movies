//import {sampleResult} from "../sampleData/inception"
import { API_key } from "./API_key";

export const searchMovies=function(movieName){
    console.log("API_REQUEST");
    return new Promise((resolve,reject)=>{
        console.log(movieName);
        fetch("https://imdb-api.com/en/API/Search/"+API_key+"/"+movieName)
        .then((response)=>{
            console.log(response)
            return response.json();
        })
        .then((data)=>{
            console.log(data)
            if(data.errorMessage){
                reject(data.errorMessage);
            }
            else{
                resolve(data);
            }
        })
        .catch((error)=>{
            reject(error);
        });
    });
    /*return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(sampleResult),400);
    });*/
}