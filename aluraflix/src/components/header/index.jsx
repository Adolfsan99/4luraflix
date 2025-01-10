import styles from "./header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerSubContainer}>
          {" "}
          <span className={styles.categoryFrontEnd}>Front-End</span>
          <h1 className={styles.headerTitle}>Challenge React</h1>
          <p className={styles.headerDescription}>
            Este challenge es una forma de aprendizaje. Es un mecanismo donde
            podrás comprometerte en la resolución de un problema para poder
            aplicar todos los conocimientos adquiridos en la formación React.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
