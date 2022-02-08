import { combineReducers } from "redux";
import { SORT_ACTION, CREATE_ACTION, RESET_ACTION, UPDATE_ACTION, DELETE_ACTION, EDIT_ACTION} from "../actions/carActions";

const initialData = [
        { id: 12, make: 'Tesla', model: 'Y', year: 2022, color: 'Grey', price: 62000},
        { id: 204, make: 'Ford', model: 'Mustang', year: 2012, color: 'Red', price: 12000},
    ]   

const crudReducer = (tableData = initialData || [], action) => {
    //add an item
    if (action.type === CREATE_ACTION) {
        return [...tableData,
            {
                ...action.value, 
                 id: Math.max(...tableData.map(c => c.id), 0) + 1,
            }
        ]
    }

    if (action.type === RESET_ACTION) {
        return tableData;
    }

    // update existing item
    if (action.type === UPDATE_ACTION) {
        const newState = [...tableData];
        const itemIndex = newState.findIndex(c => c.id === action.value.id);
        newState[itemIndex] = action.value;
        return tableData = newState;
    }

    // remove an item
    if (action.type === DELETE_ACTION) {

        return tableData.filter(c => c.id !== action.value);
    }

    return tableData;
}

const editingReducer = (editingId = -1, action) => {
    if (action.type === EDIT_ACTION) {
        return action.id
    }
    if ([CREATE_ACTION, UPDATE_ACTION, DELETE_ACTION, RESET_ACTION].includes(action.type)) {
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