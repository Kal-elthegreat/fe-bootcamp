import PropTypes from 'prop-types'

export const ColorList = (props) => {

    const { colors } = props;

    return (
        <ul>
            {colors.map(c => <li key={c.id}>{c.name} {c.hexcode}</li>)}
        </ul>
    )
}

ColorList.defaultProps = {
    colors: [],
}

ColorList.propTypes = {
    colors: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        hexcode: PropTypes.string.isRequired
    })).isRequired,
}