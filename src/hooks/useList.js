import { useState } from 'react';


export const useList = (initialState) => {

    const [state, setState] = useState([...initialState]);

    const add = item => {
        setState([
            ...state,
            {
                ...item,
                id: Math.max(...state.map(c => c.id), 0) + 1,
            }
        ]);
    };

    const save = item => {
        const newState = [...state];
        const itemIndex = newState.findIndex(c => c.id === item.id);
        newState[itemIndex] = item;
        setState(newState);
    };

    const remove = itemId => {
        setState(state.filter(c => c.id !== itemId));
    };


    return [state, add, save, remove];


};