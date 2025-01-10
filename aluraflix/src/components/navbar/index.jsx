import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import logo from "./assets/logo.svg";

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <img className={styles.navbarLogo} src={logo} alt="Logo AluraFlix" />

      <div className={styles.navbarButtons}>
        <Link to="/nuevo-video">
          <button className={styles.navbarButtonNewVideo}>NUEVO VIDEO</button>
        </Link>
        <Link to="/">
          <button className={styles.navbarButtonHome}>INICIO</button>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
