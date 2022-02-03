import { useForm } from '../hooks/useForm';

export const CarEditRow = ({ car, onSaveCar, onResetRow: resetRow}) => {

    
    const [carForm, change] = useForm({
        make: car.make,
        model: car.model,
        year: car.year,
        color: car.color,
        price: car.price,
    });


    const saveCar = () => {
        onSaveCar({
        ...carForm,
        id: car.id,
        });
    };

    return (
        <tr>
            <td>{car.id}</td>
            <td><input type="text" name='make' value={carForm.make} onChange={change}/></td>
            <td><input type="text" name='model' value={carForm.model} onChange={change}/></td>
            <td><input type="number" name='year' value={carForm.year} onChange={change}/></td>
            <td><input type="text" name='color' value={carForm.color} onChange={change}/></td>
            <td><input type="number" name='price' value={carForm.price} onChange={change}/></td>
            <td><button onClick={() => saveCar({ ...carForm, id: car.id }) }>Save</button></td>
            <td><button onClick={resetRow}>Cancel</button></td>
        </tr>
    )

}
