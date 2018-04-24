import {MOVE_ELEMENT, ADD_ELEMENT, REMOVE_ELEMENT} from "../constants/action-types";

export function elements(state = {}, action) {
    switch (action.type) {
        case MOVE_ELEMENT:
            return state.map((item) => {
                if (item.id === action.payload.id) {
                    item = action.payload
                }
                return item
            })
        case ADD_ELEMENT:
            return [...state, action.payload]

        case REMOVE_ELEMENT:
            return state.reduce((carry, item) => {
                if (item.id !== action.payload) {
                    carry.push(item)
                }
                return carry
            }, [])
        default:
            return state;
    }
}