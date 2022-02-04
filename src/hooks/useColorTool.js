import { useColorToolStoreProvider } from "../contexts/colorToolStoreContext";

export const useColorTool = () => {
    return useColorToolStoreProvider();
} 