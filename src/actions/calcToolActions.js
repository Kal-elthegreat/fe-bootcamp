
//action object
//type: string - ADD, SUBTRACT
// payload? - whatever data is needed for the action
// value to add or subtract


export const ADD_ACTION = "[CalcTool] ADD";
export const SUBTRACT_ACTION = "[CalcTool] SUBTRACT";
export const MULTIPLY_ACTION = "[CalcTool] MULTIPLY";
export const DIVIDE_ACTION = "[CalcTool] DIVIDE";
export const CLEAR_HIST_ACTION = "[CalcTool] CLEAR";
export const DELETE_HIST_ACTION = "[CalcTool] DELETE";
export const ERROR_ACTION = "[CalcTool] ERROR";

export const createAddAction = value => ({type: ADD_ACTION, payload: {value}})
export const createSubtractAction = value => ({type: SUBTRACT_ACTION, payload: {value}})
export const createMultiplyAction = value => ({type: MULTIPLY_ACTION, payload: {value}})
export const createClearHistAction = () => ({type: CLEAR_HIST_ACTION})
export const createDeleteHistAction = value => ({type: DELETE_HIST_ACTION, payload: {value}})
export const createErrorAction = (error) => ({ type: ERROR_ACTION, payload: { error } })
export const createDivideAction = value => ({ type: DIVIDE_ACTION, payload: { value } });