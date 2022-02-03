import "./Layout.css"
import { useState } from "react";
import { useList } from "../hooks/useList";
import { ToolHeader } from "./ToolHeader";
import { CarTable } from "./CarTable";
import { CarForm } from "./CarForm";

//fn not dependent on state, so placed outside of the react fn to limit re-renders
const sortCars = (cars, carsSort) => {

    return [...cars].sort((a, b) => {

        if (a[carsSort.column] < b[carsSort.column]) {
            return carsSort.direction === 'asc' ? -1 : 1;
        } else if (a[carsSort.column] > b[carsSort.column]) {
            return carsSort.direction === 'asc' ? 1 : -1;
        } else {
            return 0;
        }

    });

};

export const CarTool = (props) => {

    const [cars, add, save, remove] = useList([...props.cars]);
    const [carsSort, setCarsSort] = useState({
        column: 'id',
        direction: 'asc'
    });
    const [editingId, setEditingId] = useState('')

    const doSortCars = (column) => {

        if (column !== carsSort.column) {
            setCarsSort({
                ...carsSort,
                column,
                direction: 'asc',
            });
        } else {
            if (carsSort.direction === 'asc') {
                setCarsSort({
                    ...carsSort,
                    direction: 'desc',
                });
            } else {
                setCarsSort({
                    ...carsSort,
                    direction: 'asc',
                });
            }
        }
    }
    const addCar = car => {
        add(car);
        setEditingId(-1);
    };

    const saveCar = car => {
        save(car);
        setEditingId(-1);
    };

    const deleteCar = carId => {
        remove(carId);
        setEditingId(-1);
    };

    const editRow = carId => {
        setEditingId(carId);
    };

    const resetRow = () => {
        setEditingId('')
    }

    return (
        <>
            <ToolHeader header="Car Tool" />
            <CarTable
                cars={sortCars(cars, carsSort)}
                carsSort={carsSort}
                onSortCars={doSortCars}
                onRemoveCar={deleteCar}
                onEditRow={editRow}
                editingId={editingId}
                setEditingId={setEditingId}
                onSaveCar={saveCar}
                onResetRow={resetRow}
            />
            <CarForm onSubmit={addCar} buttonText="Add Car" />
        </>
    )
}