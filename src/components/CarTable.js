import PropTypes from 'prop-types';
import { CarViewRow } from "./CarViewRow";
import { CarEditRow } from "./CarEditRow";


export const CarTable = (props) => {
    const { carsSort, cars, onSortCars: doSortCars, onRemoveCar: removeCar, onEditRow: editRow, editingId,onSaveCar:saveCar,onResetRow:resetRow } = props;
    
    const showSortDir = (colName) => {
    if (carsSort.column === colName) {
      return "(" + carsSort.direction + ")";
    }
  }

    return (
        <table>
            <thead>
                <tr>
                    <th><button onClick={() => doSortCars('id')}>Id {showSortDir('id')}</button></th>
                    <th><button onClick={() => doSortCars('make')}>Make {showSortDir('make')}</button></th>
                    <th><button onClick={() => doSortCars('model')}>Model {showSortDir('model')}</button></th>
                    <th><button onClick={() => doSortCars('year')}>Year {showSortDir('year')}</button></th>
                    <th><button onClick={() => doSortCars('color')}>Color {showSortDir('color')}</button></th>
                    <th><button onClick={() => doSortCars('price')}>Price {showSortDir('price')}</button></th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {cars.map(c => editingId === c.id ?
                    <CarEditRow
                        key={c.id}
                        car={c}
                        onSaveCar={saveCar}
                        onResetRow={resetRow}
                    />
                    :
                    <CarViewRow
                        key={c.id}
                        car={c}
                        onRemoveCar={removeCar}
                        onEditRow={editRow}
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