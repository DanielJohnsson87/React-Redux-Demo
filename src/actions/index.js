import { MOVE_BALL, MOVE_ELEMENT, ADD_ELEMENT, REMOVE_ELEMENT } from "../constants/action-types";

export const moveBall = (pos) => {
    return (dispatch) => {
        dispatch({ type: MOVE_BALL, payload: pos })
    }
}


export const moveElement = (payload) => {
    console.log('!', payload)
    return (dispatch) => {
        dispatch({ type: MOVE_ELEMENT, payload: payload })
    }
}


export const addElement = (payload) => {
    console.log('add', payload)
    return (dispatch) => {
        dispatch({ type: ADD_ELEMENT, payload: payload })
    }
}
export const removeElement = (payload) => {
    console.log('remove', payload)
    return (dispatch) => {
        dispatch({ type: REMOVE_ELEMENT, payload: payload })
    }
}