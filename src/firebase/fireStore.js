import {fireStore} from "./firebase";
import {timeStamp} from "./firebase";
import {store} from "../redux/ConfigureStore";
import {removeMovie,addMovie} from "../redux/ActionCreators";

export const addData=(collection,data)=>{
    return new Promise((resolve,reject)=>{
        data.createdAt=timeStamp();
        fireStore.collection(collection).add(data)
        .then((docRef)=>{
            data.firestoreID=docRef.id;
            store.dispatch(addMovie(data));
            resolve(docRef.id);
        })
        .catch((error)=>{
            reject(error);
        });
    });
}

export const deleteData=(collection,id)=>{
    return new Promise((resolve,reject)=>{
        fireStore.collection(collection).doc(id).delete()
        .then(()=>{
            store.dispatch(removeMovie(id));
            resolve(true);
        })
        .catch((error)=>{
            reject(error);
        });
    });
}

export const updateRating=(collection,id,rating)=>{
    return new Promise((resolve,reject)=>{
        fireStore.collection(collection).doc(id).update({rating:rating})
        .then(()=>{
            resolve(true);
        })
        .catch((error)=>{
            reject(error);
        });
    });
}

export const readData=(collection)=>{
    return new Promise((resolve,reject)=>{
        fireStore.collection(collection).get()
        .then((querySnapshot)=>{
            const data=[];
            querySnapshot.forEach((query)=>{
                data.push({
                    ...query.data(),
                    firestoreID:query.id
                });
            })
            resolve(data);
            //resolve(docRef.id);
        })
        .catch((error)=>{
            reject(error);
        });
    });
}