import { useCarStoreRedux } from "../stores/useCarStoreRedux"
// helper custom hook to decouple
export const useCar = () => {
    return useCarStoreRedux();
}