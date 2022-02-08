import { useCar } from "./hooks/useCar";

export const CarViewRow = (props) => {
    const { car } = props;
    const { edit, deleteCar } = useCar();

    return (
    <tr>
        <td>{car.id}</td>
        <td>{car.make}</td>
        <td>{car.model}</td>
        <td>{car.year}</td>
        <td>{car.color}</td>
        <td>{car.price}</td>
        <td><button onClick={()=> edit(car.id)}>Edit</button></td>
        <td><button onClick={() =>deleteCar(car.id) }>Delete</button></td>
    </tr>
    )
}