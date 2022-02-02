import { useState } from 'react';

export const ColorForm = (props) => {
    const { onSubmitColor, buttonText } = props;
 
    const [colorForm, setColorForm] = useState({ name: '', hexcode: '' });
    
    // look at this convention
    const change = (e) => {
        setColorForm({
            ...colorForm,
            [e.target.name]: e.target.value
        })
    }
 // look at this convention
    const submitColor = () => {
        onSubmitColor({ ...colorForm });
        setColorForm({
            name: '',
            hexcode: ''
        })
    }

    return (
        <form>

            <label>
                Name:
                <input type='text' name="name" value={colorForm.name} onChange={change}/>
            </label>
            <label>
                Hexcode:
                <input type='text' name="hexcode" value={colorForm.hexcode} onChange={change}/>
            </label>

            <button type="button" onClick={submitColor}>{buttonText}</button>

        </form>
    )
}