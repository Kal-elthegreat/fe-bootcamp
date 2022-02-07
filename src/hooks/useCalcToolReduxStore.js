import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";

import { createAddAction, createSubtractAction,createMultiplyAction, createDivideAction, createClearHistAction,createDeleteHistAction, createErrorAction} from '../actions/calcToolActions';

export const useCalcToolReduxStore = () => {
    
    const result = useSelector(state => state.result);
    const history = useSelector(state => state.history);
    const error = useSelector(state => state.error);

    const dispatch = useDispatch();

    const actions = useMemo(() => bindActionCreators({
            add: createAddAction,
            subtract: createSubtractAction,
            multiply: createMultiplyAction,
            clearHist:createClearHistAction,
            deleteHist:createDeleteHistAction
    }, dispatch), [dispatch])

    const safeDivide = value => {
        if (value === 0) {
            dispatch(createErrorAction('cannot divide by 0'));
        } else {
            dispatch(createDivideAction(value))
          }
      }
    return {...actions,result,history, error, safeDivide}
}