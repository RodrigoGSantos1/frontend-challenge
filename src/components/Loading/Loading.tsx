import React from 'react';
import { motion } from 'framer-motion';
import styles from './styles.module.scss';
import logo from '../../assets/svg/logo.svg';

export default function Loading() {
  return (
    <div className={styles.overlay}>
      <motion.img
        src={logo.src}
        alt="Loading..."
        className={styles.loadingIcon}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1.5, ease: 'easeInOut', repeat: Infinity }}
      />
    </div>
  );
}
