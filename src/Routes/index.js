import Home from 'pages/Home';
import Cart from 'pages/Cart';
import Search from 'pages/Search';
import Product from 'pages/Product';
import Products from 'pages/Products';
import NotFound from 'pages/NotFound';
import Checkout from 'pages/Checkout';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/products',
    component: Products,
    exact: true,
  },
  {
    component: Product,
    path: '/product/:id',
    exact: true,
  },
  {
    path: '/search',
    component: Search,
    exact: true,
  },
  {
    path: '/cart',
    component: Cart,
    exact: true,
  },
  {
    path: '/checkout',
    component: Checkout,
    exact: true,
  },
  {
    path: '*',
    component: NotFound,
  },
];

export default routes;
