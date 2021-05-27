import { ActionTypes } from "../Constants/action-types"

export const setLoggedInUser = (user) => {
    return {
        type: ActionTypes.SET_LOGGEDIN_USER,
        payload: user
    }
}

export const setBearerToken = (token) => {
    return {
        type: ActionTypes.SET_TOKEN,
        payload: token
    }
}