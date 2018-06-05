import {ADD_TOPPING, REMOVE_TOPPING} from '../actions/types.js';

export default function (state = [], action = {}) {
    switch (action.type) {
        case ADD_TOPPING:
            return state.concat(action.payload)
        case REMOVE_TOPPING:
            return state.filter(topping => topping !== action.payload)
        default:
            return state
    }
}