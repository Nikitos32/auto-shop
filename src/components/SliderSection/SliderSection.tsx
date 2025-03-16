import { Navigation } from 'swiper/modules';
import classes from './sliderSection.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

export const SliderSection = () => {
  return (
    <div className={classes.sliderSectionWrapper}>
      <Swiper
        modules={[Navigation]}
        navigation
        pagination={{ clickable: true }}
        className={classes.swiper}
        slidesPerView={1}
      >
        <SwiperSlide>
          <img className={classes.img} src="/sliderPhoto.png" alt="1" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={classes.img} src="/sliderPhoto.png" alt="2" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={classes.img} src="/sliderPhoto.png" alt="3" />
        </SwiperSlide>
      </Swiper>

      <img src="headerPhoto.png" alt="photo" />
    </div>
  );
};
