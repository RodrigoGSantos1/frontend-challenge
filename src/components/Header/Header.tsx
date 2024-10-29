import styles from './styles.module.scss';
import logo from '../../assets/svg/logo.svg';
import bag from '../../assets/svg/bag.svg';
import { useCartActions } from '@/store/actions';
import Image from 'next/image';

export default function Header() {
  const { cartItems, handleToggleOverview } = useCartActions();

  return (
    <header className={styles.header}>
      <Image
        src={logo.src}
        alt="logo"
        className={styles.logo}
      />
      <div
        className={styles.counter}
        onClick={handleToggleOverview}
      >
        <Image
          src={bag.src}
          alt="bag"
          className={styles.bag}
        />
        <span>{cartItems.length}</span>
      </div>
    </header>
  );
}
