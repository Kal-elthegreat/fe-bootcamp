import { useForm } from '../../hooks/useForm';

export const CarForm = (props) => {
    
    const {buttonText,addCar } = props;
    const [carform, change, resetCarForm] = useForm(
        {
        make: '',
        model: '',
        year: '',
        color: '',
        price: ''
        })
        const submitCar = () => {
            addCar({ ...carform });
            resetCarForm();
        };

    return (
        <form>
            <label>
                Make:
                <input type="text" name="make" value={carform.make } onChange={change}/>
            </label>
            <label>
                Model:
                <input type="text" name="model" value={carform.model } onChange={change}/>
            </label>
            <label>
                Year:
                <input type="text" name="year" value={carform.year } onChange={change}/>
            </label>
            <label>
                Color:
                <input type="text" name="color" value={carform.color } onChange={change}/>
            </label>
            <label>
                Price:
                <input type="text" name="price" value={carform.price } onChange={change}/>
            </label>
            <button type="button" onClick={() => submitCar(carform)}>{buttonText}</button>
        </form>
    )
}