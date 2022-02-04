import { createContext, useContext } from 'react';
import { useCarToolStore } from '../hooks/useCarToolStore';



const carToolStoreContext = createContext();

const cars =[
        { id: 12, make: 'Tesla', model: 'Y', year: 2022, color: 'Grey', price: 62000},
        { id: 204, make: 'Ford', model: 'Mustang', year: 2012, color: 'Red', price: 12000},
    ]
const carSort = { column: 'id', direction: 'asc' }

export const CarToolStoreProvider = ({ children }) => {
    return (
        <carToolStoreContext.Provider value={useCarToolStore({ carSort: {...carSort}, editingId: '', cars: [...cars]})}>
            {children}
        </carToolStoreContext.Provider>
    )
}

export const useCarToolStoreProvider = () => {
    return useContext(carToolStoreContext);
}