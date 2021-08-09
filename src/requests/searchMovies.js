import {sampleResult} from "../sampleData/inception"
import { API_key } from "./API_key";
import {store} from "../redux/ConfigureStore";
import {injectUserCollectionData} from "../processing/injectUserCollectionData";

export const searchMovies=function(movieName){
    console.log("inside firebase");
    console.log(store.getState());
    const isUserMoviesLoaded=!store.getState().movies.isLoading && !store.getState().movies.error;
    /*return new Promise((resolve,reject)=>{
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
    });*/
    return new Promise((resolve,reject)=>{
        resolve(sampleResult);
    });

}