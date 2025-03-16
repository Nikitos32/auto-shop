import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router';
import './App.css';
import { ROUTES } from './constants/routes';
import { MainLayout } from './layouts/MainLayout';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        {ROUTES.map((route) => {
          if (route.path === '*') {
            return <Route index key={route.path} {...route} />;
          }
          return <Route key={route.path} {...route} />;
        })}
      </Route>,
    ),
  );
  return <RouterProvider router={router} />;
}

export default App;
