import { CartItemType } from '@/@types/Product';
import { useCartActions } from '@/store/actions';
import { CartProductCard } from '../CartProductCard';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import eth from '../../assets/svg/eth.svg';
import arrowLeft from '../../assets/svg/arrowLeft.svg';
import styles from './styles.module.scss';

export default function Cart() {
  const { cartItems, handleToggleOverview } = useCartActions();

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className={styles.overlayWrapper}>
      <div
        className={styles.backgroundOverlay}
        onClick={handleToggleOverview}
      />
      <motion.div
        className={styles.overlay}
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: '0%', opacity: 1 }}
        exit={{ x: '100%', opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className={styles.cartHeader}>
          <button className={styles.closeButton} onClick={handleToggleOverview}>
            <img
              src={arrowLeft.src}
              alt="trash logo"
              className={styles.arrowIcon}
            />
          </button>
          <span className={styles.title}>Mochila de Compras</span>
        </div>
        <div className={styles.container}>
          {cartItems && cartItems.length > 0 ? (
            cartItems.map((item: CartItemType) => (
              <CartProductCard product={item} key={item.id} />
            ))
          ) : (
            <div className={styles.noProduct}>
              <p>Nenhum produto adicionado a mochila.</p>
            </div>
          )}
        </div>
        {cartItems && cartItems.length > 0 && (
          <div className={styles.fixedFooter}>
            <div className={styles.countPrice}>
              <span>TOTAL</span>
              <div className={styles.priceContent}>
                <img
                  src={eth.src}
                  alt="Ethereum logo"
                  className={styles.ethLogo}
                />
                <p className={styles.productPrice}>{calculateTotal()} ETH</p>
              </div>
            </div>
            <button className={styles.finishBuy}>FINALIZAR COMPRA</button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
