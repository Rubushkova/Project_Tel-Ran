import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import CategoriesPage from './pages/CategoriesPage';
import AllProductsPage from './pages/AllProductsPage';
import AllSalesPage from './pages/AllSalesPage';
import NotFoundPage from './pages/NotFoundPage';
import FavoriteProductsPage from './pages/FavoriteProductsPage';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/categories' element={<CategoriesPage/>}/>
      <Route path='/all_products' element={<AllProductsPage/>}/>
      <Route path="/discounted_products" element={<AllSalesPage />} />
      <Route path='/favorite' element = {<FavoriteProductsPage/>}/>
      <Route path='*' element={<NotFoundPage/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
