import { Route, Routes } from 'react-router-dom';
import './App.css';
import Product from './components/products';
import BasketCart from './components/basket-cart';

function App() {
  return (
    <div>
      <h1>Alışveriş Listem</h1>
     <Routes>
      <Route path='/' element={<Product></Product>}></Route>
      <Route path='/basket' element={<BasketCart></BasketCart>}></Route>
     </Routes>
    </div>
  );
}

export default App;
