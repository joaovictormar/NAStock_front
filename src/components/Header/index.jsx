import styles from "./Header.module.css"
import {Link} from "react-router-dom";
import logo from "../../assets/logo.png"

function Header () {

    return (
        <section className={styles.header}>
            <figure className={styles.figura}>
                <img className={styles.logo} src={logo}/>
                <h1>STOCK</h1>
            </figure>
            <div className={styles.botoes}>
                <Link className={styles.botao} to="/">Home</Link>
                <Link className={styles.botao} to="/estoque">Estoque</Link>
                <Link className={styles.botao} to="/locacao">Locação</Link>
                <Link className={styles.botao} to="/categorias">Categorias</Link>
            </div>
        </section>
    )

};

export default Header;