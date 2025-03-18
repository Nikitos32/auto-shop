import { CarPartSection } from '../../components/CarPartsSection/CarPartSection';
import { FilterSection } from '../../components/FilterSection/FilterSection';
import { SliderSection } from '../../components/SliderSection/SliderSection';
import classes from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <div className={classes.homePageWrapper}>
      <SliderSection />
      <div className={classes.filterSectionWrapper}>
        <section>
          <h2>Популярные категории запчастей</h2>
          <p>
            Выбор автомобиля позволяет отобразить только те запчасти, которые
            подходят к вашему автомобилю
          </p>
        </section>
        <FilterSection />
      </div>
      <CarPartSection />
      <div className={classes.brands}>
        <img src="/brands.png" alt="brands" />
      </div>
      <div className={classes.brandsText}>
        <h2>Бренды</h2>
        <img src="/brandsText.png" alt="text" />
      </div>
    </div>
  );
};
