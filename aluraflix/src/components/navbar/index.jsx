import styles from "./navbar.module.css";
import logo from "./assets/logo.svg";

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <img src={logo} alt="Logo AluraFlix" />
      </div>
      <div className={styles.navbarButtons}>
        <button className={styles.navbarButtonNewVideo}>NUEVO VIDEO</button>
        <button className={styles.navbarButtonHome}>INICIO</button>
      </div>
    </nav>
  );
}

export default NavBar;
