import { Navigate } from 'react-router';
import { HomePage } from '../pages/HomePage/HomePage';
import { RegistrationPage } from '../pages/RegistrationPage/registrationPage';
import { LoginPage } from '../pages/LoginPage/LoginPage';

export const ROUTES = [
  { path: '/home', element: <HomePage /> },
  { path: '/catalog', element: <HomePage /> },
  { path: '/favourites', element: <HomePage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/registration', element: <RegistrationPage /> },
  { path: '/cart', element: <HomePage /> },
  { path: '*', element: <Navigate to="/home" /> },
  { path: '/', element: <Navigate to="/home" /> },
];
