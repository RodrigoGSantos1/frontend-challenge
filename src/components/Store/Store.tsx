import { Product } from '@/@types/Product';
import { ProductCard } from '../ProductCard';
import { useProducts } from '@/services/productsApi';
import styles from './styles.module.scss';
import { Loading } from '../Loading';
import { useState, useRef, useEffect } from 'react';

export default function Store() {
  const [limit, setLimit] = useState(12);
  const [hasClickedLoadMore, setHasClickedLoadMore] = useState(false);
  const { data, isLoading } = useProducts({ limit, page: 1 });

  const lastItemRef = useRef<HTMLDivElement | null>(null);

  const handleLoadMore = () => {
    setLimit(prevLimit => prevLimit + 8);
    setHasClickedLoadMore(true);
  };

  const isLoadMoreDisabled = data && data.data.length >= data.metadata.count;
  const progress = data ? (data.data.length / data.metadata.count) * 100 : 0;

  useEffect(() => {
    if (hasClickedLoadMore && lastItemRef.current) {
      lastItemRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [data, hasClickedLoadMore]);

  return (
    <div className={styles.storeContainer}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className={styles.productsGrid}>
            {data && data.data.length > 0 &&
              data.data.map((product: Product, key: number) => (
                <ProductCard
                  product={product}
                  ref={key === data.data.length - 1 ? lastItemRef : null}
                  key={key}
                />
              ))
            }
          </div>
          <div className={styles.moreButtonContainer}>
            <div className={styles.progressBarContainer}>
              <div
                className={styles.progressBar}
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <button
              className={styles.moreButton}
              onClick={handleLoadMore}
              disabled={isLoadMoreDisabled}
            >
              {isLoadMoreDisabled ? 'VOCÊ JÁ VIU TUDO' : 'CARREGAR MAIS'}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
