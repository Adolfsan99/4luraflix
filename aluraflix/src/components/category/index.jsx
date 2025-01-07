import styles from "./category.module.css";

function Category() {
  return (
    <div className={styles.mainCategory}>
      <h1 className={styles.categoryTitle}>Front-End</h1>
      <div className={styles.categoryContainer}>
        <div className={styles.videoContrainer}>
          <img
            src="https://i.ytimg.com/vi/ov7vA5HFe6w/maxresdefault.jpg"
            alt=""
          />
          <div className={styles.videoManager}>
            <div className={styles.videoTitle}>
              ¿QUÉ SIGNIFICA PENSAR COMO PROGRAMADOR?
            </div>
            <div className={styles.videoButtons}>
              <button className={styles.videoButton}>BORRAR</button>
              <button className={styles.videoButton}>EDITAR</button>
            </div>
          </div>
        </div>
        <div className={styles.videoContrainer}>
          <img
            src="https://i.ytimg.com/vi/ov7vA5HFe6w/maxresdefault.jpg"
            alt=""
          />
          <div className={styles.videoManager}>
            <div className={styles.videoTitle}>
              ¿QUÉ SIGNIFICA PENSAR COMO PROGRAMADOR?
            </div>
            <div className={styles.videoButtons}>
              <button className={styles.videoButton}>BORRAR</button>
              <button className={styles.videoButton}>EDITAR</button>
            </div>
          </div>
        </div>
        <div className={styles.videoContrainer}>
          <img
            src="https://i.ytimg.com/vi/ov7vA5HFe6w/maxresdefault.jpg"
            alt=""
          />
          <div className={styles.videoManager}>
            <div className={styles.videoTitle}>
              ¿QUÉ SIGNIFICA PENSAR COMO PROGRAMADOR?
            </div>
            <div className={styles.videoButtons}>
              <button className={styles.videoButton}>BORRAR</button>
              <button className={styles.videoButton}>EDITAR</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
