import { useState } from 'react';
import classes from './registrationPage.module.scss';

export const RegistrationPage = () => {
  const [city] = useState('Минск');

  return (
    <div className={classes.registrationPageWrapper}>
      <h2>Заявка на регистрацию</h2>
      <form className={classes.registrationForm}>
        <input required placeholder="Имя и Фамилия *" type="text" />
        <input required placeholder="Телефон *" type="tel" />
        <input required placeholder="E-mail *" type="email" />
        <input placeholder="Адрес" type="text" />
        <input placeholder="Город" type="text" value={city} />
        <input required placeholder="Пароль *" type="password" />
        <input required placeholder="Повторите пароль *" type="password" />
        <label htmlFor="ur">
          <input id="ur" type="checkbox" />
          <p>Юридическое лицо (Да/Нет)</p>
        </label>
        <label htmlFor="rules">
          <input id="rules" type="checkbox" />
          <p>Принимаю условия Оферты</p>
        </label>
        <label htmlFor="sms">
          <input id="sms" type="checkbox" />
          <p>SMS рассылка</p>
        </label>
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};
