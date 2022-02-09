import PropTypes from 'prop-types';
import { CarViewRow } from "./CarViewRow";
import { CarEditRow } from "./CarEditRow";


export const CarTable = (props) => {
    const { sortCars, sortedCars, editingId, carSort,saveCar,reset,editCar,deleteCar } = props;
    

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
                        saveCar={saveCar}
                        reset ={reset}
                    />
                    :
                    <CarViewRow
                        key={c.id}
                        car={c}
                        editCar={editCar}
                        deleteCar={deleteCar}
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