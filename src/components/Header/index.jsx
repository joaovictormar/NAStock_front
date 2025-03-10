import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <section className={styles.header}>
      <figure className={styles.figura}>
        <img className={styles.logo} src={logo} alt="Logo" />
        <h1>STOCK</h1>
      </figure>
      <div className={styles.botoes}>
        <NavLink className={({ isActive }) => isActive ? `${styles.botao} ${styles.ativo}` : styles.botao} to="/">
          Equipamentos
        </NavLink>
        <NavLink className={({ isActive }) => isActive ? `${styles.botao} ${styles.ativo}` : styles.botao} to="/patrimonios">
          Patrimonios
        </NavLink>
        <NavLink className={({ isActive }) => isActive ? `${styles.botao} ${styles.ativo}` : styles.botao} to="/historico">
          Historico
        </NavLink>
        <NavLink className={({ isActive }) => isActive ? `${styles.botao} ${styles.ativo}` : styles.botao} to="/sobre">
          Sobre
        </NavLink>
      </div>
    </section>
  );
}

export default Header;
