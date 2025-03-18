import { FaCartPlus } from 'react-icons/fa';
import classes from './catalogItem.module.scss';
import { CatalogItemCart, CatalogItemProps } from './types';
import { useState } from 'react';
import { MdDelete } from 'react-icons/md';

export const CatalogItem = ({
  title,
  image,
  price,
  count,
  isCart,
}: CatalogItemProps) => {
  const [myCount, setCount] = useState(count ?? 0);

  const handleClickPlus = () => {
    setCount((prevState) => prevState + 1);
  };

  const handleClickMinus = () => {
    setCount((prevState) => (prevState > 0 ? prevState - 1 : prevState));
  };

  const handleAddToCart = () => {
    const cartLocalStorage = JSON.parse(localStorage.getItem('cart') as string);
    const itemToAdd = { title, image, price, count: myCount };

    if (cartLocalStorage) {
      const filterCart = cartLocalStorage.filter(
        (item: CatalogItemCart) => item.title === title,
      );

      if (isCart) {
        localStorage.setItem(
          'cart',
          JSON.stringify(
            cartLocalStorage.filter(
              (item: CatalogItemCart) => item.title !== title,
            ),
          ),
        );
        return;
      }
      if (filterCart.length === 0 && myCount > 0) {
        localStorage.setItem(
          'cart',
          JSON.stringify([...cartLocalStorage, itemToAdd]),
        );
      }
    } else if (myCount > 0) {
      localStorage.setItem('cart', JSON.stringify([itemToAdd]));
    }
  };

  return (
    <div className={classes.catalogItemWrapper}>
      <h2>{title}</h2>
      <img src={`/${image}.png`} alt="image" />
      <div className={classes.catalogItemContainer}>
        <p>
          Цена <span>{price}</span> BYN.
        </p>
        <div className={classes.catalogItemCounterWrapper}>
          <div className={classes.catalogItemCounter}>
            <button onClick={handleClickMinus}>-</button>
            <p>{myCount}</p>
            <button onClick={handleClickPlus}>+</button>
            <button onClick={handleAddToCart} className={classes.cartButton}>
              {isCart ? <MdDelete /> : <FaCartPlus />}
            </button>
          </div>
          <p className={classes.catalogItemBuyText}>Купить в 1 клик</p>
        </div>
        <p className={classes.catalogItemStock}>На складе 5 (шт.)</p>
      </div>
    </div>
  );
};
