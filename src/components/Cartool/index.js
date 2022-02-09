import "../Layout.css"
import { ToolHeader } from "../ToolHeader";
import { CarTable } from "./CarTable";
import { CarForm } from "./CarForm";
import { useCar } from './hooks/useCar'; 

export const CarTool = () => {
    const { sortCars,carSort,editingId, sortedCars,addCar,saveCar,deleteCar,edit } = useCar();
    return (
        <>
            <ToolHeader header="Car Tool" />
            <CarTable
                saveCar={saveCar}
                deleteCar={deleteCar}
                editCar={edit}
                sortCars={sortCars}
                carSort={carSort}
                editingId={editingId}
                sortedCars={sortedCars}
            />
            <CarForm
                addCar={addCar}
                buttonText="Add Car" />
        </>
    )
}