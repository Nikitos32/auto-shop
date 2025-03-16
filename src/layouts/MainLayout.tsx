import { Outlet } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import classes from './mainLayout.module.scss';
import { CatalogSearch } from '../components/CatalogSearch/CatalogSearch';

export const MainLayout = () => {
  return (
    <div className={classes.container}>
      <Header />
      <CatalogSearch />
      <main className={classes.mainWrapper}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
