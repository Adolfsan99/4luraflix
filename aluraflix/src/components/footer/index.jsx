import styles from "./footer.module.css";
import logoFooter from "./assets/logoFooter.svg";

function Footer() {
  return (
    <h1 className={styles.footer}>
      <img src={logoFooter} alt="Logo footer AluraFlix" />
    </h1>
  );
}

export default Footer;
