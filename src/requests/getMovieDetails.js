//import {sampleDetails} from "../sampleData/details"
import { API_key } from "./API_key";

export const getMovieDetails=function(movieID){
    console.log("API_REQUEST");
    console.log(movieID);
    return new Promise((resolve,reject)=>{
        fetch("https://imdb-api.com/en/API/title/"+API_key+"/"+movieID)
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
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
        setTimeout(()=> resolve(sampleDetails),400);
    }
    );*/
}