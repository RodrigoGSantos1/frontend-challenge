import React from 'react';
import { CartItem } from '@/@types/Product';
import { Counter } from '../Counter';
import { useCartActions } from '@/store/actions';
import eth from '../../assets/svg/eth.svg';
import trash from '../../assets/svg/trash.svg';
import styles from './styles.module.scss'

interface CartProductCardProps {
  product: CartItem;
}

export default function CartProductCard({ product }: CartProductCardProps) {
  const { handleRemoveItem } = useCartActions()

  return (
    <div className={styles.productCard}>
      <img src={product.image} alt={`${product.name} image`} className={styles.productImage} />
      <div className={styles.productContent}>
        <h2 className={styles.productName}>{product.name}</h2>
        <p className={styles.productDescription}>{product.description}</p>
        <div className={styles.priceAndButtonContainer}>
          <div className={styles.priceContent}>
            <img src={eth.src} alt="Ethereum logo" className={styles.ethLogo} />
            <p className={styles.productPrice}>{product.price} ETH</p>
          </div>
        </div>
        <div className={styles.cardActins}>
          <Counter product={product} />
          <button className={styles.trashButton} onClick={() => handleRemoveItem(product.id)}>
            <img src={trash.src} alt="trash logo" className={styles.trashIcon} />
          </button>
        </div>
      </div>
    </div>
  );
}

