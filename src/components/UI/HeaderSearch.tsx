import classes from './headerSearch.module.scss';
import { FaSearch } from 'react-icons/fa';

export const HeaderSearch = () => {
  return (
    <div className={classes.headerSearchWrapper}>
      <select className={classes.select} name="auto" id="auto">
        <option value="">Выбрать авто</option>
      </select>
      <input
        className={classes.input}
        placeholder="Введите артикул или VIN-код"
      />
      <FaSearch />
    </div>
  );
};
