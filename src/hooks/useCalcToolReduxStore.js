import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";

import { createAddAction, createSubtractAction,createMultiplyAction, createDivideAction } from '../actions/calcToolActions';

export const useCalcToolReduxStore = () => {
    //selector
    const result = useSelector(state => state.result);
    const history = useSelector(state => state.history);

    const dispatch = useDispatch();

    const actions = useMemo(() => bindActionCreators({
            add: createAddAction,
            subtract: createSubtractAction,
            multiply: createMultiplyAction,
            divide: createDivideAction,
    }, dispatch), [dispatch]
    )

    return {...actions,result,history}
}