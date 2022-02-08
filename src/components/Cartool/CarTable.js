import PropTypes from 'prop-types';
import { useCar } from './hooks/useCar';
import { CarViewRow } from "./CarViewRow";
import { CarEditRow } from "./CarEditRow";


export const CarTable = () => {

    const { sortCars,carSort,editingId, sortedCars } = useCar();

    const showSortDir = (colName) => {
    if (carSort.column === colName) {
      return "(" + carSort.direction + ")";
    }
  }

    return (
        <table>
            <thead>
                <tr>
                    <th><button onClick={() => sortCars('id')}>Id {showSortDir('id')}</button></th>
                    <th><button onClick={() => sortCars('make')}>Make {showSortDir('make')}</button></th>
                    <th><button onClick={() => sortCars('model')}>Model {showSortDir('model')}</button></th>
                    <th><button onClick={() => sortCars('year')}>Year {showSortDir('year')}</button></th>
                    <th><button onClick={() => sortCars('color')}>Color {showSortDir('color')}</button></th>
                    <th><button onClick={() => sortCars('price')}>Price {showSortDir('price')}</button></th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {sortedCars.map(c => editingId === c.id ?
                    <CarEditRow
                        key={c.id}
                        car={c}
                    />
                    :
                    <CarViewRow
                        key={c.id}
                        car={c}
                    />
                )}
            </tbody>      
        </table>
    )
}

CarTable.propTypes = {
    cars: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    }))
}