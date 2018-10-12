const initialState = {
    user: null,
    postBool: false,
}

const LOG_IN = "LOG_IN";
const CHANGE_BOOL = "CHANGE_BOOL"

export default function(state = initialState, action){
    switch(action.type){
        case LOG_IN:
        return {...state, user: action.payload}
        case CHANGE_BOOL: 
        return {...state, postBool: action.payload}
        default: 
            return state;
    }
}

export function log_in(user){
    return {
        type: LOG_IN,
        payload: user
    }

}

export function changeBool(bool){
    console.log("2 - hit ChangeBool reducer")
    return {
        type: CHANGE_BOOL,
        payload: bool
    }
 
}

