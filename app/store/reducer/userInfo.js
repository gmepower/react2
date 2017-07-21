import * as Types from '../action-types/userInfo'

let initstate={}
export function userState(state=initstate,action) {
    switch (action.type){
        case Types.USER_LIST:
            return data;
        default:
            return state
    }
}