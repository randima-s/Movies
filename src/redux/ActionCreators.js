import * as ActionTypes from "./ActionTypes";

export const updateUser=(user)=>{
    return({
        type:ActionTypes.UPDATE_USER,
        payload:user
    });
}