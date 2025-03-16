import classes from './loginPage.module.scss';

export const LoginPage = () => {
  return (
    <div className={classes.loginPageWrapper}>
      <h2>Личный кабинет</h2>
      <form className={classes.loginForm}>
        <input required placeholder="Логин/E-mail/Телефон" type="text" />
        <input required placeholder="Пароль" type="password" />
        <fieldset>
          <button type="submit">Войти</button>
          <button>Забыли пароль?</button>
        </fieldset>
      </form>
    </div>
  );
};
