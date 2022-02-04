import { combineReducers } from "redux";
import { ADD_ACTION, SUBTRACT_ACTION, MULTIPLY_ACTION,DIVIDE_ACTION } from "../actions/calcToolActions";

const resultReducer = (result = 0, action) => {

    //reducers are pure functions
    //1. only data used in fn comes from params
    //2. params cannot be mutated
    //3. fn cannot cause side effects
    //4. only output of fn is return value

    if (action.type === ADD_ACTION) {
        return result + action.payload.value;
    }
    if (action.type === SUBTRACT_ACTION) {
        return result - action.payload.value;
    }
    if (action.type === MULTIPLY_ACTION) {
        return result * action.payload.value;
    }
    if (action.type === DIVIDE_ACTION) {
        return result / action.payload.value;
    }
    return result
};
const historyReducer = (history = [], action) => {

    //reducers are pure functions
    //1. only data used in fn comes from params
    //2. params cannot be mutated
    //3. fn cannot cause side effects
    //4. only output of fn is return value

    if ([ADD_ACTION, SUBTRACT_ACTION, MULTIPLY_ACTION, DIVIDE_ACTION].includes(action.type)) {
        return [
            ...history,
            {
                operation: action.type,
                value: action.payload.value,
                id:Math.max(...history.map(entry => entry.id), 0) + 1
            }
        ]
    }
    return history
};

export const calcToolReducer = combineReducers({
    result: resultReducer,
    history: historyReducer,
})