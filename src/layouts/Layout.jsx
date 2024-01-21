import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>CRYPTO APP</h1>
        <p>
          <a href="https://github.com/amirvalipouri">Amir valipouri</a>
        </p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed with ❤️</p>
      </footer>
    </>
  );
}

export default Layout;
