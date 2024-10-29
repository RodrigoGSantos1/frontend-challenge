import React from 'react';
import styles from './styles.module.scss';
import { CartItemType } from '@/@types/Product';
import { useCartActions } from '@/store/actions';

interface CartProductCardProps {
  product: CartItemType;
}

export default function Counter({ product }: CartProductCardProps) {
  const { handleDecrementQuantity, handleIncrementQuantity } = useCartActions();

  const handleIncrement = () => handleIncrementQuantity(product.id);
  const handleDecrement = () => handleDecrementQuantity(product.id);

  return (
    <div className={styles.counterContainer}>
      <button className={styles.button} onClick={handleDecrement}>
        −
      </button>
      <span className={styles.count}>{product.quantity}</span>
      <button className={styles.button} onClick={handleIncrement}>
        +
      </button>
    </div>
  );
}
