import { Header, Store } from '../components';
import { AnimatePresence } from 'framer-motion';

export default function Home() {
  return (
    <>
      <AnimatePresence>
        <Header />
        <Store />
      </AnimatePresence>
    </>
  );
}
