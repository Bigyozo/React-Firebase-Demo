import { ProductEdit, ProductList, Reset, SignIn, SignUp } from '../page';

export const routes = [
  {
    path: '/signup',
    component: SignUp,
    exact: true
  },
  {
    path: '/signin',
    component: SignIn,
    exact: true
  },
  {
    path: '/signin/reset',
    component: Reset,
    exact: true
  }
];

export const authRoutes = [
  {
    path: '(/)?',
    component: ProductList,
    exact: true
  },
  {
    path: '/product/edit(/:id)?',
    component: ProductEdit,
    exact: false
  }
];
