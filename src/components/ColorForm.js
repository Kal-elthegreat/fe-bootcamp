
import { useForm } from '../hooks/useForm';

export const ColorForm = (props) => {
    const { onSubmitColor, buttonText } = props;

    const [colorForm, change, resetForm] = useForm({ name: '', hexcode: '' });

    const submitColor = () => {
        onSubmitColor({ ...colorForm });
        resetForm();
    }

    return (
        <form>

            <label>
                Name:
                <input type='text' name="name" value={colorForm.name} onChange={change} />
            </label>
            <label>
                Hexcode:
                <input type='text' name="hexcode" value={colorForm.hexcode} onChange={change} />
            </label>

            <button type="button" onClick={submitColor}>{buttonText}</button>

        </form>
    )
}