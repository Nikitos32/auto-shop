import classes from './favouritePage.module.scss';

export const FavouritePage = () => {
  return (
    <div className={classes.favouritePageWrapper}>
      <h2>Избранное</h2>
      <div>
        <p>Ваш блокнот пуст, оставьте заметку о найденной запчасти!</p>
      </div>
      <div>
        <h2>Популярные товары</h2>
      </div>
    </div>
  );
};
