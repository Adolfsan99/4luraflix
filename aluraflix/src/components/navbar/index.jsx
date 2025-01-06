import styles from "./style.module.css";
import logo from "./assets/logo.svg";

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <img src={logo} alt="Logo AluraFlix" />
      </div>
      <div className={styles.navbarButtons}>
        <button className={styles.navbarButtonHome}>Home</button>
        <button className={styles.navbarButtonNewVideo}>Nuevo video</button>
      </div>
    </nav>
  );
}

export default NavBar;
