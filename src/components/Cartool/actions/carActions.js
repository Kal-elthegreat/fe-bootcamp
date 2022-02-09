import { createApi } from "../../../services/apiData";

const { all: _allCars, append: _appendCar, replace: _replaceCar, remove: _removeCar } = createApi('cars');

export const REFRESH_CARS_REQUEST_ACTION = "[CarTool] REFRESH_CARS_REQUEST";
export const REFRESH_CARS_DONE_ACTION = "[CarTool] REFRESH_CARS_DONE";

export const ADD_CAR_REQUEST_ACTION = "[CarTool] ADD_CAR_REQUEST";
export const SAVE_CAR_REQUEST_ACTION = "[CarTool] SAVE_CAR_REQUEST";
export const DELETE_CAR_REQUEST_ACTION = "[CarTool] DELETE_CAR_REQUEST";


export const EDIT_ACTION = "[CarTool] EDIT";
export const SORT_ACTION = "[CarTool] SORT";
export const RESET_ACTION = "[CarTool] RESET";


export const createRefreshCarsAction = () => ({
    type: REFRESH_CARS_REQUEST_ACTION,
})

export const createRefreshCarsDoneAction = (cars) => ({
    type: REFRESH_CARS_DONE_ACTION, cars
})


// should go fetch new data
export const refreshCars = () => {
    return async dispatch => {
        dispatch(createRefreshCarsAction())
        const cars = await _allCars(); // makes the actual request to get all cars
        dispatch(createRefreshCarsDoneAction(cars)) 
    }
}

export const createAddCarRequestAction = (car) => ({
    type: ADD_CAR_REQUEST_ACTION, car,
})

export const addCar = car => {
    return async dispatch => {
        dispatch(createAddCarRequestAction(car))
        await _appendCar(car) // api call to append new car obj
        dispatch(refreshCars())
    }
}
export const createSaveCarRequestAction = (car) => ({
    type: SAVE_CAR_REQUEST_ACTION, car
})


export const saveCar = car => {
    return async dispatch => {
        dispatch(createAddCarRequestAction(car))
        await _replaceCar(car) // api call to save updated car
        dispatch(refreshCars())
    }
}

export const createDeleteCarRequestAction = (carId) => ({
    type: DELETE_CAR_REQUEST_ACTION, carId
})

export const deleteCar = carId => {
    return async dispatch => {
        dispatch(createAddCarRequestAction(carId))
        await _removeCar(carId) // api call to delete car
        dispatch(refreshCars())
    }
}


export const createEditAction = (id) => ({type:EDIT_ACTION, id})
export const createResetAction = () => ({ type: RESET_ACTION })
export const createSortAction = (value) => ({ type:SORT_ACTION, value})
