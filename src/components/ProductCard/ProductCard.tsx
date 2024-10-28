import React, { forwardRef } from 'react';
import styles from './styles.module.scss';
import eth from '../../assets/svg/eth.svg';
import { Product } from '@/@types/Product';
import { useCartActions } from '@/store/actions';

interface ProductCardProps {
  product: Product;
}

const ProductCard = forwardRef<HTMLDivElement, ProductCardProps>(({ product }, ref) => {
  const { handleAddItem, cartItems } = useCartActions();

  const handleAddToCart = () => {
    handleAddItem({ ...product, quantity: 1 });
  };

  const isProductInCart = cartItems.some(item => item.id === product.id);

  return (
    <div className={styles.productCard} ref={ref}>
      <img src={product.image} alt={`${product.name} image`} className={styles.productImage} />
      <h2 className={styles.productName}>{product.name}</h2>
      <p className={styles.productDescription}>{product.description}</p>
      <div className={styles.priceAndButtonContainer}>
        <div className={styles.priceContent}>
          <img src={eth.src} alt="Ethereum logo" className={styles.ethLogo} />
          <p className={styles.productPrice}>{product.price} ETH</p>
        </div>
        <button
          className={isProductInCart ? styles.inCartButton : styles.addToCartButton}
          onClick={handleAddToCart} disabled={isProductInCart}
        >
          {isProductInCart ? "ADICIONADO AO CARRINHO" : "COMPRAR"}
        </button>
      </div>
    </div>
  );
});

export default ProductCard;
