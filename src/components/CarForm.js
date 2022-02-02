import { useState } from "react"

export const CarForm = (props) => {
    
    const { onSubmit, buttonText} = props;
    const [carform, setCarform] = useState({
        make: '',
        model: '',
        year: '',
        color: '',
        price: ''
    })

    const handleChange = (e) => {
        setCarform({
            ...carform,
            [e.target.name]: e.target.value
        })
    }

    const submitCar = () => {
        onSubmit({...carform});
        setCarform({
            make: '',
            model: '',
            year: '',
            color: '',
            price: ''
        })
    }

    return (
        <form>
            <label>
                Make:
                <input type="text" name="make" value={carform.make } onChange={handleChange}/>
            </label>
            <label>
                Model:
                <input type="text" name="model" value={carform.model } onChange={handleChange}/>
            </label>
            <label>
                Year:
                <input type="text" name="year" value={carform.year } onChange={handleChange}/>
            </label>
            <label>
                Color:
                <input type="text" name="color" value={carform.color } onChange={handleChange}/>
            </label>
            <label>
                Price:
                <input type="text" name="price" value={carform.price } onChange={handleChange}/>
            </label>
            <button type="button" onClick={submitCar}>{buttonText}</button>
        </form>
    )
}