import {sampleResult} from "../sampleData/inception"
const API_key="k_4quk8cra";

export const searchMovies=function(movieName){
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
    }
    );

}