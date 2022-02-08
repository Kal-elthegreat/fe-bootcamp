import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Home } from './components/Home';
import { ColorToolStoreProvider } from './contexts/colorToolStoreContext';
import {carStore} from './components/Cartool/stores/carStore';
import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/Cartool';
import { Layout } from './components/Layout';
import { calcToolStore } from './stores/calcToolStore';
import { CalcTool } from './components/CalcTool';
export const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="color-tool" element={<ColorToolStoreProvider>
          <ColorTool />
        </ColorToolStoreProvider>} />
        <Route path="car-tool" element={<Provider store={carStore}>  
          <CarTool />
        </Provider>} />
        <Route path="calc-tool" element={<Provider store={calcToolStore}>
          <CalcTool />
        </Provider>} /> 
      </Route>
    </Routes>
  )
};