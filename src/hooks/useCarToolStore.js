import { useState } from 'react';
import { useList } from './useList';

//fn not dependent on state, so placed outside of the react fn to limit re-renders
const sortCars = (cars, carSort) => {

    return [...cars].sort((a, b) => {

        if (a[carSort.column] < b[carSort.column]) {
            return carSort.direction === 'asc' ? -1 : 1;
        } else if (a[carSort.column] > b[carSort.column]) {
            return carSort.direction === 'asc' ? 1 : -1;
        } else {
            return 0;
        }

    });

};


export const useCarToolStore = ({carSort,editingId,cars}) => {

    const [carSortState, setCarSortState] = useState({ ...carSort });
    const [editingState, setEditingState] = useState(editingId);
    const [carsList, add, save, remove] = useList([...cars]);
    
    const doSortCars = (column) => {

        if (column !== carSortState.column) {
            setCarSortState({
                ...carSortState,
                column,
                direction: 'asc',
            });
        } else {
            if (carSortState.direction === 'asc') {
                setCarSortState({
                    ...carSortState,
                    direction: 'desc',
                });
            } else {
                setCarSortState({
                    ...carSortState,
                    direction: 'asc',
                });
            }
        }
    }

    const updateEditingId = id => {
        setEditingState(id)
    }

    const addCar = car => {
        add(car);
        updateEditingId(-1);
    };

    const saveCar = car => {
        save(car);
        updateEditingId(-1);
    };

    const deleteCar = carId => {
        remove(carId);
        updateEditingId(-1);
    };

    const editRow = carId => {
        updateEditingId(carId);
    };

    const resetRow = () => {
        updateEditingId('')
    }
    return {carSortState,editingState,carsList: sortCars(carsList,carSortState), doSortCars, updateEditingId, addCar,saveCar,deleteCar,editRow,resetRow}

}