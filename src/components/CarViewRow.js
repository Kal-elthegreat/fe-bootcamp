

export const CarViewRow = (props) => {

    const { car } = props;

    return (
    <tr>
        <td>{car.id}</td>
        <td>{car.make}</td>
        <td>{car.model}</td>
        <td>{car.year}</td>
        <td>{car.color}</td>
        <td>{car.price}</td>
    </tr>
    )
}