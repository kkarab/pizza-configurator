import {CHOOSE_DRONE, CHOOSE_NORMAL} from '../actions/types.js';

export default function (state = [], action = {}) {
    switch (action.type) {
        case CHOOSE_DRONE:
            return action.payload.value
        case CHOOSE_NORMAL:
            return action.payload.value
        default:
            return state
    }
}