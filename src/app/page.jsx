import Image from 'next/image';
import styles from './page.module.css';
import Hero from '/public/hero.png';
import Button from '@/components/Button/Button';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Welcome to Belmont Graphics</h1>
        <p className={styles.description}>
          we believe every picture tells a story. 
          Whether it's the joy of a wedding day, the wonder of 
          a newborn's first days, or the simple beauty of 
          everyday life, our mission is to capture the essence 
          of your most cherished moments.
          </p>

        <p className={styles.description}>
          Explore our portfolio, learn about our services, 
          and let us help you create timeless memories.
          </p>

        <Button url="/portfolio" text="See how it Works" />
      </div>
      <div className={styles.item}>
        <Image
          src={Hero}
          alt="Hero Section"
          className={styles.img}
        />
      </div>
    </div>
  );
}
