import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from './components/Header/Header';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext/CartProvider';

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Header />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/detail/:id' element={<ItemDetailContainer />} />
            <Route path='/carrito' element={<h1>Carrito</h1>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
