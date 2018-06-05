import {CHOOSE_SAUCE} from '../actions/types.js';

export default function (state = '', action = {}) {
    switch (action.type) {
        case CHOOSE_SAUCE:
            return action.payload.value
        default:
            return state
    }
}