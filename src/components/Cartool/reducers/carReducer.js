import { combineReducers } from "redux";
import { SORT_ACTION, RESET_ACTION, EDIT_ACTION, REFRESH_CARS_DONE_ACTION} from "../actions/carActions";


const crudReducer = (tableData = [], action) => {
    
    if (action.type === REFRESH_CARS_DONE_ACTION) {
        return action.cars
    }

    return tableData;
}

const editingReducer = (editingId = -1, action) => {
    if (action.type === EDIT_ACTION) {
        return action.id
    }
    if ([REFRESH_CARS_DONE_ACTION, RESET_ACTION].includes(action.type)) {
        return -1;
    }
    return editingId 
}

const sortReducer = (carSort= { column : 'id', direction : 'asc' }, action) => {
    if (action.type === SORT_ACTION) {
        if (carSort.column !== action.value) {
            return {
                ...carSort,
                column: action.value,
                direction: 'asc'
            };
        } else {
            if (carSort.direction === 'asc') {
                return {...carSort, direction: 'desc' };
            } else {
                return { ...carSort, direction: 'asc' };
            }
        }
    }
    return carSort
}


export const carReducer = combineReducers({
    tableData: crudReducer,
    editingId: editingReducer,
    carSort: sortReducer
})