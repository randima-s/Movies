export const injectUserCollectionData=(searchResults,userMovies)=>{
    console.log("modifying");
    const modifiedResults=searchResults.map((movie)=>{
        return userMovies.find((userMovie)=>userMovie.id===movie.id)||movie;
    });
    console.log(modifiedResults);
    return modifiedResults;
}