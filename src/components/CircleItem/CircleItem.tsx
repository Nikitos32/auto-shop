import { CircleItemProps } from './types';
import classes from './circleItem.module.scss';

export const CircleItem = ({ image, title }: CircleItemProps) => {
  return (
    <div className={classes.circleItem}>
      <img src={`/${image}.png`} alt="image" />
      <p>{title}</p>
    </div>
  );
};
