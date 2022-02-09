export const CarViewRow = (props) => {
    const { car,editCar,deleteCar } = props;
    return (
    <tr>
        <td>{car.id}</td>
        <td>{car.make}</td>
        <td>{car.model}</td>
        <td>{car.year}</td>
        <td>{car.color}</td>
        <td>{car.price}</td>
        <td><button onClick={()=> editCar(car.id)}>Edit</button></td>
        <td><button onClick={() =>deleteCar(car.id) }>Delete</button></td>
    </tr>
    )
}