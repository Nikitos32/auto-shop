import { Navigate } from 'react-router';
import { HomePage } from '../pages/HomePage';

export const ROUTES = [
  { path: '/home', element: <HomePage /> },
  { path: '/catalog', element: <HomePage /> },
  { path: '/favourites', element: <HomePage /> },
  { path: '/login', element: <HomePage /> },
  { path: '/registration', element: <HomePage /> },
  { path: '/cart', element: <HomePage /> },
  { path: '*', element: <Navigate to="/home" /> },
  { path: '/', element: <Navigate to="/home" /> },
];
