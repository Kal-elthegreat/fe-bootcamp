import { createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
// create store for provider
import { carReducer } from "../reducers/carReducer";
export const carStore = createStore(carReducer,composeWithDevTools())