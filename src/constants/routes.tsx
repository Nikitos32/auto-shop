import { Navigate } from 'react-router';
import { HomePage } from '../pages/HomePage/HomePage';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { CartPage } from '../pages/CartPage/CartPage';
import { RegistrationPage } from '../pages/RegistrationPage/RegistrationPage';
import { FavouritePage } from '../pages/FavouritePage/FavouritePage';
import { CatalogPage } from '../pages/CatalogPage/CatalogPage';

export const ROUTES = [
  { path: '/home', element: <HomePage /> },
  { path: '/catalog', element: <CatalogPage /> },
  { path: '/favourites', element: <FavouritePage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/registration', element: <RegistrationPage /> },
  { path: '/cart', element: <CartPage /> },
  { path: '*', element: <Navigate to="/home" /> },
  { path: '/', element: <Navigate to="/home" /> },
];
