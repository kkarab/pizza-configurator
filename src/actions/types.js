export const CHOOSE_BASE = "CHOOSE_BASE";
export const CHOOSE_SAUCE = "CHOOSE_SAUCE";
export const ADD_TOPPING = "ADD_TOPPING";
export const REMOVE_TOPPING = "REMOVE_TOPPING";
export const CHOOSE_DRONE = "CHOOSE_DRONE";
export const CHOOSE_NORMAL = "CHOOSE_NORMAL";

export const chooseBase = (base) => {
    return {
        type: CHOOSE_BASE,
        payload: base
    }
}

export const chooseSauce = (sauce) => {
    return {
        type: CHOOSE_SAUCE,
        payload: sauce
    }
}

export const addTopping = (topping) => {
    return {
        type: ADD_TOPPING,
        payload: topping
    }
}

export const removeTopping = (topping) => {
    return {
        type: REMOVE_TOPPING,
        payload: topping
    }
}

export const chooseDrone = (drone) => {
    return {
        type: CHOOSE_DRONE,
        payload: drone
    }
}

export const chooseNormal = (normal) => {
    return {
        type:CHOOSE_NORMAL,
        payload: normal
    }
}
