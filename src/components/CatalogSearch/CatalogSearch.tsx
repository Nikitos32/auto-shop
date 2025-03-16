import { MdManageSearch } from 'react-icons/md';
import classes from './catalogSearch.module.scss';
import { FaCarRear } from 'react-icons/fa6';

export const CatalogSearch = () => {
  return (
    <div className={classes.historyWrapper}>
      <div className={classes.historyContainer}>
        <p>
          <MdManageSearch className={classes.icons} /> Каталог Товаров
        </p>
        <p>
          <FaCarRear className={classes.icons} /> Каталог по маркам
        </p>
      </div>
    </div>
  );
};
