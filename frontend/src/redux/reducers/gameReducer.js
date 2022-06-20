import {
    GET_USERS,
    LOGIN_USER,
} from "../actions/types";

const initialState = {
    users: [],
    current: []
};
function gameReducer(state = initialState, {type, payload} = {}) {
    if (type === GET_USERS){
        return {users: payload}
    }
    if (type === LOGIN_USER){
        console.log(payload)
        return {current: payload}
    }
    return state;
}
export default gameReducer;
