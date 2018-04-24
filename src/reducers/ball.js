import { MOVE_BALL } from "../constants/action-types";

export function ball(state = {}, action) {
    switch (action.type) {
        case MOVE_BALL:
            return action.payload
        default:
            return state;
    }
}