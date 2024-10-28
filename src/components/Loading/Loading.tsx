import React from 'react';
import styles from './styles.module.scss';
import logo from '../../assets/svg/logo.svg';

export default function Loading() {
  return (
    <div className={styles.overlay}>
      <img src={logo.src} alt="Loading..." className={styles.loadingIcon} />
    </div>
  );
};
