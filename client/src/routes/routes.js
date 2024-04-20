
import Register from '../pages/Register';
import Login from '../pages/Login';
import ResetPassword from '../pages/ResetPassword';
import Home from '../pages/Home';
import Default from '../components/Default';
import Category from '../components/Caterory';
import CategoryDetails from '../components/CategoryDetail';
import Product from '../components/Product';
import ProductDetails from '../components/ProductDetails';

const routes = {
    register: {
        path: '/register',
        element: Register
    },
    login: {
        path: '/login',
        element: Login
    },
    reset: {
        path: '/reset',
        element: ResetPassword
    },
    home: {
        path: '/',
        element: Home
    },
    default: {
        path: '/default',
        element: Default
    },
    category: {
        path: '/category',
        element: Category
    },
    categorydetails: {
        path: '/category/view',
        element: CategoryDetails
    },
    product: {
        path: '/product',
        element: Product
    },
    productdetails: {
        path: '/product/view',
        element: ProductDetails
    }

};

export default routes;