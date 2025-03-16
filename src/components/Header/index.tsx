import { FaHome } from 'react-icons/fa';
import { HeaderSearch } from '../UI/HeaderSearch';
import classes from './header.module.scss';
import { CiBookmark, CiCalendar, CiUser } from 'react-icons/ci';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { Link } from 'react-router';

export const Header = () => {
  return (
    <header className={classes.headerWrapper}>
      <div className={classes.headerWrapperContainer}>
        <div className={classes.headerListWrapper}>
          <ul className={classes.headerList}>
            <li className={classes.order}>
              <CiCalendar className={classes.calendar} />
              Обработка и выдача заказов
            </li>
            <li>Оплата</li>
            <li>Система скидок</li>
            <li>Вакансия</li>
          </ul>
          <div className={classes.headerContacts}>
            <p className={classes.phone}>
              <img src="/A1.svg" alt="A1" />8 (044) 111-11-11
            </p>
            <img src="/Telegram.png" alt="telegram" />
            <p>Перезвонить</p>
          </div>
        </div>
        <hr className={classes.line} />
        <div className={classes.headerListWrapper}>
          <img src="/logo.png" alt="logo" />
          <HeaderSearch />
          <ul className={classes.headerMenuList}>
            <li>
              <Link to="/favourites">
                <CiBookmark className={classes.menuIcon} />
                <p>Избранное</p>
              </Link>
            </li>
            <li>
              <Link to="/home">
                <FaHome className={classes.menuIcon} />
                <p>Мое авто</p>
              </Link>
            </li>
            <li>
              <Link to="/login">
                <CiUser className={classes.menuIcon} />
                <p>Войти</p>
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <MdOutlineShoppingCart className={classes.menuIcon} />
                <p>Корзина</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
