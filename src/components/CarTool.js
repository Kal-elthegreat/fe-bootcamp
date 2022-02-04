import "./Layout.css"
import { ToolHeader } from "./ToolHeader";
import { CarTable } from "./CarTable";
import { CarForm } from "./CarForm";
import { useCarTool } from "../hooks/useCarTool";


export const CarTool = () => {

    const { carSortState, editingState,carsList, doSortCars, updateEditingId, addCar, saveCar, deleteCar, editRow, resetRow } = useCarTool();

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