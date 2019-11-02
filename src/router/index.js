import MainLayout from '../layout';
// GeneralViews
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Dashboard from '../pages/Dashboard';
import CreateProduct from '../pages/CreateProduct';

export const dashboardRoutes = [
  {
    path: '/',
    component: Dashboard,
    name: "Home",
    icon: "shop",
    hasSideBarLink: true,
  },
  {
    path: '/create-product',
    component: CreateProduct,
    name: "Create Product",
    icon: "upload",
    hasSideBarLink: true,
  },
  {
    path: '/product/:productSlug',
    component: CreateProduct,
    name: "Product details",
    icon: "team",
    hasSideBarLink: false,
    hasSideBarLinkOnlyIfRouteMatch: true,
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