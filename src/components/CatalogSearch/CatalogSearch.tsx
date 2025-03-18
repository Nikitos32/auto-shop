import { MdManageSearch } from 'react-icons/md';
import classes from './catalogSearch.module.scss';
import { FaCarRear } from 'react-icons/fa6';
import { Link } from 'react-router';

export const CatalogSearch = () => {
  return (
    <div className={classes.historyWrapper}>
      <div className={classes.historyContainer}>
        <Link to="/catalog">
          <MdManageSearch className={classes.icons} /> Каталог Товаров
        </Link>
        <Link to="/catalog">
          <FaCarRear className={classes.icons} /> Каталог по маркам
        </Link>
      </div>
    </div>
  );
};
