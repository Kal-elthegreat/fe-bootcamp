import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { useMemo, useEffect } from "react";

import {refreshCars,addCar,saveCar,deleteCar,createSortAction,createResetAction,createEditAction} from '../actions/carActions';

export const useCarStoreRedux = () => { 
    const carSort = useSelector(state => state.carSort);
    const editingId = useSelector(state => state.editingId);
    const tableData = useSelector(state => state.tableData);

    const sortedCars = sort(tableData,carSort)
    const dispatch = useDispatch();

    const actions = useMemo(() => bindActionCreators({
        refreshCars,
        addCar,
        createResetAction,
        saveCar,
        deleteCar,
        edit: createEditAction,
        sortCars: createSortAction,
    }, dispatch), [dispatch])
    
    useEffect(() => {
        actions.refreshCars();
    },[actions])

    return{...actions,carSort,editingId,tableData,sortedCars}

}


function sort(cars, carSort) {

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
    