import { useEffect, useState } from 'react';
import classes from './catalogPage.module.scss';
import { CatalogItem } from '../../components/CatalogItem/CatalogItem';
import { CatalogPageItems } from './types';

export const CatalogPage = () => {
  const [currentPage, setCurrentPage] = useState('filters');
  const [catalogItems, setCatalogItems] = useState<CatalogPageItems[]>([]);

  useEffect(() => {
    fetch(`/${currentPage}.json`)
      .then((response) => response.json())
      .then((data) => {
        console.log();
        setCatalogItems(data[currentPage]);
      });
  }, [currentPage]);

  const handleClickFilters = (value: string) => () => {
    setCurrentPage(value);
  };

  return (
    <div className={classes.catalogPageWrapper}>
      <h1>Каталог</h1>
      <h2>
        {currentPage === 'burn'
          ? 'Запчасти системы зажигания'
          : currentPage === 'break'
            ? 'Тормозная система'
            : 'Фильтра'}
      </h2>
      <div className={classes.catalogPageMainContainer}>
        <div className={classes.catalogPageFiltersLinks}>
          <p onClick={handleClickFilters('filters')}>Фильтра</p>
          <p onClick={handleClickFilters('break')}>Тормозная система</p>
          <p onClick={handleClickFilters('burn')}>Запчасти системы зажигания</p>
        </div>
        <div className={classes.catalogPageContainer}>
          {catalogItems.map((item) => (
            <CatalogItem
              key={item.title}
              image={
                currentPage === 'burn'
                  ? 'burnCatalog'
                  : currentPage === 'break'
                    ? 'breakCatalog'
                    : 'filterCatalog'
              }
              title={item.title}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
