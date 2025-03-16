import { SliderSection } from '../../components/SliderSection/SliderSection';
import classes from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <div className={classes.homePageWrapper}>
      <SliderSection />
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
