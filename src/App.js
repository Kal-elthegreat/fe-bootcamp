import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';
import { Layout } from './components/Layout';

export const App = () => {

  const colorList = [{ id: 1, name: 'red', hexcode: 'ff0000' }, { id: 2, name: 'green', hexcode: '00ff00' }, { id: 3, name: 'blue', hexcode: '0000ff' }];
  const cars = [
        { id: 12, make: 'Tesla', model: 'Y', year: 2022, color: 'Grey', price: `$${62000}` },
        { id: 204, make: 'Ford', model: 'Mustang', year: 2012, color: 'Red', price: `$${12000}` },
    ]
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path="color-tool" element={<ColorTool colors={colorList} />} />
        <Route path="car-tool" element={<CarTool cars={cars}/>} />
      </Route>
    </Routes>
  )
};