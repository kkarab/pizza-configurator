import {CHOOSE_DELIVERY} from '../actions/types.js';

export default function (state = [], action = {}) {
    switch (action.type) {
        case CHOOSE_DELIVERY:
            return action.payload.value
        default:
            return state
    }
}