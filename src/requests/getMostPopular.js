//import {sampleResult} from "../sampleData/inception"
import { API_key } from "./API_key";

export const searchMovies=function(movieName){
    return new Promise((resolve,reject)=>{
        fetch("https://imdb-api.com/en/API/MostPopularMovies/"+API_key)
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
        resolve(sampleResult);
    }
    );*/
}