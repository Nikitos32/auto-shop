import { FaInstagram, FaTelegramPlane, FaVk, FaYoutube } from 'react-icons/fa';
import { FOOTER_TEXT } from '../../constants/text';
import classes from './footer.module.scss';
import { Link } from 'react-router';

export const Footer = () => {
  return (
    <footer className={classes.footer}>
      <section className={classes.footerText}>{FOOTER_TEXT}</section>
      <div className={classes.footerWrapper}>
        <div className={classes.footerContainer}>
          <div className={classes.footerContacts}>
            <div className={classes.phonesWrapper}>
              <p>
                <img src="/A1.svg" alt="A1" /> 8 (044) 111-11-11
              </p>
              <p>
                <img src="/MTC.png" alt="A1" />8 (044) 111-11-11
              </p>
            </div>
            <div className={classes.buttonsWrapper}>
              <button className={classes.button}>Перезвонить</button>
              <button className={classes.button}>Написать Руководству</button>
            </div>
            <div className={classes.onlineWrapper}>
              <p>
                <img src="/24Hour.png" alt="24" /> Онлайн заказы принимаются
                круглосуточно
              </p>
            </div>
          </div>
          <div className={classes.listWrapper}>
            <h2>Обработка заказов</h2>
            <p>Понедельник – Пятница 9.00 – 21.00</p>
            <p>Суббота 9.00 – 19.00 </p>
            <p>Воскресенье 9.00 – 17.00</p>
          </div>
        </div>
        <div className={classes.listWrapper}>
          <h2>Помощь</h2>
          <p>Все марки авто</p>
          <p>Запрос по VIN</p>
          <p>Карта сайта</p>
        </div>
        <div className={classes.listWrapper}>
          <h2>О магазине</h2>
          <p>О компании</p>
          <p>Контакты</p>
          <p>Отзывы клиентов</p>
        </div>
        <div className={classes.listWrapper}>
          <h2>Покупателям</h2>
          <p>Система скидок</p>
          <p>Партнерская программа</p>
          <p>Способы оплаты</p>
        </div>
        <div className={classes.socialWrapper}>
          <div className={classes.listWrapper}>
            <h2>Профиль</h2>
            <Link to="/login">Вход</Link>
            <Link to="/registration">Регистрация</Link>
          </div>
          <div className={classes.listWrapper}>
            <h2>Мы в соц. сетях</h2>
            <div className={classes.socialIcons}>
              <FaVk />
              <FaYoutube />
              <FaInstagram />
              <FaTelegramPlane />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
