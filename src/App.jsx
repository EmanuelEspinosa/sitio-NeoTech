import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from './components/Header/Header';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext/CartProvider';
import { Cart } from './components/Cart/Cart';
import { ProductFormContainer } from './components/adminComponents/ProductFormContainer/ProductFormContainer';
import { Footer } from './components/Footer/Footer';
import { ScrollToTop } from './layout/ScrollToTop/ScrollToTop';
import { MainLayout } from './layout/MainLayout/MainLayout';
import { AdminLayout } from './layout/AdminLayout/AdminLayout';
import { RutaProtegida } from './components/RutaProtegida/RutaProtegida';
import { Login } from './components/Login/Login';
import { AdminDashboard } from './layout/AdminLayout/AdminDashboard/AdminDashboard';
import { Home } from './components/Home/Home';
import { AboutUs } from './layout/AboutUs/AboutUs';
import { Contact } from './layout/Contact/Contact';




function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<MainLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/aboutUs' element={<AboutUs />} />
            <Route path='/products' element={<ItemListContainer />} />
            <Route path='/products/category/:category' element={<ItemListContainer />} />
            <Route path='/products/detail/:id' element={<ItemDetailContainer />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/cart' element={<Cart />} />
          </Route>

          <Route path='/admin' element={<AdminLayout />}>
            <Route index element={<Login />} />
            <Route path='dashboard' element={
              <RutaProtegida>
                <AdminDashboard />
              </RutaProtegida>
            } />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
