import React, { useEffect, useState } from 'react';
import { CartItemType } from '@/@types/Product';
import { Counter } from '../Counter';
import { useCartActions } from '@/store/actions';
import { motion, useAnimationControls } from 'framer-motion';
import eth from '../../assets/svg/eth.svg';
import trash from '../../assets/svg/trash.svg';
import styles from './styles.module.scss';
import Image from 'next/image';

interface CartProductCardProps {
  product: CartItemType;
}

export default function CartProductCard({ product }: CartProductCardProps) {
  const [inAnimation, setInAnimation] = useState(false);
  const { handleRemoveItem } = useCartActions();
  const controls = useAnimationControls();

  const handleAnimate = () => {
    setInAnimation(true);
    setTimeout(() => {
      handleRemoveItem(product.id);
    }, 300);
  };

  useEffect(() => {
    if (inAnimation) {
      controls.start({ x: '100%', opacity: 0 });
    }
  }, [inAnimation, controls]);

  return (
    <motion.div
      className={styles.productCard}
      initial={{ x: 0, opacity: 1 }}
      animate={controls}
      transition={{ duration: 0.3 }}
    >
      <Image
        src={product.image}
        alt={`${product.name} image`}
        className={styles.productImage}
      />
      <div className={styles.productContent}>
        <h2 className={styles.productName}>{product.name}</h2>
        <p className={styles.productDescription}>{product.description}</p>
        <div className={styles.priceAndButtonContainer}>
          <div className={styles.priceContent}>
            <Image
              src={eth.src}
              alt="Ethereum logo"
              className={styles.ethLogo}
            />
            <p className={styles.productPrice}>{product.price} ETH</p>
          </div>
        </div>
        <div className={styles.cardActins}>
          <Counter product={product} />
          <button
            className={styles.trashButton}
            onClick={handleAnimate}
          >
            <Image
              src={trash.src}
              alt="trash logo"
              className={styles.trashIcon}
            />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
