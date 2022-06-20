import axios from "./http-common"
import {getAllUsersAction, loginUserAction} from "../actions/userAction";

const getUsers = async (dispatch) => {
    const response = await axios.get("/users")
    dispatch(getAllUsersAction(response.data))
}
const loginUser = async (dispatch, {name}) => {
    const response = await axios.post("/login", {name})
    dispatch(loginUserAction(response.data))
}

const gameApiService = {
    getUsers,
    loginUser
}
export default gameApiService;
