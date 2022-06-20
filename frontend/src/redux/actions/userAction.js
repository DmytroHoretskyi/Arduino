import {
    GET_USERS,
    LOGIN_USER,
} from "./types"

export const getAllUsersAction = (data) => (dispatch) => {
    dispatch({
        type: GET_USERS,
        payload: data,
    });
};
export const loginUserAction = (data) => (dispatch) => {
    dispatch({
        type: LOGIN_USER,
        payload: data,
    });
};
