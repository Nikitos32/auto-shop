import { useNavigate } from 'react-router';
import classes from './loginPage.module.scss';

export const LoginPage = () => {
  const navigate = useNavigate();

  const handleForgotPassword = () => {
    navigate('/registration');
  };

  return (
    <div className={classes.loginPageWrapper}>
      <h2>Личный кабинет</h2>
      <form className={classes.loginForm}>
        <input required placeholder="Логин/E-mail/Телефон" type="text" />
        <input required placeholder="Пароль" type="password" />
        <fieldset>
          <button type="submit">Войти</button>
          <button onClick={handleForgotPassword}>Забыли пароль?</button>
        </fieldset>
      </form>
    </div>
  );
};
