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

        <div className={styles.headerSubContainer}>
          {" "}
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ov7vA5HFe6w?si=h39ueeqRdBJhuw0M"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Header;
