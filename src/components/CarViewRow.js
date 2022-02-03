

export const CarViewRow = (props) => {
    const { car, onRemoveCar: removeCar, onEditRow: editRow } = props;

    return (
    <tr>
        <td>{car.id}</td>
        <td>{car.make}</td>
        <td>{car.model}</td>
        <td>{car.year}</td>
        <td>{car.color}</td>
        <td>{car.price}</td>
        <td><button onClick={()=> editRow(car.id)}>Edit</button></td>
        <td><button onClick={() =>removeCar(car.id) }>Delete</button></td>
    </tr>
    )
}