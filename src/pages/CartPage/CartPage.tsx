import { FaCartPlus } from 'react-icons/fa';
import classes from './cartPage.module.scss';
import { MdPersonSearch } from 'react-icons/md';
import { LuPackageSearch } from 'react-icons/lu';
import { useEffect, useState } from 'react';
import { CatalogItemCart } from '../../components/CatalogItem/types';
import { CatalogItem } from '../../components/CatalogItem/CatalogItem';

export const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [amountDifference, setAmountDifference] = useState(0);

  useEffect(() => {
    const cartLocalStorage = JSON.parse(localStorage.getItem('cart') as string);

    if (cartLocalStorage) setCart(cartLocalStorage);
  }, [amountDifference]);

  const handleClearCart = () => {
    setAmountDifference((prevState) => prevState + 1);
  };

  return (
    <div className={classes.cartPageWrapper}>
      <h2>Корзина</h2>
      <div className={classes.cartPageContainerWrapper}>
        {cart.length > 0 ? (
          cart.map((item: CatalogItemCart) => (
            <CatalogItem
              setAmountDifference={handleClearCart}
              isCart={true}
              {...item}
            />
          ))
        ) : (
          <div className={classes.cartPageContainer}>
            <div>
              <p>
                <FaCartPlus />
                <p>Перейти в магазин для заказа</p>
              </p>
            </div>
            <div>
              <LuPackageSearch />
              <p>Перейти в каталог для подбора</p>
            </div>
            <div>
              <MdPersonSearch />
              <p>Перейти в личный кабинет</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
