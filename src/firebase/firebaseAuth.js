import {auth} from "./firebase";
import { updateUser,fetchMovies,loadMovies } from "../redux/ActionCreators";
import {store} from "../redux/ConfigureStore";

export const  addUser=(email,password)=>{
    return new Promise((resolve,reject)=>{
        auth.createUserWithEmailAndPassword(email,password)
        .then((userCredentials)=>{
            resolve("success");
        })
        .catch((error)=>{
            reject(error.code+": "+error.message);
        });
    });
}

export const  updateUserName=(name)=>{
    return new Promise((resolve,reject)=>{
        const user =auth.currentUser;
        user.updateProfile({
            displayName:name
        })
        .then(()=>{
            resolve("success");
        })
        .catch((error)=>{
            reject(error.code+": "+error.message);
        });
    });
}

export const signIn=(email,password)=>{
    return new Promise((resolve,reject)=>{
        auth.signInWithEmailAndPassword(email,password)
        .then((userCredentials)=>{
            resolve(userCredentials);
        })
        .catch((error)=>{
            reject(error.code+": "+error.message);
        });
    });
}

export const signOut=()=>{
    return new Promise((resolve,reject)=>{
        auth.signOut()
        .then(()=>{
            resolve("Success");
        })
        .catch((error)=>{
            reject(error.code+": "+error.message);
        });
    });
};

auth.onAuthStateChanged((user)=>{
    if(user){
        store.dispatch(updateUser({
            isLoggedIn:true,
            user:user,
            error:null
        }));
        store.dispatch(fetchMovies(user.uid));
    }
    else{
        store.dispatch(updateUser({
            isLoggedIn:false,
            user:null,
            error:null
        }));
        store.dispatch(loadMovies([]));
    }
});