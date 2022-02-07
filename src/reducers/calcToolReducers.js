import { combineReducers } from "redux";
import { ADD_ACTION, SUBTRACT_ACTION, MULTIPLY_ACTION,DIVIDE_ACTION, CLEAR_HIST_ACTION,DELETE_HIST_ACTION, ERROR_ACTION} from "../actions/calcToolActions";

const resultReducer = (result = 0, action) => {

    //reducers are pure functions
    //1. only data used in fn comes from params
    //2. params cannot be mutated
    //3. fn cannot cause side effects
    //4. only output of fn is return valuez
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
    if (action.type === CLEAR_HIST_ACTION) {
        return result = 0;
    }
    return result
};
const historyReducer = (history = [], action) => {

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

    if (action.type === CLEAR_HIST_ACTION) {
        return []
    }

    if (action.type === DELETE_HIST_ACTION) {
        return history.filter(entry => entry.id !== action.payload.value)
    }
    return history
};

const errorReducer = (error = '', action) => {
    if (action.type === ERROR_ACTION) {
        return action.payload.error;
    } else {
     error = ''
    }
    return error;
}

export const calcToolReducer = combineReducers({
    result: resultReducer,
    history: historyReducer,
    error: errorReducer,
})