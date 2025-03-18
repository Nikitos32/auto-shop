import { Link } from 'react-router';
import { CircleItem } from '../CircleItem/CircleItem';
import classes from './carPartSection.module.scss';

export const CarPartSection = () => {
  return (
    <div className={classes.carPartSectionWrapper}>
      <h2>Автозапчасти</h2>
      <hr />
      <div className={classes.carPartSectionContainer}>
        <nav>
          <Link to="/catalog">Фильтры</Link>
          <Link to="/catalog">Тормозная система</Link>
          <Link to="/catalog">Зажигание</Link>
          <Link to="/catalog">Подвеска</Link>
          <Link to="/catalog">Ремни</Link>
          <Link to="/catalog">Рулевое управление</Link>
          <Link to="/catalog">Охлаждение</Link>
          <Link to="/catalog">Система выпуска</Link>
          <Link to="/catalog">Топливная система</Link>
          <Link to="/catalog">Сцепление</Link>
        </nav>
        <section className={classes.carPartSection}>
          <CircleItem image="filter" title="Фильтры" />
          <CircleItem image="break" title="Тормозная система" />
          <CircleItem image="burn" title="Зажигание" />
          <CircleItem image="podveska" title="Подвеска" />
          <CircleItem image="chain" title="Ремни, цепи и натяжители" />
          <CircleItem image="hand" title="Рулевое управление" />
          <CircleItem image="colder" title="Охлаждение" />
          <CircleItem image="system" title="Система выпуска" />
          <CircleItem image="oil" title="Топливная система" />
          <CircleItem image="schaplenie" title="Сцепление" />
        </section>
      </div>
    </div>
  );
};
