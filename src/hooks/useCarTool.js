import { useCarToolStoreProvider } from "../contexts/carToolStoreContext";

export const useCarTool = () => {
    return useCarToolStoreProvider();
}