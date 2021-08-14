import {popular} from "../sampleData/popular"
import { API_key } from "./API_key";

export const getMostPopular=function(){
    console.log("API_REQUEST");
    /*return new Promise((resolve,reject)=>{
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
    });*/
    return new Promise((resolve,reject)=>{
        setTimeout(()=> resolve(popular),400);
    }
    );
}