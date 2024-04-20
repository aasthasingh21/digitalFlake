import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';
import Home from './pages/Home';
import Default from './components/Default';
import Category from './components/Category';
import CategoryDetail from './components/CategoryDetail';
import Product from './components/Product';
import ProductDetail from './components/ProductDetails';

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/" element={<Home />}>
        <Route index element={<Default />} />
        <Route path="/category" element={<Category />} />
        <Route path="/category/:categoryDetail" element={<CategoryDetail />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:productDetail" element={<ProductDetail />} />
      </Route>
    </Routes>
  </Router>
);

}

export default App;
