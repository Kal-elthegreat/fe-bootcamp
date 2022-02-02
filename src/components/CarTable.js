import { CarViewRow } from "./CarViewRow";


export const CarTable = (props) => {
    
    const showSortDir = (colName) => {
    if (props.carsSort.column === colName) {
      return "(" + props.carsSort.direction + ")";
    }
  }

    return (
        <table>
            <thead>
                <th><button onClick={() => props.onSortCars('id')}>Id {showSortDir('id')}</button></th>
                <th><button onClick={() => props.onSortCars('make')}>Make {showSortDir('make')}</button></th>
                <th><button onClick={() => props.onSortCars('model')}>Model {showSortDir('model')}</button></th>
                <th><button onClick={() => props.onSortCars('year')}>Year {showSortDir('year')}</button></th>
                <th><button onClick={() => props.onSortCars('color')}>Color {showSortDir('color')}</button></th>
                <th><button onClick={() => props.onSortCars('price')}>Price {showSortDir('price')}</button></th>
            </thead>
            <tbody>
                {props.cars.map(c => <CarViewRow key={c.id} car={c} />)}
            </tbody>      
        </table>
    )
}