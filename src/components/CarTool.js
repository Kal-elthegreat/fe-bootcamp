import "./Layout.css"
import { ToolHeader } from "./ToolHeader";
import { CarTable } from "./CarTable";
import { CarForm } from "./CarForm";
import { useCarToolStore } from "../hooks/useCarToolStore";


export const CarTool = (props) => {

    const { carSortState, editingState,carsList, doSortCars, updateEditingId, addCar, saveCar, deleteCar, editRow, resetRow } = useCarToolStore({ carSort: { column: 'id', direction: 'asc' }, editingId: '', cars: [...props.cars]});

    return (
        <>
            <ToolHeader header="Car Tool" />
            <CarTable
                cars={carsList}
                carsSort={carSortState}
                onSortCars={doSortCars}
                onRemoveCar={deleteCar}
                onEditRow={editRow}
                editingId={editingState}
                setEditingId={updateEditingId}
                onSaveCar={saveCar}
                onResetRow={resetRow}
            />
            <CarForm onSubmit={addCar} buttonText="Add Car" />
        </>
    )
}