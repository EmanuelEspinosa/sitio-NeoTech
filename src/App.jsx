import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from './components/Header/Header';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext/CartProvider';
import { Cart } from './components/Cart/Cart';
import { ProductFormContainer } from './components/adminComponents/ProductFormContainer/ProductFormContainer';
import { Footer } from './components/Footer/Footer';
import { ScrollToTop } from './components/layout/ScrollToTop/ScrollToTop';

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Header />
          <ScrollToTop />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:category' element={<ItemListContainer />}/>
            <Route path='/detail/:id' element={<ItemDetailContainer />}/>
            <Route path='/carrito' element={<Cart />}/>
            <Route path='/admin' element={<ProductFormContainer />}/>
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
