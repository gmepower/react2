import * as Types from '../action-types/userInfo'
export function user(data) {
    return{
        type:Types.USER_LIST,
        data
    }
}