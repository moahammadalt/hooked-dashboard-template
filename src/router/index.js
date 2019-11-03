import MainLayout from '../layout';
// GeneralViews
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import CreateProduct from '../pages/CreateProduct';
import ProductDetails from '../pages/ProductDetails';

export const dashboardRoutes = [
  {
    path: '/',
    component: Dashboard,
    name: "Home",
    icon: "shop",
    showAlways: true,
  },
  {
    path: '/create-product',
    component: CreateProduct,
    name: "Create Product",
    icon: "upload",
    showAlways: true,
  },
  {
    path: '/product/:productSlug',
    component: ProductDetails,
    name: "Product details",
    icon: "team",
    showAlways: false,
  },
];
export const baseRoutes = [
  {
    path: '/login',
    component: Login,
    name: "Dashboard",
    noAuth: true,
  },
  {
    path: '/',
    component: MainLayout,
    name: "Main Layout",
  },
];