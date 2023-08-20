import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <a>
            <img src="../image/Logo.png" alt="Logo da Pizzaria" />
          </a>
        </Link>
      </div>
      <nav className={styles.nav}>
        <Link href="/menu">
          <a>Menu</a>
        </Link>
        <Link href="/carrinho">
          <a>Carrinho</a>
        </Link>
        <Link href="/login">
          <a>Login</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
