import {sampleDetails} from "../sampleData/details"
const API_key="k_4quk8cra";

export const getMovieDetails=function(movieID){
    /*return new Promise((resolve,reject)=>{
        fetch("https://imdb-api.com/en/API/title/"+API_key+"/"+movieID)
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
        resolve(sampleDetails);
    }
    );

}