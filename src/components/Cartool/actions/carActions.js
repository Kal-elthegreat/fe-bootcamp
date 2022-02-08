export const SORT_ACTION = "[CarTool] SORT";
export const CREATE_ACTION = "[CarTool] CREATE";
export const RESET_ACTION = "[CarTool] RESET";
export const UPDATE_ACTION = "[CarTool] UPDATE";
export const DELETE_ACTION = "[CarTool] DELETE";
export const EDIT_ACTION = "[CarTool] EDIT";


export const createCreateAction = (value) => ({type:CREATE_ACTION, value})
export const createUpdateAction = (value) => ({type:UPDATE_ACTION, value})
export const createDeleteAction = (value) => ({type:DELETE_ACTION, value})
export const createEditAction = (id) => ({type:EDIT_ACTION, id})
export const createResetAction = () => ({ type: RESET_ACTION })
export const createSortAction = (value) => ({ type:SORT_ACTION, value})
